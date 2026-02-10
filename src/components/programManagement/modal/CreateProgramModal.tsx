import CommonButton from "@/common/button/CommonButton";
import CommonSelect from "@/common/custom/CommonSelect";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import StepIndicator from "./StepIndicator";

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
const inputClass = {
  label: "block text-sm font-normal text-[#020617] font-inter mb-2",
  input:
    "w-full border border-[#CBD5E1] rounded-md p-3 outline-none text-[#0A0A0A]/50 text-xs border-[#A78BFA] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#A78BFA]",
  error: "text-red-500 text-sm mt-1",
};

interface CreateProgramModalProps {
  setShowCreateModal: (show: boolean) => void;
  setCurrentStep: (step: number) => void;
  currentStep: number;
  setShowExerciseModal: (show: boolean) => void;
}
const statusOptions = [
  { label: "Active", value: "Active" },
  { label: "Draft", value: "Draft" },
  { label: "Archived", value: "Archived" },
] as const;
type StatusType = (typeof statusOptions)[number]["value"];
const durationOptions = [
  { label: "8 Week", value: "8 Week" },
  { label: "10 Week", value: "10 Week" },
  { label: "12 Week", value: "12 Week" },
] as const;

type DurationType = (typeof durationOptions)[number]["value"];

const trainingDaysOptions = [
  { label: "1, 3, 6", value: "1, 3, 6" },
  { label: "2, 4, 6", value: "2, 4, 6" },
  { label: "3, 5, 7", value: "3, 5, 7" },
] as const;

type TrainingDaysType = (typeof trainingDaysOptions)[number]["value"];

const CreateProgramModal: React.FC<CreateProgramModalProps> = ({
  setShowCreateModal,
  setCurrentStep,
  currentStep,
  setShowExerciseModal,
}) => {
  const [selectedWeek, setSelectedWeek] = useState("Week 1");
  const [status, setStatus] = useState<StatusType>("Active");
  const [duration, setDuration] = useState<DurationType>("8 Week");
  const [trainingDays, setTrainingDays] = useState<TrainingDaysType>("1, 3, 6");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Create New Program
          </h2>
          <button
            onClick={() => {
              setShowCreateModal(false);
              setCurrentStep(1);
            }}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <StepIndicator currentStep={currentStep} />

          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Basic Program Information
              </h3>

              <div>
                <label className={inputClass.label}>
                  Program Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 10-Week Monster Confusion (Classic)"
                  className={inputClass.input}
                />
              </div>

              <div>
                <label className={inputClass.label}>Status</label>

                <CommonSelect<StatusType>
                  value={status}
                  item={statusOptions}
                  onValueChange={setStatus}
                  className={inputClass.input}
                  w={240}
                />
              </div>
              <div>
                <label className={inputClass.label}>Duration</label>
                <CommonSelect<DurationType>
                  value={duration}
                  item={durationOptions}
                  onValueChange={setDuration}
                  className={inputClass.input}
                  w={240}
                />
              </div>

              <div>
                <label className={inputClass.label}>
                  Training Days Per Week
                </label>

                <CommonSelect<TrainingDaysType>
                  value={trainingDays}
                  item={trainingDaysOptions}
                  onValueChange={setTrainingDays}
                  className={inputClass.input}
                  w={240}
                />
              </div>

              <div>
                <label className={inputClass.label}>Program Description</label>
                <textarea
                  rows={4}
                  placeholder="Describe the program goals, target audience, and what users will achieve..."
                  className={inputClass.input}
                ></textarea>
              </div>

              <CommonButton onClick={() => setCurrentStep(2)}>
                Next Step
              </CommonButton>
            </div>
          )}

          {/* Step 2: Day Split Configuration */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Day Split Configuration
              </h3>

              <div>
                <label className={inputClass.label}>Select Week</label>
                <select
                  value={selectedWeek}
                  onChange={(e) => setSelectedWeek(e.target.value)}
                  className={inputClass.input}
                >
                  <option>Week 1</option>
                  <option>Week 2</option>
                  <option>Week 3</option>
                </select>
              </div>

              {dayConfigs.map((config) => (
                <div
                  key={config.day}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">
                      Day {config.day}
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={inputClass.label}>Day Focus</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm">
                        <option>Push{config.focus}</option>
                      </select>
                    </div>
                    <div>
                      <label className={inputClass.label}>Select Methods</label>
                      <select className={inputClass.input}>
                        <option>{config.method}</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className={inputClass.label}>Accessories</label>
                    <input
                      type="text"
                      placeholder="List accessories (optional)"
                      className={inputClass.input}
                    />
                  </div>

                  <div className="mb-4">
                    <label className={inputClass.label}>Description</label>
                    <textarea
                      rows={2}
                      placeholder="E.g sets of 5 heavy reps..."
                      className={inputClass.input}
                    ></textarea>
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <CommonButton
                  variant="secondary"
                  onClick={() => setCurrentStep(1)}
                >
                  Previous
                </CommonButton>
                <CommonButton onClick={() => setCurrentStep(3)}>
                  Next Step
                </CommonButton>
              </div>
            </div>
          )}

          {/* Step 3: Add Exercises */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Workout Schedule
              </h3>

              <div>
                <label className={inputClass.label}>Select Week</label>
                <select className={inputClass.input}>
                  <option>Week 1</option>
                </select>
              </div>

              {dayConfigs.map((config) => (
                <div
                  key={config.day}
                  className="border border-indigo-200 bg-indigo-50 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Week 1 (3 workout days)
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Day {config.day}
                      </p>
                      <p className="text-sm text-gray-900">{config.focus}</p>
                      <p className="text-xs text-gray-500">
                        Method: {config.method}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowExerciseModal(true)}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700 text-sm"
                    >
                      <Plus className="w-4 h-4" />
                      Add Exercise
                    </button>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-500 text-center">
                      No exercises added yet. Click "Add Exercise" to start
                      building this workout.
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <CommonButton
                  variant="secondary"
                  onClick={() => setCurrentStep(2)}
                >
                  Previous
                </CommonButton>
                <CommonButton onClick={() => setCurrentStep(4)}>
                  Next Step
                </CommonButton>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Review & Publish
              </h3>
              <p className="text-gray-600">
                Review your program details before publishing...
              </p>

              <div className="flex gap-4">
                <CommonButton
                  variant="secondary"
                  onClick={() => setCurrentStep(3)}
                >
                  Previous
                </CommonButton>
                <CommonButton
                  onClick={() => {
                    setShowCreateModal(false);
                    setCurrentStep(1);
                  }}
                >
                  Publish Program
                </CommonButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProgramModal;
