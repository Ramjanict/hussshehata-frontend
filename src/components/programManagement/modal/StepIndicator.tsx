import { ChevronRight } from "lucide-react";
import React from "react";

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => (
  <div className="flex items-center justify-center mb-8">
    {[
      { num: 1, label: "Basic Info" },
      { num: 2, label: "Day Split" },
      { num: 3, label: "Add Exercises" },
      { num: 4, label: "Review" },
    ].map((step, index) => (
      <React.Fragment key={step.num}>
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep === step.num
                ? "bg-purple-600 text-white"
                : currentStep > step.num
                  ? "bg-purple-200 text-purple-700"
                  : "bg-gray-200 text-gray-500"
            }`}
          >
            {step.num}
          </div>
          <span
            className={`ml-2 text-sm ${currentStep === step.num ? "text-gray-900 font-medium" : "text-gray-500"}`}
          >
            {step.label}
          </span>
        </div>
        {index < 3 && <ChevronRight className="w-4 h-4 text-gray-400 mx-4" />}
      </React.Fragment>
    ))}
  </div>
);
export default StepIndicator;
