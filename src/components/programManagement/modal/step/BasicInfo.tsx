import ActionButton from "@/common/button/ActionButton";
import ButtonWithLoading from "@/common/button/ButtonWithLoading";
import CommonButton from "@/common/button/CommonButton";
import CommonSelect from "@/common/custom/CommonSelect";
import CommonHeader from "@/common/header/CommonHeader";
import {
  setProgramId,
  setWeekNumber,
} from "@/store/baseApi/programSlice/program.slice";

import {
  useBasicInfoMutation,
  useUpdateBasicInfoMutation,
} from "@/store/features/program/programAPI";
import type { ProgramSingle } from "@/store/features/program/types/program";
import { useAppDispatch } from "@/store/hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2 } from "lucide-react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

export const inputClass = {
  label: "block text-sm font-normal text-[#090818] font-inter mb-2",
  input:
    "w-full border border-[#CBD5E1] rounded-md p-3 outline-none text-[#090818] text-xs border-[#A78BFA] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#A78BFA]",
  error: "text-red-500 text-sm mt-1",
};

// ── Zod Schema ──────────────────────────────────────────────────────────────
const basicInfoSchema = z.object({
  name: z
    .string()
    .min(1, "Program name is required")
    .max(100, "Name must be 100 characters or fewer"),
  duration: z.string().min(1, "Duration is required"),
  features: z
    .array(z.object({ value: z.string().min(1, "Feature cannot be empty") }))
    .min(1, "At least one feature is required"),
  description: z
    .string()
    .min(1, "Program description is required")
    .max(500, "Description must be 500 characters or fewer"),
});

type BasicInfoFormValues = z.infer<typeof basicInfoSchema>;

const durationOptions = [
  { label: "1 Week", value: "1 Week" },
  { label: "2 Week", value: "2 Week" },
  { label: "3 Week", value: "3 Week" },
  { label: "4 Week", value: "4 Week" },
  { label: "5 Week", value: "5 Week" },
  { label: "6 Week", value: "6 Week" },
  { label: "7 Week", value: "7 Week" },
  { label: "8 Week", value: "8 Week" },
  { label: "9 Week", value: "9 Week" },
  { label: "10 Week", value: "10 Week" },
] as const;

interface CreateProgramModalProps {
  setCurrentStep: (step: number) => void;
  selectProgram: ProgramSingle | null;
}

const BasicInfo: React.FC<CreateProgramModalProps> = ({
  setCurrentStep,
  selectProgram,
}) => {
  const [basicInfo, { isLoading: isBasicInfoLoading }] = useBasicInfoMutation();
  const [updateBasicInfo] = useUpdateBasicInfoMutation();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BasicInfoFormValues>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      name: selectProgram?.name || "",
      duration: `${selectProgram?.durationWeeks} Week` || "8 Week",
      description: selectProgram?.description || "",
      features: selectProgram?.features.map((f) => ({ value: f })) || [
        { value: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray<
    BasicInfoFormValues,
    "features"
  >({
    control,
    name: "features",
  });

  const onSubmit = async (data: BasicInfoFormValues) => {
    const payload = {
      name: data.name,
      durationWeeks: parseInt(data.duration),
      description: data.description,
      features: data.features.map((f) => f.value),
    };

    try {
      if (selectProgram) {
        await updateBasicInfo({
          program_id: selectProgram.id,
          data: payload,
        }).unwrap();
        dispatch(setProgramId(selectProgram.id));
        dispatch(setWeekNumber(payload.durationWeeks));
      } else {
        const res = await basicInfo(payload).unwrap();
        dispatch(setProgramId(res.data.data.id));
        dispatch(setWeekNumber(res.data.data.durationWeeks));
      }
      setCurrentStep(2);
    } catch (error) {
      console.error("Failed to save basic info:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <CommonHeader size="lg">Basic Program Information</CommonHeader>

      {/* Program Name */}
      <div>
        <label className={inputClass.label}>Program Name *</label>
        <input
          {...register("name")}
          className={inputClass.input}
          placeholder="Enter program name"
        />
        {errors.name && (
          <p className={inputClass.error}>{errors.name.message}</p>
        )}
      </div>

      {/* Duration */}
      <div>
        <label className={inputClass.label}>Duration</label>
        <Controller
          name="duration"
          control={control}
          render={({ field }) => (
            <CommonSelect
              value={field.value}
              item={durationOptions}
              onValueChange={field.onChange}
              className={inputClass.input}
              w={240}
            />
          )}
        />
        {errors.duration && (
          <p className={inputClass.error}>{errors.duration.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className={inputClass.label}>Program Description</label>
        <textarea
          {...register("description")}
          className={inputClass.input}
          placeholder="Enter program description"
          rows={4}
        />
        {errors.description && (
          <p className={inputClass.error}>{errors.description.message}</p>
        )}
      </div>

      {/* Features */}
      <div>
        <label className={inputClass.label}>Program Features *</label>
        <div className="space-y-2">
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2">
              <input
                {...register(`features.${index}.value`)} // ← .value
                className={inputClass.input}
                placeholder={`Feature ${index + 1}`}
              />

              <ActionButton
                onClick={() => remove(index)}
                variant="delete"
                isDelete={fields.length === 1}
              >
                <Trash2 className="w-5 h-5" />
              </ActionButton>
            </div>
          ))}
        </div>
        {errors.features && (
          <p className={inputClass.error}>
            {errors.features.message as string}
          </p>
        )}

        <button
          type="button"
          onClick={() => append({ value: "" })}
          className="mt-2 text-sm text-[#A78BFA] cursor-pointer"
        >
          + Add Feature
        </button>
      </div>

      {/* Submit */}
      <CommonButton type="submit">
        {isBasicInfoLoading ? (
          <ButtonWithLoading title="processing..." />
        ) : (
          "Next Step"
        )}
      </CommonButton>
    </form>
  );
};

export default BasicInfo;
