import CloseButton from "@/common/button/CloseButton";
import CommonHeader from "@/common/header/CommonHeader";
import { useState } from "react";
import StepIndicator from "./StepIndicator";
import AddExercises from "./step/AddExercises";
import BasicInfo from "./step/BasicInfo";
import DaySplit from "./step/DaySplit";
import Review from "./step/Review";

interface CreateProgramModalProps {
  setShowCreateModal: (show: boolean) => void;
  setCurrentStep: (step: number) => void;
  currentStep: number;
  setShowExerciseModal: (show: boolean) => void;
}

const CreateProgramModal: React.FC<CreateProgramModalProps> = ({
  setShowCreateModal,
  setCurrentStep,
  currentStep,
  setShowExerciseModal,
}) => {
  const [selectedWeek, setSelectedWeek] = useState("Week 1");

  const handleClose = () => {
    setShowCreateModal(false);
    setCurrentStep(1);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <CommonHeader size="lg" className="text-gray-900">
            Create New Program
          </CommonHeader>

          <CloseButton action={handleClose} />
        </div>

        <div className="p-6">
          <StepIndicator currentStep={currentStep} />

          {currentStep === 1 && (
            <BasicInfo
              setCurrentStep={setCurrentStep}
              setShowCreateModal={setShowCreateModal}
              setShowExerciseModal={setShowExerciseModal}
              currentStep={currentStep}
            />
          )}

          {currentStep === 2 && (
            <DaySplit
              setCurrentStep={setCurrentStep}
              selectedWeek={selectedWeek}
              setSelectedWeek={setSelectedWeek}
            />
          )}

          {currentStep === 3 && (
            <AddExercises
              setCurrentStep={setCurrentStep}
              setShowExerciseModal={setShowExerciseModal}
            />
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <Review
                setCurrentStep={setCurrentStep}
                setShowCreateModal={setShowCreateModal}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProgramModal;
