import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProgramCard from "../reuseable/ProgramCard";
import WeekCard from "../reuseable/WeekCard";

interface WeekConfig {
  week: number;
  isPremium: boolean;
}

export interface Program {
  id: string;
  title: string;
  category: string;
  position: number;
  expanded: boolean;
  lockAll: boolean;
  weekConfig: WeekConfig[];
}

const initialPrograms: Program[] = [
  {
    id: "1",
    title: "10-Week Monster Confusion (Modernized)",
    category: "Advanced",
    position: 1,
    expanded: true,
    lockAll: false,
    weekConfig: [
      { week: 1, isPremium: false },
      { week: 2, isPremium: false },
      { week: 3, isPremium: false },
      { week: 4, isPremium: true },
      { week: 5, isPremium: true },
      { week: 6, isPremium: true },
      { week: 7, isPremium: true },
      { week: 8, isPremium: true },
      { week: 9, isPremium: true },
      { week: 10, isPremium: true },
    ],
  },
  {
    id: "2",
    title: "10-Week Monster Confusion (Classic)",
    category: "Beginner",
    position: 2,
    expanded: false,
    lockAll: false,
    weekConfig: Array.from({ length: 10 }, (_, i) => ({
      week: i + 1,
      isPremium: i >= 3,
    })),
  },
  {
    id: "3",
    title: "HUSS 8-Week Beast",
    category: "Advanced",
    position: 3,
    expanded: false,
    lockAll: false,
    weekConfig: Array.from({ length: 8 }, (_, i) => ({
      week: i + 1,
      isPremium: i >= 3,
    })),
  },
  {
    id: "4",
    title: "HUSS 8-Week Beast",
    category: "Advanced",
    position: 4,
    expanded: false,
    lockAll: false,
    weekConfig: Array.from({ length: 8 }, (_, i) => ({
      week: i + 1,
      isPremium: i >= 3,
    })),
  },
];

const Premium = () => {
  const [premiumPrograms, setPremiumPrograms] =
    useState<Program[]>(initialPrograms);

  const toggleProgramExpanded = (id: string) => {
    setPremiumPrograms((prevPrograms) =>
      prevPrograms.map((program) =>
        program.id === id
          ? { ...program, expanded: !program.expanded }
          : program,
      ),
    );
  };

  const toggleLockAll = (id: string) => {
    setPremiumPrograms((prevPrograms) =>
      prevPrograms.map((program) => {
        if (program.id === id) {
          const newLockAll = !program.lockAll;
          return {
            ...program,
            lockAll: newLockAll,
            weekConfig: program.weekConfig.map((week) => ({
              ...week,
              isPremium: newLockAll,
            })),
          };
        }
        return program;
      }),
    );
  };

  const toggleWeekPremium = (id: string, week: number) => {
    setPremiumPrograms((prevPrograms) =>
      prevPrograms.map((program) => {
        if (program.id === id) {
          const newWeekConfig = program.weekConfig.map((w) =>
            w.week === week ? { ...w, isPremium: !w.isPremium } : w,
          );
          // Check if all weeks are premium to update lockAll
          const allPremium = newWeekConfig.every((w) => w.isPremium);
          return {
            ...program,
            weekConfig: newWeekConfig,
            lockAll: allPremium,
          };
        }
        return program;
      }),
    );
  };

  const handleSaveConfiguration = (id: string) => {
    const program = premiumPrograms.find((p) => p.id === id);
    if (program) {
      console.log("Saving configuration for:", program.title);
      console.log("Week Config:", program.weekConfig);
      // Here you can add your API call to save the configuration
      // Example:
      // await saveWeekConfiguration(id, program.weekConfig);
    }
  };

  const handleEdit = (id: string) => {
    console.log("Editing program:", id);
    // Add your edit logic here
  };

  const handleDelete = (id: string) => {
    console.log("Deleting program:", id);
    // Add your delete logic here
    // setPremiumPrograms(prevPrograms => prevPrograms.filter(p => p.id !== id));
  };

  return (
    <div>
      <div className="space-y-4">
        {premiumPrograms.map((program) => (
          <div
            className="bg-white rounded-lg border border-[#E7E8EB] p-4 sm:p-6"
            key={program.id}
          >
            <ProgramCard
              id={program.id}
              title={program.title}
              category={program.category}
              position={program.position}
              icon={
                <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                  {program.expanded ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
              }
              onDelete={handleDelete}
              onEdit={handleEdit}
              iconAction={() => {
                toggleProgramExpanded(program.id);
              }}
            />

            {program.expanded && (
              <WeekCard
                program={program}
                toggleWeekPremium={toggleWeekPremium}
                toggleLockAll={toggleLockAll}
                handleSaveConfiguration={handleSaveConfiguration}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Premium;
