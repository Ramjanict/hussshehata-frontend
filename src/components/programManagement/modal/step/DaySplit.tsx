import CommonButton from "@/common/button/CommonButton";
import CommonHeader from "@/common/header/CommonHeader";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import CommonSelect from "@/common/custom/CommonSelect";
import CommonSwitch from "@/common/custom/CommonSwitch";
import { ChevronDown, X } from "lucide-react";
import React, { useState } from "react";

import AddButton from "@/common/custom/AddButton";
import { useDaySplitMutation } from "@/store/features/program/programAPI";
import { useAppSelector } from "@/store/hook";
import { inputClass } from "./BasicInfo";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

export type TrainingDayType = "PUSH" | "PULL" | "LEGS";

export type MuscleGroup =
  | "CHEST"
  | "SHOULDERS"
  | "BACK"
  | "BICEPS"
  | "TRAPS"
  | "QUADS"
  | "HAMSTRINGS"
  | "CALVES"
  | "TRICEPS";

export interface Day {
  dayType: TrainingDayType;
  name: string;
  trainingMethod: string;
  description: string;
  howToExecute: string;
  exerciseHint: string;
  hasBFR: boolean;
  hasAbs: boolean;
  muscleGroups?: MuscleGroup[];
}

export interface Week {
  weekNumber: number;
  trainingDays: string[];
  restDays: string[];
  accessories: string[];
  days: Day[];
}

export interface ProgramSchedule {
  weeks: Week[];
}

// ─── Method value → backend enum map ─────────────────────────────────────────

const methodToEnum: Record<string, string> = {
  "5×5": "FIVE_BY_FIVE",
  "Max-OT": "MAX_OT",
  "Bulldozer Training": "BULLDOZER_TRAINING",
  Burns: "BURNS",
  "Gironda 8×8": "GIRONDA_8X8",
  "10×3": "TEN_BY_THREE",
  "High-Rep work": "HIGH_REP_WORK",
  "Yates / High-Intensity": "YATES_HIGH_INTENSITY",
  "Westside Conjugate": "WESTSIDE_CONJUGATE",
  "20-Rep Squats": "TWENTY_REP_SQUATS",
  "Moderate Volume": "MODERATE_VOLUME",
  "Singles / Doubles / Triples": "SINGLES_DOUBLES_TRIPLES",
  Activation: "ACTIVATION",
};

// ─── Muscle display → backend enum map ───────────────────────────────────────

const muscleToEnum: Record<string, MuscleGroup> = {
  Chest: "CHEST",
  Shoulders: "SHOULDERS",
  Back: "BACK",
  Biceps: "BICEPS",
  Traps: "TRAPS",
  Quads: "QUADS",
  Hamstrings: "HAMSTRINGS",
  Calves: "CALVES",
  Triceps: "TRICEPS",
};

// ─── Format muscle list with & before last item ───────────────────────────────

const formatMuscleList = (muscles: string[]): string => {
  if (muscles.length === 0) return "";
  if (muscles.length === 1) return muscles[0];
  const last = muscles[muscles.length - 1];
  const rest = muscles.slice(0, -1);
  return `${rest.join(", ")} & ${last}`;
};

// ─── Zod Schema ───────────────────────────────────────────────────────────────

const dayConfigSchema = z.object({
  day: z.number(),
  focus: z.string().min(1, "Day focus is required"),
  selectedMuscles: z
    .array(z.string())
    .min(1, "Select at least one muscle group"),
  method: z.string().min(1, "Training method is required"),
  accessories: z.array(z.string()),
  description: z.string().min(1, "Description is required"),
  howToExecute: z.string().min(1, "How to execute is required"),
  exerciseHint: z.string().min(1, "Exercise hint is required"),
  bfr: z.boolean(),
  abs: z.boolean(),
});

const weekSchema = z.object({
  weekNumber: z.number(),
  selectedTrainingDays: z
    .array(z.number())
    .min(1, "Select at least one training day"),
  restDays: z.array(z.number()),
  dayConfigs: z.array(dayConfigSchema),
});

const formSchema = z.object({
  weeks: z.array(weekSchema).min(1, "At least one week is required"),
});

