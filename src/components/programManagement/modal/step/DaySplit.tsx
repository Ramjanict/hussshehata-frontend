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
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

import AddButton from "@/common/custom/AddButton";
import { inputClass } from "./BasicInfo";

interface DayConfig {
  day: number;
  focus: string;
  selectedMuscles: string[];
  method: string;
  accessories: string;
  description: string;
  howToExecute: string;
  exerciseHint: string;
  bfr: boolean;
  abs: boolean;
}

interface DaySplitProps {
  selectedWeek: string;
  setSelectedWeek: (week: string) => void;
  setCurrentStep: (step: number) => void;
}

const DaySplit: React.FC<DaySplitProps> = ({
  selectedWeek,
  setSelectedWeek,
  setCurrentStep,
}) => {
  // State for training days and rest days
  const [selectedTrainingDays, setSelectedTrainingDays] = useState<number[]>([
    1, 3, 6,
  ]);
  const [restDays, setRestDays] = useState<number[]>([2, 4, 5, 7]);

  // State for day configurations
  const [dayConfigs, setDayConfigs] = useState<DayConfig[]>([
    {
      day: 1,
      focus: "Push",
      selectedMuscles: ["Chest", "Shoulders", "Triceps"],
      method: "5×5",
      accessories: "",
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
      accessories: "",
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
      accessories: "",
      description: "",
      howToExecute: "",
      exerciseHint: "",
      bfr: false,
      abs: false,
    },
  ]);

  // Predefined focus options with their available muscle groups
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

  // Method options
  const methodOptions = [
    { label: "5×5", value: "5×5" },
    { label: "Max-OT", value: "Max-OT" },
    { label: "Bulldozer Training", value: "Bulldozer Training" },
    { label: "Burns", value: "Burns" },
    { label: "Gironda 8×8", value: "Gironda 8×8" },
    { label: "10×3", value: "10×3" },
    { label: "High-Rep work", value: "High-Rep work" },
    { label: "Yates / High-Intensity", value: "Yates / High-Intensity" },
    { label: "Westside Conjugate", value: "Westside Conjugate" },
    { label: "20-Rep Squats", value: "20-Rep Squats" },
    { label: "Moderate Volume", value: "Moderate Volume" },
    {
      label: "Singles / Doubles / Triples",
      value: "Singles / Doubles / Triples",
    },
    { label: "Activation", value: "Activation" },
  ];

  // Handle day checkbox toggle
  const handleDayToggle = (day: number) => {
    setSelectedTrainingDays((prev) => {
      const newDays = prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day].sort((a, b) => a - b);

      // Calculate rest days (days not selected)
      const allDays = [1, 2, 3, 4, 5, 6, 7];
      const newRestDays = allDays.filter((d) => !newDays.includes(d));
      setRestDays(newRestDays);

      // Update dayConfigs based on selected training days
      const newDayConfigs = newDays.map((selectedDay, index) => {
        const existingConfig = dayConfigs.find(
          (config) => config.day === selectedDay,
        );
        if (existingConfig) {
          return existingConfig;
        }

        // Default focus and method based on pattern (Push, Pull, Leg repeating)
        const focusTypes: ("Push" | "Pull" | "Leg")[] = ["Push", "Pull", "Leg"];
        const focusIndex = index % 3;
        const methodIndex = index % methodOptions.length;
        const focusType = focusTypes[focusIndex];

        // Default selected muscles based on focus type
        const defaultMuscles = {
          Push: ["Chest", "Shoulders", "Triceps"],
          Pull: ["Back", "Biceps", "Traps"],
          Leg: ["Quads", "Hamstrings", "Calves"],
        };

        return {
          day: selectedDay,
          focus: focusType,
          selectedMuscles: defaultMuscles[focusType],
          method: methodOptions[methodIndex]?.value || methodOptions[0].value,
          accessories: "",
          description: "",
          howToExecute: "",
          exerciseHint: "",
          bfr: false,
          abs: false,
        };
      });

      setDayConfigs(newDayConfigs);

      return newDays;
    });
  };

  // Handle focus change for a specific day
  const handleFocusChange = (
    day: number,
    focusType: "Push" | "Pull" | "Leg",
  ) => {
    setDayConfigs((prev) =>
      prev.map((config) =>
        config.day === day
          ? {
              ...config,
              focus: focusType,
              // Keep existing selected muscles, don't reset them
            }
          : config,
      ),
    );
  };

  // Handle muscle group toggle
  const handleMuscleToggle = (day: number, muscle: string) => {
    setDayConfigs((prev) =>
      prev.map((config) => {
        if (config.day === day) {
          const newMuscles = config.selectedMuscles.includes(muscle)
            ? config.selectedMuscles.filter((m) => m !== muscle)
            : [...config.selectedMuscles, muscle];
          return { ...config, selectedMuscles: newMuscles };
        }
        return config;
      }),
    );
  };

  // Handle method change for a specific day
  const handleMethodChange = (day: number, value: string) => {
    setDayConfigs((prev) =>
      prev.map((config) =>
        config.day === day ? { ...config, method: value } : config,
      ),
    );
  };

  // Handle field changes
  const handleFieldChange =
    (day: number, field: keyof DayConfig) => (value: string | boolean) => {
      setDayConfigs((prev) =>
        prev.map((config) =>
          config.day === day ? { ...config, [field]: value } : config,
        ),
      );
    };

  // Get display text for selected muscles
  const getMuscleDisplayText = (config: DayConfig) => {
    if (config.selectedMuscles.length === 0) return config.focus;
    return `${config.focus}(${config.selectedMuscles.join(", ")})`;
  };

  return (
    <div>
      <div className="space-y-6">
        <CommonHeader size="lg" className="">
          Day Split Configuration
        </CommonHeader>

        <div>
          <label className={inputClass.label}>Select Week</label>

          <CommonSelect
            value={selectedWeek}
            item={[
              { label: "Week 1", value: "Week 1" },
              { label: "Week 2", value: "Week 2" },
              { label: "Week 3", value: "Week 3" },
            ]}
            onValueChange={setSelectedWeek}
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={inputClass.label}>Training Days Per Week</label>

            {/* Dropdown for day selection */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`${inputClass.input} flex items-center justify-between cursor-pointer`}
                >
                  <span>
                    {selectedTrainingDays
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
                      checked={selectedTrainingDays.includes(day)}
                      onCheckedChange={() => handleDayToggle(day)}
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
          </div>

          <div>
            <label className={inputClass.label}>Rest day</label>
            <input
              type="text"
              value={restDays
                .map((d) => d.toString().padStart(2, "0"))
                .join(", ")}
              readOnly
              placeholder="Rest days"
              className={inputClass.input}
            />
          </div>
        </div>

        {/* Sort dayConfigs by day number for consistent display */}
        {[...dayConfigs]
          .sort((a, b) => a.day - b.day)
          .map((config, index) => (
            <div
              key={config.day}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#818CF8]/12 text-blue text-sm mr-2">
                    {index + 1}
                  </span>
                  Day {config.day.toString().padStart(2, "0")}
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={inputClass.label}>Day Focus</label>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`${inputClass.input} flex items-center justify-between cursor-pointer text-left`}
                      >
                        <span className="truncate">
                          {getMuscleDisplayText(config)}
                        </span>
                        <ChevronDown className="h-4 w-4 opacity-50 flex-shrink-0 ml-2" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[280px]">
                      {(["Push", "Pull", "Leg"] as const).map((focusType) => (
                        <DropdownMenuSub key={focusType}>
                          <DropdownMenuSubTrigger>
                            {focusType}
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              {focusOptions[focusType].map((muscle) => (
                                <DropdownMenuItem
                                  key={muscle}
                                  className="flex items-center gap-2"
                                  onSelect={(e) => {
                                    e.preventDefault();
                                    handleFocusChange(config.day, focusType);
                                    handleMuscleToggle(config.day, muscle);
                                  }}
                                >
                                  <Checkbox
                                    id={`${config.day}-${muscle}`}
                                    checked={
                                      config.focus === focusType &&
                                      config.selectedMuscles.includes(muscle)
                                    }
                                    onCheckedChange={() => {
                                      handleFocusChange(config.day, focusType);
                                      handleMuscleToggle(config.day, muscle);
                                    }}
                                    className="data-[state=checked]:bg-blue data-[state=checked]:border-blue "
                                  />
                                  <label
                                    htmlFor={`${config.day}-${muscle}`}
                                    className="flex-1 cursor-pointer "
                                  >
                                    {muscle}
                                  </label>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div>
                  <label className={inputClass.label}>Select Methods</label>
                  <CommonSelect
                    item={methodOptions}
                    value={config.method}
                    onValueChange={(value) =>
                      handleMethodChange(config.day, value)
                    }
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <label className={inputClass.label}>Accessories</label>
                  <AddButton action={() => {}} />
                </div>
                <input
                  type="text"
                  placeholder="Like in high reps pull"
                  className={inputClass.input}
                  value={config.accessories}
                  onChange={(e) =>
                    handleFieldChange(config.day, "accessories")(e.target.value)
                  }
                />
              </div>

              <div className="mb-4">
                <label className={inputClass.label}>Description</label>
                <textarea
                  rows={2}
                  placeholder="5 sets of 5 heavy reps..."
                  className={inputClass.input}
                  value={config.description}
                  onChange={(e) =>
                    handleFieldChange(config.day, "description")(e.target.value)
                  }
                ></textarea>
              </div>

              <div className="mb-4">
                <label className={inputClass.label}>How to Execute</label>
                <textarea
                  rows={2}
                  placeholder="Classic strength and mass builder using 5 sets of 5 reps at around 80-85% of your 1RM"
                  className={inputClass.input}
                  value={config.howToExecute}
                  onChange={(e) =>
                    handleFieldChange(
                      config.day,
                      "howToExecute",
                    )(e.target.value)
                  }
                ></textarea>
              </div>

              <div className="mb-4">
                <label className={inputClass.label}>Exercise Hint</label>
                <input
                  type="text"
                  placeholder="Compound Chest Press, Overhead Press, Close-Grip Bench"
                  className={inputClass.input}
                  value={config.exerciseHint}
                  onChange={(e) =>
                    handleFieldChange(
                      config.day,
                      "exerciseHint",
                    )(e.target.value)
                  }
                />
              </div>

              {/* BFR Toggle */}
              <div className="mb-4">
                <label className={inputClass.label}>BFR</label>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md bg-white">
                  <span className="text-sm text-gray-900">BFR</span>
                  <CommonSwitch
                    checked={config.bfr}
                    onChange={handleFieldChange(config.day, "bfr")}
                  />
                </div>
              </div>

              {/* ABS Toggle */}
              <div className="mb-4">
                <label className={inputClass.label}>ABS</label>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md bg-white">
                  <span className="text-sm text-gray-900">ABS</span>
                  <CommonSwitch
                    checked={config.abs}
                    onChange={handleFieldChange(config.day, "abs")}
                  />
                </div>
              </div>
            </div>
          ))}

        {/* Save Button */}
        <div className="flex justify-start">
          <CommonButton className="bg-darkPurple">Save</CommonButton>
        </div>

        {/* Rest Days Info */}
        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <p className="text-sm text-green-800">
            <span className="font-semibold">Rest Days:</span> 4 days will be
            distributed BY Admin throughout the week
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <CommonButton variant="secondary" onClick={() => setCurrentStep(1)}>
            Previous
          </CommonButton>
          <CommonButton onClick={() => setCurrentStep(3)}>
            Next Step
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default DaySplit;
