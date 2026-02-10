import { ChevronDown, ChevronRight, Edit2, Trash2 } from "lucide-react";
const premiumPrograms = [
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
  return (
    <div>
      <div className="space-y-4">
        {premiumPrograms.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-lg border border-gray-200"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    // onClick={() => toggleProgramExpanded(program.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {program.expanded ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </button>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold">{program.title}</h3>
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          program.category === "Advanced"
                            ? "bg-red-100 text-red-700"
                            : program.category === "Beginner"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {program.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Position {program.position}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    <Edit2 size={16} />
                    Edit
                  </button>
                  <button className="flex items-center gap-2 bg-white text-red-500 border border-red-300 px-3 py-2 rounded-lg hover:bg-red-50">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {program.expanded && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold">Week-by-Week Lock Configuration</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Lock All</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={program.lockAll}
                        // onChange={() => toggleLockAll(program.id)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-3">
                  {program.weekConfig.map((week) => (
                    <div
                      key={week.week}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        week.isPremium
                          ? "border-purple-300 bg-purple-50"
                          : "border-gray-300 bg-white"
                      }`}
                      // onClick={() => toggleWeekPremium(program.id, week.week)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Week {week.week}</span>
                        {week.isPremium && (
                          <svg
                            className="w-5 h-5 text-purple-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                          </svg>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        {week.isPremium ? "Premium" : "Free"}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 font-medium">
                  Save Week Configuration
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Premium;