type DayConfig = z.infer<typeof dayConfigSchema>;
type WeekData = z.infer<typeof weekSchema>;
type FormValues = z.infer<typeof formSchema>;

// ─── Constants ────────────────────────────────────────────────────────────────

const focusOptions = {
  Push: [
    "Chest",
    "Shoulders",
    "Back",
    "Biceps",
    "Traps",
    "Quads",
    "Hamstrings",
    "Calves",
    "Triceps",
  ],
  Pull: [
    "Chest",
    "Shoulders",
    "Back",
    "Biceps",
    "Traps",
    "Quads",
    "Hamstrings",
    "Calves",
    "Triceps",
  ],
  Leg: [
    "Chest",
    "Shoulders",
    "Back",
    "Biceps",
    "Traps",
    "Quads",
    "Hamstrings",
    "Calves",
    "Triceps",
  ],
};

const methodOptions = [
  { label: "5×5", value: "FIVE_BY_FIVE" },
  { label: "Max-OT", value: "MAX_OT" },
  { label: "Bulldozer Training", value: "BULLDOZER" },
  { label: "Burns", value: "BURNS" },
  { label: "Gironda 8×8", value: "GIRONDA_8X8" },
  { label: "10×3", value: "TEN_BY_THREE" },
  { label: "High-Rep / 20-Rep Squat", value: "HIGH_REP_20_REP_SQUAT" },
  { label: "Yates / High-Intensity", value: "YATES_HIGH_INTENSITY" },
  { label: "Westside Conjugate", value: "WESTSIDE_CONJUGATE" },
  { label: "Moderate Volume", value: "MODERATE_VOLUME" },
  { label: "Singles / Doubles / Triples", value: "SINGLES_DOUBLES_TRIPLES" },
  { label: "Activation", value: "ACTIVATION" },
  { label: "Custom", value: "CUSTOM" },
];

const defaultMuscles = {
  Push: ["Chest", "Shoulders", "Triceps"],
  Pull: ["Back", "Biceps", "Traps"],
  Leg: ["Quads", "Hamstrings", "Calves"],
};

const createDefaultWeek = (weekNumber: number): WeekData => ({
  weekNumber,
  selectedTrainingDays: [1, 3, 6],
  restDays: [2, 4, 5, 7],
  dayConfigs: [
    {
      day: 1,
      focus: "Push",
      selectedMuscles: ["Chest", "Shoulders", "Triceps"],
      method: "5×5",
      accessories: [""],
      description: "",
      howToExecute: "",
      exerciseHint: "",
      bfr: false,
      abs: false,
    },
    {
      day: 3,
      focus: "Pull",
      selectedMuscles: ["Back", "Biceps", "Traps"],
      method: "Max-OT",
      accessories: [""],
      description: "",
      howToExecute: "",
      exerciseHint: "",
      bfr: false,
      abs: false,
    },
    {
      day: 6,
      focus: "Leg",
      selectedMuscles: ["Quads", "Hamstrings", "Calves"],
      method: "Burns",
      accessories: [""],
      description: "",
      howToExecute: "",
      exerciseHint: "",
      bfr: false,
      abs: false,
    },
  ],
});

const focusToTrainingDayType = (focus: string): TrainingDayType => {
  if (focus === "Pull") return "PULL";
  if (focus === "Leg") return "LEGS";
  return "PUSH";
};

const transformFormData = (data: FormValues): ProgramSchedule => ({
  weeks: data.weeks.map((week) => ({
    weekNumber: week.weekNumber,
    trainingDays: week.selectedTrainingDays.map(String),
    restDays: week.restDays.map(String),
    // accessories at week level = flat merge of all day accessories
    accessories: week.dayConfigs.flatMap((dc) => dc.accessories),
    days: week.dayConfigs.map((dc) => ({
      dayType: focusToTrainingDayType(dc.focus),
      // e.g. "Push(Chest, Shoulders & Triceps)"
      name: `${dc.focus}(${formatMuscleList(dc.selectedMuscles)})`,
      trainingMethod: methodToEnum[dc.method] ?? dc.method,
      description: dc.description,
      howToExecute: dc.howToExecute,
      exerciseHint: dc.exerciseHint,
      hasBFR: dc.bfr,
      hasAbs: dc.abs,
      // supply muscleGroups so backend can override auto-infer
      muscleGroups: dc.selectedMuscles.map(
        (m) => muscleToEnum[m] ?? (m.toUpperCase() as MuscleGroup),
      ),
    })),
  })),
});

