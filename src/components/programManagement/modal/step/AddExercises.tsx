import ActionButton from "@/common/button/ActionButton";
import CommonButton from "@/common/button/CommonButton";
import CommonHeader from "@/common/header/CommonHeader";
import { setDayId } from "@/store/baseApi/programSlice/program.slice";
import { useDeleteExercisesMutation } from "@/store/features/program/programAPI";
import type {
  MainExercise,
  ProgramReviewResponse,
} from "@/store/features/program/types/review";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import ShowExerciseModal from "../showExerciseModal";
import UpdateSetsModal from "../UpdateSetsModal";

interface CreateProgramModalProps {
  setCurrentStep: (step: number) => void;
  review?: ProgramReviewResponse;
}

const AddExercises: React.FC<CreateProgramModalProps> = ({
  setCurrentStep,
  review,
}) => {
  const weeks = review?.data?.data?.weeks ?? [];

  const [showExerciseModal, setShowExerciseModal] = useState(false);

  const [deleteExercises] = useDeleteExercisesMutation();
  const disPatch = useAppDispatch();
  const handleDay = (dayId: string) => {
    disPatch(setDayId(dayId));
    setShowExerciseModal(true);
  };
  const { programId } = useAppSelector((state) => state.program);
  const [showSetModal, setShowSetModal] = useState(false);
  const [exceriseId, setExceriseId] = useState<string | null>(null);
  const [selectSet, setSelectSet] = useState<MainExercise | null>(null);
  const handleDelete = async (dayId: string, exceriseId: string) => {
    if (!programId || !dayId || !exceriseId) return;

    try {
      setExceriseId(exceriseId);

      await deleteExercises({
        programId,
        dayId,
        exceriseId,
      });
    } catch (error) {
      console.error("Delete exercise failed:", error);
    } finally {
      setExceriseId(null);
    }
  };

  return (
    <div>
      <div className="space-y-6">
        <CommonHeader size="lg" className="">
          Day Split Configuration
        </CommonHeader>

        {weeks.map((week) => (
          <div key={week.weekNumber} className="space-y-4">
            {week.days.map((dayConfig) => (
              <div
                key={`${week.weekNumber}-${dayConfig.dayNumber}`}
                className="border border-indigo-200 bg-indigo-50 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Week {week.weekNumber}{" "}
                      <span className="text-[#6A7282]">
                        ({week.trainingDays.length} workout days)
                      </span>
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Day {dayConfig.dayNumber}
                    </p>
                    <p className="text-sm text-gray-900">
                      {dayConfig.name} ({dayConfig.dayType})
                    </p>
                    <p className="text-xs text-gray-500">
                      Method: {dayConfig.method}
                    </p>
                    {dayConfig.muscleGroups?.length > 0 && (
                      <p className="text-xs text-gray-400">
                        Muscles: {dayConfig.muscleGroups.join(", ")}
                      </p>
                    )}
                  </div>

                  <CommonButton
                    className="bg-blue"
                    onClick={() => handleDay(dayConfig.id)}
                  >
                    <Plus className="w-4 h-4" />
                    Add Exercise
                  </CommonButton>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                  <CommonHeader size="lg" className="">
                    Main exercises
                  </CommonHeader>
                  {dayConfig.mainExercises?.length > 0 ? (
                    <div className="space-y-4">
                      {dayConfig.mainExercises.map((exercise, idx) => (
                        <div className="flex justify-between items-center border border-blue rounded-lg p-4">
                          <p key={idx} className="text-sm text-gray-700  ">
                            <span className="text-blue">{idx + 1}.</span>
                            {exercise.exerciseName}
                          </p>
                          <div className="flex gap-2">
                            <ActionButton
                              variant="edit"
                              onClick={() => {
                                setShowSetModal(true);
                                setSelectSet(exercise);
                              }}
                            >
                              <Edit2 size={16} />
                            </ActionButton>
                            <ActionButton
                              onClick={() =>
                                handleDelete(dayConfig.id, exercise.id)
                              }
                              variant="delete"
                              isDelete={exceriseId === exercise.id}
                            >
                              <Trash2 size={16} />
                            </ActionButton>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 text-center mt-1">
                      No exercises added yet. Click "Add Exercise" to start
                      building this workout.
                    </p>
                  )}
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                  <CommonHeader size="lg" className="">
                    Bfr Exercises
                  </CommonHeader>
                  {dayConfig.bfrExercises?.length > 0 ? (
                    <div className="space-y-4 mt-4">
                      {dayConfig.bfrExercises.map((exercise, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center border border-blue rounded-lg p-4"
                        >
                          <p className="text-sm text-gray-700 ">
                            <span className="text-blue">{idx + 1}.</span>
                            {exercise.exerciseName}
                          </p>
                          <div className="flex gap-2">
                            <ActionButton
                              onClick={() => {
                                setShowSetModal(true);
                                setSelectSet(exercise);
                              }}
                              variant="edit"
                            >
                              <Edit2 size={16} />
                            </ActionButton>
                            <ActionButton
                              onClick={() =>
                                handleDelete(dayConfig.id, exercise.id)
                              }
                              variant="delete"
                              isDelete={exceriseId === exercise.id}
                            >
                              <Trash2 size={16} />
                            </ActionButton>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 text-center mt-1">
                      No exercises added yet. Click "Add Exercise" to start
                      building this workout.
                    </p>
                  )}
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                  <CommonHeader size="lg" className="">
                    Abs Exercises
                  </CommonHeader>
                  {dayConfig.absExercises?.length > 0 ? (
                    <div className="space-y-4 mt-4">
                      {dayConfig.absExercises.map((exercise, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center border border-blue rounded-lg p-4"
                        >
                          <p className="text-sm text-gray-700 ">
                            <span className="text-blue">{idx + 1}.</span>
                            {exercise.exerciseName}
                          </p>
                          <div className="flex gap-2">
                            <ActionButton
                              onClick={() => {
                                setShowSetModal(true);
                                setSelectSet(exercise);
                              }}
                              variant="edit"
                            >
                              <Edit2 size={16} />
                            </ActionButton>
                            <ActionButton
                              onClick={() =>
                                handleDelete(dayConfig.id, exercise.id)
                              }
                              variant="delete"
                              isDelete={exceriseId === exercise.id}
                            >
                              <Trash2 size={16} />
                            </ActionButton>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 text-center mt-1">
                      No exercises added yet. Click "Add Exercise" to start
                      building this workout.
                    </p>
                  )}
                </div>

                {dayConfig.notes && (
                  <p className="text-xs text-gray-400 mt-2 italic">
                    Note: {dayConfig.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}

        {weeks.length === 0 && (
          <p className="text-sm text-gray-500 text-center py-8">
            No week data available yet.
          </p>
        )}

        <div className="flex gap-4">
          <CommonButton variant="secondary" onClick={() => setCurrentStep(2)}>
            Previous
          </CommonButton>
          <CommonButton onClick={() => setCurrentStep(4)}>
            Next Step
          </CommonButton>
        </div>
      </div>
      {showExerciseModal && (
        <ShowExerciseModal setShowExerciseModal={setShowExerciseModal} />
      )}
      {selectSet && (
        <UpdateSetsModal
          isOpen={showSetModal}
          onClose={() => setShowSetModal(false)}
          selectSet={selectSet}
        />
      )}
    </div>
  );
};

export default AddExercises;
