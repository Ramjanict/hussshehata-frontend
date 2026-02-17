import CommonButton from "@/common/button/CommonButton";
import CommonSelect from "@/common/custom/CommonSelect";
import CommonHeader from "@/common/header/CommonHeader";
import { useState } from "react";

export const inputClass = {
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

type DurationType = (typeof durationOptions)[number]["value"];

const BasicInfo: React.FC<CreateProgramModalProps> = ({ setCurrentStep }) => {
  const [status, setStatus] = useState<StatusType>("Active");
  const [duration, setDuration] = useState<DurationType>("8 Week");
  return (
    <div>
      <div className="space-y-6">
        <CommonHeader size="lg" className="">
          Basic Program Information
        </CommonHeader>

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
          <label className={inputClass.label}>Program Description</label>
          <textarea
            rows={4}
            placeholder="Describe the program goals, target audience, and what users will achieve..."
            className={inputClass.input}
          ></textarea>
        </div>

        <CommonButton onClick={() => setCurrentStep(2)}>Next Step</CommonButton>
      </div>
    </div>
  );
};

export default BasicInfo;