const FieldError = ({ message }: { message?: string }) =>
  message ? <p className={inputClass.error}>{message}</p> : null;

interface DaySplitProps {
  setCurrentStep: (step: number) => void;
}

const DaySplit: React.FC<DaySplitProps> = ({ setCurrentStep }) => {
  const [daySplit, { isLoading }] = useDaySplitMutation();
  const { weekNumber, programId } = useAppSelector((state) => state.program);

  const [savedWeeks, setSavedWeeks] = useState<number[]>([]);
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);

  const maxWeeks = weekNumber && weekNumber > 0 ? weekNumber : 10;

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weeks: [createDefaultWeek(1)],
    },
  });

  const {
    fields: weekFields,
    append: appendWeek,
    remove: removeWeek,
  } = useFieldArray({
    control,
    name: "weeks",
  });

  const weeks = watch("weeks");
  const rest = watch("weeks.0.restDays");
  console.log("rest", rest);

  const getMuscleDisplayText = (config: DayConfig) => {
    if (!config.selectedMuscles.length) return config.focus;
    return `${config.focus}(${config.selectedMuscles.join(", ")})`;
  };

  const getDayErrors = (dayIdx: number) =>
    errors.weeks?.[activeWeekIndex]?.dayConfigs?.[dayIdx];

  const handleDayToggle = (weekIdx: number, day: number) => {
    const current = getValues(`weeks.${weekIdx}.selectedTrainingDays`);
    const currentConfigs = getValues(`weeks.${weekIdx}.dayConfigs`);

    const newDays = current.includes(day)
      ? current.filter((d) => d !== day)
      : [...current, day].sort((a, b) => a - b);

    const newRestDays = [1, 2, 3, 4, 5, 6, 7].filter(
      (d) => !newDays.includes(d),
    );

    const newDayConfigs: DayConfig[] = newDays.map((selectedDay, index) => {
      const existing = currentConfigs.find((c) => c.day === selectedDay);
      if (existing) return existing;

      const focusTypes: ("Push" | "Pull" | "Leg")[] = ["Push", "Pull", "Leg"];
      const focusType = focusTypes[index % 3];
      return {
        day: selectedDay,
        focus: focusType,
        selectedMuscles: defaultMuscles[focusType],
        method: methodOptions[index % methodOptions.length].value,
        accessories: [],
        description: "",
        howToExecute: "",
        exerciseHint: "",
        bfr: false,
        abs: false,
      };
    });

    setValue(`weeks.${weekIdx}.selectedTrainingDays`, newDays);
    setValue(`weeks.${weekIdx}.restDays`, newRestDays);
    setValue(`weeks.${weekIdx}.dayConfigs`, newDayConfigs);
  };

  const handleMuscleToggle = (
    weekIdx: number,
    dayIdx: number,
    focusType: "Push" | "Pull" | "Leg",
    muscle: string,
  ) => {
    const config = getValues(`weeks.${weekIdx}.dayConfigs.${dayIdx}`);

    if (config.focus !== focusType) {
      setValue(`weeks.${weekIdx}.dayConfigs.${dayIdx}.focus`, focusType);
      setValue(`weeks.${weekIdx}.dayConfigs.${dayIdx}.selectedMuscles`, [
        muscle,
      ]);
    } else {
      const already = config.selectedMuscles.includes(muscle);
      const newMuscles = already
        ? config.selectedMuscles.filter((m) => m !== muscle)
        : [...config.selectedMuscles, muscle];
      setValue(
        `weeks.${weekIdx}.dayConfigs.${dayIdx}.selectedMuscles`,
        newMuscles,
      );
    }
  };

  const handleAddAccessory = (weekIdx: number, dayIdx: number) => {
    const current = getValues(
      `weeks.${weekIdx}.dayConfigs.${dayIdx}.accessories`,
    );
    setValue(`weeks.${weekIdx}.dayConfigs.${dayIdx}.accessories`, [
      ...current,
      "",
    ]);
  };

  const handleAccessoryChange = (
    weekIdx: number,
    dayIdx: number,
    accIdx: number,
    value: string,
  ) => {
    const current = getValues(
      `weeks.${weekIdx}.dayConfigs.${dayIdx}.accessories`,
    );
    const updated = current.map((acc, i) => (i === accIdx ? value : acc));
    setValue(`weeks.${weekIdx}.dayConfigs.${dayIdx}.accessories`, updated);
  };

  const handleRemoveAccessory = (
    weekIdx: number,
    dayIdx: number,
    accIdx: number,
  ) => {
    const current = getValues(
      `weeks.${weekIdx}.dayConfigs.${dayIdx}.accessories`,
    );
    setValue(
      `weeks.${weekIdx}.dayConfigs.${dayIdx}.accessories`,
      current.filter((_, i) => i !== accIdx),
    );
  };

  const handleSaveWeek = () => {
    const currentWeekNumber = weeks[activeWeekIndex]?.weekNumber;
    if (!currentWeekNumber) return;

    if (!savedWeeks.includes(currentWeekNumber)) {
      setSavedWeeks((prev) => [...prev, currentWeekNumber]);
    }

    const nextWeekNumber = (weeks.length ?? 0) + 1;
    if (nextWeekNumber <= maxWeeks && weeks.length === activeWeekIndex + 1) {
      appendWeek(createDefaultWeek(nextWeekNumber));
      setActiveWeekIndex(weeks.length);
    }
  };

  const handleRemoveWeek = (weekIdx: number) => {
    const removedWeekNumber = weeks[weekIdx]?.weekNumber;
    removeWeek(weekIdx);
    setSavedWeeks((prev) => prev.filter((w) => w !== removedWeekNumber));

    const newActive = Math.max(
      0,
      activeWeekIndex >= weekIdx ? activeWeekIndex - 1 : activeWeekIndex,
    );
    setActiveWeekIndex(newActive);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      if (programId) {
        const payload = transformFormData(data);
        console.log("DaySplit payload:", JSON.stringify(payload, null, 2));
        await daySplit({ program_id: programId, data: payload }).unwrap();
        setCurrentStep(3);
      }
    } catch (error: any) {
      console.error(
        "Failed to submit day split:",
        error?.data?.message ?? error,
      );
    }
  };

  const currentWeek = weeks[activeWeekIndex];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <CommonHeader size="lg">Day Split Configuration</CommonHeader>

          {savedWeeks.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {weekFields.map((field, idx) => {
                const weekNum = weeks[idx]?.weekNumber;
                const isSaved = savedWeeks.includes(weekNum);
                return (
                  <button
                    key={field.id}
                    type="button"
                    onClick={() => setActiveWeekIndex(idx)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                      activeWeekIndex === idx
                        ? "bg-blue text-white border-blue"
                        : "bg-white text-gray-700 border-gray-200 hover:border-blue hover:text-blue"
                    }`}
                  >
                    Week {weekNum}
                    {isSaved && (
                      <span
                        className="inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-white/20"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveWeek(idx);
                        }}
                      >
                        <X className="w-3 h-3" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Training Days */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={inputClass.label}>Training Days Per Week</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={`${inputClass.input} flex items-center justify-between cursor-pointer`}
                  >
                    <span>
                      {currentWeek?.selectedTrainingDays
                        .map((d) => d.toString().padStart(2, "0"))
                        .join(", ")}
                    </span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <DropdownMenuItem
                      key={day}
                      className="flex items-center gap-2"
                      onSelect={(e) => e.preventDefault()}
                    >
                      <Checkbox
                        id={`day-${day}`}
                        checked={currentWeek?.selectedTrainingDays.includes(
                          day,
                        )}
                        onCheckedChange={() =>
                          handleDayToggle(activeWeekIndex, day)
                        }
                        className="cursor-pointer data-[state=checked]:bg-blue data-[state=checked]:border-blue [&_svg]:text-white [&_svg]:stroke-white"
                      />
                      <label
                        htmlFor={`day-${day}`}
                        className="flex-1 cursor-pointer"
                      >
                        {day.toString().padStart(2, "0")}
                      </label>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <FieldError
                message={
                  errors.weeks?.[activeWeekIndex]?.selectedTrainingDays?.message
                }
              />
            </div>

            <div>
              <label className={inputClass.label}>Rest day</label>
              <input
                type="text"
                value={currentWeek?.restDays
                  .map((d) => d.toString().padStart(2, "0"))
                  .join(", ")}
                readOnly
                placeholder="Rest days"
                className={inputClass.input}
              />
            </div>
          </div>

          {[...(currentWeek?.dayConfigs ?? [])]
            .sort((a, b) => a.day - b.day)
            .map((config, sortedIndex) => {
              const dayIdx = currentWeek.dayConfigs.findIndex(
                (c) => c.day === config.day,
              );
              const dayErrors = getDayErrors(dayIdx);

              return (
                <div
                  key={config.day}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#818CF8]/12 text-blue text-sm mr-2">
                        {sortedIndex + 1}
                      </span>
                      Day {config.day.toString().padStart(2, "0")}
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Day Focus */}
                    <div>
                      <label className={inputClass.label}>Day Focus</label>
                      <Controller
                        control={control}
                        name={`weeks.${activeWeekIndex}.dayConfigs.${dayIdx}`}
                        render={({ field }) => (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button
                                type="button"
                                className={`${inputClass.input} flex items-center justify-between cursor-pointer text-left`}
                              >
                                <span className="truncate">
                                  {getMuscleDisplayText(field.value)}
                                </span>
                                <ChevronDown className="h-4 w-4 opacity-50 shrink-0 ml-2" />
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-70">
                              {(["Push", "Pull", "Leg"] as const).map(
                                (focusType) => (
                                  <DropdownMenuSub key={focusType}>
                                    <DropdownMenuSubTrigger className="cursor-pointer">
                                      {focusType}
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                      <DropdownMenuSubContent>
                                        {focusOptions[focusType].map(
                                          (muscle) => (
                                            <DropdownMenuItem
                                              key={muscle}
                                              className="flex items-center gap-2"
                                              onSelect={(e) => {
                                                e.preventDefault();
                                                handleMuscleToggle(
                                                  activeWeekIndex,
                                                  dayIdx,
                                                  focusType,
                                                  muscle,
                                                );
                                              }}
                                            >
                                              <Checkbox
                                                id={`${activeWeekIndex}-${config.day}-${focusType}-${muscle}`}
                                                checked={
                                                  field.value.focus ===
                                                    focusType &&
                                                  field.value.selectedMuscles.includes(
                                                    muscle,
                                                  )
                                                }
                                                onClick={(e) =>
                                                  e.stopPropagation()
                                                }
                                                onCheckedChange={() =>
                                                  handleMuscleToggle(
                                                    activeWeekIndex,
                                                    dayIdx,
                                                    focusType,
                                                    muscle,
                                                  )
                                                }
                                                className="cursor-pointer data-[state=checked]:bg-blue data-[state=checked]:border-blue [&_svg]:text-white [&_svg]:stroke-white"
                                              />
                                              <label
                                                htmlFor={`${activeWeekIndex}-${config.day}-${focusType}-${muscle}`}
                                                className="flex-1 cursor-pointer"
                                                onClick={(e) =>
                                                  e.stopPropagation()
                                                }
                                              >
                                                {muscle}
                                              </label>
                                            </DropdownMenuItem>
                                          ),
                                        )}
                                      </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                  </DropdownMenuSub>
                                ),
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        )}
                      />
                      <FieldError
                        message={dayErrors?.selectedMuscles?.message}
                      />
                    </div>

                    {/* Method */}
                    <div>
                      <label className={inputClass.label}>Select Methods</label>
                      <Controller
                        control={control}
                        name={`weeks.${activeWeekIndex}.dayConfigs.${dayIdx}.method`}
                        render={({ field }) => (
                          <CommonSelect
                            item={methodOptions}
                            value={field.value}
                            onValueChange={field.onChange}
                            className="w-full"
                          />
                        )}
                      />
                      <FieldError message={dayErrors?.method?.message} />
                    </div>
                  </div>

                  {/* Accessories — multiple */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <label className={inputClass.label}>Accessories</label>
                      <AddButton
                        action={() =>
                          handleAddAccessory(activeWeekIndex, dayIdx)
                        }
                      />
                    </div>
                    <Controller
                      control={control}
                      name={`weeks.${activeWeekIndex}.dayConfigs.${dayIdx}.accessories`}
                      render={({ field }) => (
                        <div className="space-y-2">
                          {field.value.length === 0 && (
                            <input
                              type="text"
                              placeholder="Click + to add accessories"
                              className={inputClass.input}
                              disabled
                            />
                          )}
                          {field.value.map((acc, accIdx) => (
                            <div
                              key={accIdx}
                              className="flex items-center gap-2"
                            >
                              <input
                                type="text"
                                placeholder="e.g. Low to high rope pull"
                                className={`${inputClass.input} flex-1`}
                                value={acc}
                                onChange={(e) =>
                                  handleAccessoryChange(
                                    activeWeekIndex,
                                    dayIdx,
                                    accIdx,
                                    e.target.value,
                                  )
                                }
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  handleRemoveAccessory(
                                    activeWeekIndex,
                                    dayIdx,
                                    accIdx,
                                  )
                                }
                                className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-gray-200 text-gray-500 hover:text-red-500 hover:border-red-300 transition-colors shrink-0"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    />
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <label className={inputClass.label}>Description</label>
                    <Controller
                      control={control}
                      name={`weeks.${activeWeekIndex}.dayConfigs.${dayIdx}.description`}
                      render={({ field }) => (
                        <textarea
                          rows={2}
                          placeholder="5 sets of 5 heavy reps..."
                          className={inputClass.input}
                          {...field}
                        />
                      )}
                    />
                    <FieldError message={dayErrors?.description?.message} />
                  </div>

                  {/* How to Execute */}
                  <div className="mb-4">
                    <label className={inputClass.label}>How to Execute</label>
                    <Controller
                      control={control}
                      name={`weeks.${activeWeekIndex}.dayConfigs.${dayIdx}.howToExecute`}
                      render={({ field }) => (
                        <textarea
                          rows={2}
                          placeholder="Classic strength and mass builder using 5 sets of 5 reps at around 80-85% of your 1RM"
                          className={inputClass.input}
                          {...field}
                        />
                      )}
                    />
                    <FieldError message={dayErrors?.howToExecute?.message} />
                  </div>

                  {/* Exercise Hint */}
                  <div className="mb-4">
                    <label className={inputClass.label}>Exercise Hint</label>
                    <Controller
                      control={control}
                      name={`weeks.${activeWeekIndex}.dayConfigs.${dayIdx}.exerciseHint`}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="Compound Chest Press, Overhead Press, Close-Grip Bench"
                          className={inputClass.input}
                          {...field}
                        />
                      )}
                    />
                    <FieldError message={dayErrors?.exerciseHint?.message} />
                  </div>

                  {/* BFR */}
                  <div className="mb-4">
                    <label className={inputClass.label}>BFR</label>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md bg-white">
                      <span className="text-sm text-gray-900">BFR</span>
                      <Controller
                        control={control}
                        name={`weeks.${activeWeekIndex}.dayConfigs.${dayIdx}.bfr`}
                        render={({ field }) => (
                          <CommonSwitch
                            checked={field.value}
                            onChange={field.onChange}
                          />
                        )}
                      />
                    </div>
                  </div>

                  {/* ABS */}
                  <div className="mb-4">
                    <label className={inputClass.label}>ABS</label>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md bg-white">
                      <span className="text-sm text-gray-900">ABS</span>
                      <Controller
                        control={control}
                        name={`weeks.${activeWeekIndex}.dayConfigs.${dayIdx}.abs`}
                        render={({ field }) => (
                          <CommonSwitch
                            checked={field.value}
                            onChange={field.onChange}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

          {/* Save Week Button */}
          <div className="flex justify-start">
            <CommonButton
              type="button"
              className="bg-darkPurple"
              onClick={handleSaveWeek}
              disabled={savedWeeks.length >= maxWeeks}
            >
              Save
            </CommonButton>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-md p-4">
            <p className="text-sm text-green-800">
              <span className="font-semibold">Rest Days:</span> days will be
              distributed by Admin throughout the week
            </p>
          </div>

          <div className="flex gap-4">
            <CommonButton variant="secondary" onClick={() => setCurrentStep(1)}>
              Previous
            </CommonButton>
            <CommonButton type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Next Step"}
            </CommonButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DaySplit;
