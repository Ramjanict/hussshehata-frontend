import ButtonWithLoading from "@/common/button/ButtonWithLoading";
import CommonButton from "@/common/button/CommonButton";
import SectionHeader from "@/common/button/SectionHeader";
import { useProgramPublishMutation } from "@/store/features/program/programAPI";
import type { ProgramReviewResponse } from "@/store/features/program/types/review";
import { useAppSelector } from "@/store/hook";

interface Props {
  setCurrentStep: (step: number) => void;
  setShowCreateModal: (show: boolean) => void;
  review: ProgramReviewResponse;
}
const Review: React.FC<Props> = ({
  setCurrentStep,
  setShowCreateModal,
  review,
}) => {
  const weeks = review.data.data.weeks ?? [];
  const program = review.data.data;
  const { programId } = useAppSelector((state) => state.program);

  const [programPublish, { isLoading }] = useProgramPublishMutation();

  const handlePublish = async () => {
    if (!programId) return;
    await programPublish({ id: programId, data: { publish: true } });
    setShowCreateModal(false);
    setCurrentStep(1);
  };
  return (
    <div className="">
      <div className="">
        <SectionHeader
          title="Review & Publish"
          description="Review your program details before publishing..."
        />

        <div className="">
          <div className="mb-6 p-4 border border-blue rounded-lg">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Program Information
            </h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-sm text-gray-600 min-w-[80px]">
                  Name:
                </span>
                <span className="text-sm text-gray-900">{program.name}</span>
              </div>
              <div className="flex items-start">
                <span className="text-sm text-gray-600 min-w-[80px]">
                  Duration:
                </span>
                <span className="text-sm text-gray-900">
                  {program.duration}
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-sm text-gray-600 min-w-[80px]">
                  Description:
                </span>
                <span className="text-sm text-gray-900">
                  {program.description}
                </span>
              </div>
            </div>
          </div>

          <div className=" border border-blue rounded-lg p-4 ">
            {weeks.map((week) => (
              <div key={week.weekNumber} className="   ">
                <h3 className="text-base font-semibold text-gray-900  border-b border-[#A78BFA]/50 pb-2.5">
                  Week {week.weekNumber}
                </h3>

                {week.days.map((day) => (
                  <div
                    key={`week-${week.weekNumber}-day-${day.dayNumber} `}
                    className="mb-6 p-4 border-b border-[#A78BFA]/50 "
                  >
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-900">
                          Day {day.dayNumber}: {day.name}
                        </h4>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div>
                          <span className="text-gray-600">Method:</span>
                          <span className="text-gray-900 ml-1">
                            {day.method}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Description:</span>
                          <span className="text-gray-900 ml-1">
                            {day.notes}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">How to Execute:</span>
                          <span className="text-gray-900 ml-1">
                            {day.notes}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Exercise Hint:</span>
                          <span className="text-gray-900 ml-1">
                            {day.notes}
                          </span>
                        </div>
                        <div>
                          {day.mainExercises.map((mainExercise, index) => (
                            <div key={index}>
                              <span className="text-gray-600">
                                Exercise Name:
                              </span>
                              <span className="text-gray-900 ml-1">
                                {mainExercise.exerciseName}
                              </span>
                              <div>
                                <span className="text-gray-600">Set:</span>
                                <span className="text-gray-900 ml-1">
                                  {mainExercise.sets}
                                </span>
                                <span className="text-gray-600 ml-3">Rep:</span>
                                <span className="text-gray-900 ml-1">
                                  {mainExercise.reps}
                                </span>
                                <span className="text-gray-600 ml-3">
                                  Rest:
                                </span>
                                <span className="text-gray-900 ml-1">
                                  {mainExercise.rest}
                                </span>
                                {day && (
                                  <div>
                                    <span className="text-gray-600">
                                      Optional BFR finisher:
                                    </span>
                                    <span className="text-gray-900 ml-1">
                                      {day.bfrFinisher ? "Yes" : "No"}
                                    </span>
                                  </div>
                                )}
                                {day.absNote && (
                                  <div>
                                    <span className="text-gray-600">ABS:</span>
                                    <span className="text-gray-900 ml-1">
                                      {day.absNote}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <CommonButton variant="secondary" onClick={() => setCurrentStep(3)}>
            Previous
          </CommonButton>
          <CommonButton onClick={handlePublish}>
            {isLoading ? (
              <ButtonWithLoading title="Publishing" />
            ) : (
              "Publish Program"
            )}
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default Review;
