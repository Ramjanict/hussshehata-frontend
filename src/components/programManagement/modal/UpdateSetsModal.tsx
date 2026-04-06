import ButtonWithLoading from "@/common/button/ButtonWithLoading";
import CloseButton from "@/common/button/CloseButton";
import CommonButton from "@/common/button/CommonButton";
import CommonHeader from "@/common/header/CommonHeader";
import { useUpdateExercisesMutation } from "@/store/features/program/programAPI";
import type { MainExercise } from "@/store/features/program/types/review";
import { useAppSelector } from "@/store/hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { RiDeleteBin5Line } from "react-icons/ri";
import { z } from "zod";
import { inputClass } from "./showExerciseModal";

export const exerciseSetsSchema = z.object({
  sets: z.array(
    z.object({
      setNumber: z.number(),
      reps: z.string().min(1, "Reps required"),
      restSeconds: z.number().min(0, "Rest required"),
    }),
  ),
});

type ExerciseSets = z.infer<typeof exerciseSetsSchema>;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectSet: MainExercise | null;
}

const UpdateSetsModal = ({ isOpen, onClose, selectSet }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExerciseSets>({
    resolver: zodResolver(exerciseSetsSchema),
    defaultValues: {
      sets: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "sets",
  });

  useEffect(() => {
    if (selectSet?.setDetails?.length) {
      reset({
        sets: selectSet.setDetails.map((set) => ({
          setNumber: set.setNumber,
          reps: set.reps,
          restSeconds: set.restSeconds,
        })),
      });
    } else {
      reset({
        sets: [{ setNumber: 1, reps: "", restSeconds: 60 }],
      });
    }
  }, [selectSet, reset]);

  const [updateExercises, { isLoading }] = useUpdateExercisesMutation();
  const { programId, dayId } = useAppSelector((state) => state.program);

  console.log("dayId", dayId, programId);
  const onSubmit = async (data: ExerciseSets) => {
    try {
      if (!programId || !dayId || !selectSet?.id) return;

      const res = await updateExercises({
        programId: programId,
        dayId: dayId,
        exceriseId: selectSet.id,
        data,
      }).unwrap();

      console.log("Updated successfully:", res);
      onClose();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-xl  relative">
        <div className="flex justify-between px-6 pt-6">
          <CommonHeader size="lg" className="text-gray-900">
            Update Exercise Sets
          </CommonHeader>
          <CloseButton action={onClose} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 ">
          {fields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-3 gap-3">
              {/* Set Number */}
              <div>
                <label className={inputClass.label}>Set</label>
                <input
                  type="number"
                  {...register(`sets.${index}.setNumber`, {
                    valueAsNumber: true,
                  })}
                  className={inputClass.input}
                />
              </div>

              {/* Reps */}
              <div>
                <label className={inputClass.label}>Reps</label>
                <input
                  type="text"
                  {...register(`sets.${index}.reps`)}
                  className={inputClass.input}
                />
                {errors.sets?.[index]?.reps && (
                  <p className={inputClass.error}>
                    {errors.sets[index]?.reps?.message}
                  </p>
                )}
              </div>

              {/* Rest Seconds + Delete */}
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <label className={inputClass.label}>Rest (seconds)</label>
                  <input
                    type="number"
                    {...register(`sets.${index}.restSeconds`, {
                      valueAsNumber: true,
                    })}
                    className={inputClass.input}
                  />
                  {errors.sets?.[index]?.restSeconds && (
                    <p className={inputClass.error}>
                      {errors.sets[index]?.restSeconds?.message}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="cursor-pointer"
                >
                  <RiDeleteBin5Line className="w-6 h-6 text-blue" />
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              append({
                setNumber: fields.length + 1,
                reps: "",
                restSeconds: 60,
              })
            }
            className="text-sm text-blue font-medium cursor-pointer"
          >
            + Add Set
          </button>

          <div className="flex justify-end gap-3 pt-4">
            <CommonButton variant="secondary" onClick={onClose}>
              Cancel
            </CommonButton>
            <CommonButton type="submit">
              {isLoading ? <ButtonWithLoading title="Updating..." /> : "Update"}
            </CommonButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSetsModal;
