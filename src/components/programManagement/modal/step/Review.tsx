import CommonButton from "@/common/button/CommonButton";
import SectionHeader from "@/common/button/SectionHeader";
import React, { useState } from "react";

interface Exercise {
  hint: string;
  name: string;
  sets?: string;
  reps?: string;
  rest?: string;
  optional?: string;
  abs?: string;
}

interface Day {
  number: number;
  name: string;
  method: string;
  description: string;
  howToExecute: string;
  exerciseHint: string;
  exercise: Exercise;
}

interface Week {
  number: number;
  days: Day[];
}

interface Props {
  setCurrentStep: (step: number) => void;
  setShowCreateModal: (show: boolean) => void;
}
const Review: React.FC<Props> = ({ setCurrentStep, setShowCreateModal }) => {
  const [programName] = useState("10-Week Monster Confusion (Classic)");
  const [duration] = useState("10 Weeks");
  const [description] = useState(
    "Describe the program goals, target audience, and what users will achieve...",
  );

  const weeks: Week[] = [
    {
      number: 1,
      days: [
        {
          number: 1,
          name: "Push(Chest, Shoulders & Triceps)",
          method: "3x5",
          description:
            "Describe the program goals, target audience, and what users will achieve...",
          howToExecute:
            "Describe the program goals, target audience, and what users will achieve...",
          exerciseHint:
            "Describe the program goals, target audience, and what users will achieve...",
          exercise: {
            hint: "Describe the program goals, target audience, and what users will achieve...",
            name: "Dumbbell Flat Bench Press",
            sets: "5",
            reps: "5",
            rest: "60 sec",
            optional:
              "Optional BFR finisher: chest cable fly, triceps overhead rope pull, and cable lateral raises (30/10/10/10).",
            abs: "Standing/seated Rope abs pulldown Side abs/rotation",
          },
        },
        {
          number: 2,
          name: "Pull(Back, Biceps & Traps)",
          method: "Max OT",
          description:
            "Describe the program goals, target audience, and what users will achieve...",
          howToExecute:
            "Describe the program goals, target audience, and what users will achieve...",
          exerciseHint:
            "Describe the program goals, target audience, and what users will achieve...",
          exercise: {
            hint: "Describe the program goals, target audience, and what users will achieve...",
            name: "Dumbbell Flat Bench Press",
            sets: "5",
            reps: "5",
            rest: "60 sec",
            optional:
              "Optional BFR finisher: chest cable fly, triceps overhead rope pull, and cable lateral raises (30/10/10/10).",
            abs: "Standing/seated Rope abs pulldown Side abs/rotation",
          },
        },
        {
          number: 3,
          name: "Leg(Quads, Hamstrings & Calves)",
          method: "Event",
          description:
            "Describe the program goals, target audience, and what users will achieve...",
          howToExecute:
            "Describe the program goals, target audience, and what users will achieve...",
          exerciseHint:
            "Describe the program goals, target audience, and what users will achieve...",
          exercise: {
            hint: "Describe the program goals, target audience, and what users will achieve...",
            name: "Dumbbell Flat Bench Press",
            optional:
              "Optional BFR finisher: chest cable fly, triceps overhead rope pull, and cable lateral raises (30/10/10/10).",
            abs: "Standing/seated Rope abs pulldown Side abs/rotation",
          },
        },
      ],
    },
    {
      number: 2,
      days: [
        {
          number: 1,
          name: "Push(Chest, Shoulders & Triceps)",
          method: "3x5",
          description:
            "Describe the program goals, target audience, and what users will achieve...",
          howToExecute:
            "Describe the program goals, target audience, and what users will achieve...",
          exerciseHint:
            "Describe the program goals, target audience, and what users will achieve...",
          exercise: {
            hint: "Describe the program goals, target audience, and what users will achieve...",
            name: "Dumbbell Flat Bench Press",
            optional:
              "Optional BFR finisher: chest cable fly, triceps overhead rope pull, and cable lateral raises (30/10/10/10).",
            abs: "Standing/seated Rope abs pulldown Side abs/rotation",
          },
        },
        {
          number: 2,
          name: "Pull(Back, Biceps & Traps)",
          method: "Max OT",
          description:
            "Describe the program goals, target audience, and what users will achieve...",
          howToExecute:
            "Describe the program goals, target audience, and what users will achieve...",
          exerciseHint:
            "Describe the program goals, target audience, and what users will achieve...",
          exercise: {
            hint: "Describe the program goals, target audience, and what users will achieve...",
            name: "Dumbbell Flat Bench Press",
            optional:
              "Optional BFR finisher: chest cable fly, triceps overhead rope pull, and cable lateral raises (30/10/10/10).",
            abs: "Standing/seated Rope abs pulldown Side abs/rotation",
          },
        },
        {
          number: 3,
          name: "Leg(Quads, Hamstrings & Calves)",
          method: "Event",
          description:
            "Describe the program goals, target audience, and what users will achieve...",
          howToExecute:
            "Describe the program goals, target audience, and what users will achieve...",
          exerciseHint:
            "Describe the program goals, target audience, and what users will achieve...",
          exercise: {
            hint: "Describe the program goals, target audience, and what users will achieve...",
            name: "Dumbbell Flat Bench Press",
            optional:
              "Optional BFR finisher: chest cable fly, triceps overhead rope pull, and cable lateral raises (30/10/10/10).",
            abs: "Standing/seated Rope abs pulldown Side abs/rotation",
          },
        },
      ],
    },
  ];

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
                <span className="text-sm text-gray-900">{programName}</span>
              </div>
              <div className="flex items-start">
                <span className="text-sm text-gray-600 min-w-[80px]">
                  Duration:
                </span>
                <span className="text-sm text-gray-900">{duration}</span>
              </div>
              <div className="flex items-start">
                <span className="text-sm text-gray-600 min-w-[80px]">
                  Description:
                </span>
                <span className="text-sm text-gray-900">{description}</span>
              </div>
            </div>
          </div>

          <div className=" border border-blue rounded-lg p-4 ">
            {weeks.map((week) => (
              <div key={week.number} className="   ">
                <h3 className="text-base font-semibold text-gray-900  border-b border-[#A78BFA]/50 pb-2.5">
                  Week {week.number}
                </h3>

                {week.days.map((day) => (
                  <div
                    key={`week-${week.number}-day-${day.number} `}
                    className="mb-6 p-4 border-b border-[#A78BFA]/50 "
                  >
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-900">
                          Day {day.number}: {day.name}
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
                            {day.description}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">How to Execute:</span>
                          <span className="text-gray-900 ml-1">
                            {day.howToExecute}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Exercise Hint:</span>
                          <span className="text-gray-900 ml-1">
                            {day.exerciseHint}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Exercise Name:</span>
                          <span className="text-gray-900 ml-1">
                            {day.exercise.name}
                          </span>
                        </div>
                        {day.exercise.sets &&
                          day.exercise.reps &&
                          day.exercise.rest && (
                            <div>
                              <span className="text-gray-600">Set:</span>
                              <span className="text-gray-900 ml-1">
                                {day.exercise.sets}
                              </span>
                              <span className="text-gray-600 ml-3">Rep:</span>
                              <span className="text-gray-900 ml-1">
                                {day.exercise.reps}
                              </span>
                              <span className="text-gray-600 ml-3">Rest:</span>
                              <span className="text-gray-900 ml-1">
                                {day.exercise.rest}
                              </span>
                            </div>
                          )}
                        {day.exercise.optional && (
                          <div>
                            <span className="text-gray-600">
                              Optional BFR finisher:
                            </span>
                            <span className="text-gray-900 ml-1">
                              {day.exercise.optional}
                            </span>
                          </div>
                        )}
                        {day.exercise.abs && (
                          <div>
                            <span className="text-gray-600">ABS:</span>
                            <span className="text-gray-900 ml-1">
                              {day.exercise.abs}
                            </span>
                          </div>
                        )}
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
    </div>
  );
};

export default Review;
