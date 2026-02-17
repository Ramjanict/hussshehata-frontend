import CommonButton from "@/common/button/CommonButton";
import CommonSelect from "@/common/custom/CommonSelect";
import CommonHeader from "@/common/header/CommonHeader";
import { Plus } from "lucide-react";
import { inputClass } from "./BasicInfo";

const dayConfigs = [
  {
    day: 1,
    focus: "Push(Chest, Shoulders & Triceps)",
    method: "5×5",
    exercises: [],
  },
  {
    day: 2,
    focus: "Pull(Back, Biceps & Traps)",
    method: "Max-OT",
    exercises: [],
  },
  {
    day: 3,
    focus: "Leg(Quads, Hamstrings & Calves)",
    method: "Burns",
    exercises: [],
  },
];

interface CreateProgramModalProps {
  setCurrentStep: (step: number) => void;
  setShowExerciseModal: (show: boolean) => void;
}

const AddExercises: React.FC<CreateProgramModalProps> = ({
  setCurrentStep,
  setShowExerciseModal,
}) => {
  return (
    <div>
      <div className="space-y-6">
        <CommonHeader size="lg" className="">
          Day Split Configuration
        </CommonHeader>

        <div>
          <label className={inputClass.label}>Select Week</label>
          <CommonSelect
            value="Week 1"
            item={[{ label: "Week 1", value: "Week 1" }]}
            onValueChange={() => {}}
            className="w-full"
          />
        </div>
        {dayConfigs.map((config) => (
          <div
            key={config.day}
            className="border border-indigo-200 bg-indigo-50 rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-medium text-gray-900">
                  Week 1{" "}
                  <span className="text-[#6A7282]"> (3 workout days)</span>
                </h4>
                <p className="text-sm text-gray-600 mt-1">Day {config.day}</p>
                <p className="text-sm text-gray-900">{config.focus}</p>
                <p className="text-xs text-gray-500">Method: {config.method}</p>
              </div>

              <CommonButton
                className="bg-blue"
                onClick={() => setShowExerciseModal(true)}
              >
                <Plus className="w-4 h-4" />
                Add Exercise
              </CommonButton>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-500 text-center">
                No exercises added yet. Click "Add Exercise" to start building
                this workout.
              </p>
            </div>
          </div>
        ))}
        <div className="flex gap-4">
          <CommonButton variant="secondary" onClick={() => setCurrentStep(2)}>
            Previous
          </CommonButton>
          <CommonButton onClick={() => setCurrentStep(4)}>
            Next Step
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default AddExercises;
