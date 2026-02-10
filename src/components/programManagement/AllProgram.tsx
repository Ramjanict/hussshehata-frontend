import { Edit, Trash2 } from "lucide-react";

const programs = [
  {
    id: 1,
    name: "10-Week Monster Confusion (Modernized)",
    level: "Advanced",
    duration: "10 weeks",
    enrollments: 456,
    completion: "78%",
  },
  {
    id: 2,
    name: "10-Week Monster Confusion (Classic)",
    level: "Beginner",
    duration: "10 weeks",
    enrollments: 456,
    completion: "78%",
  },
  {
    id: 3,
    name: "HUSS 8-Week Beast",
    level: "Advanced",
    duration: "10 weeks",
    enrollments: 456,
    completion: "78%",
  },
];
export const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-red-100 text-red-700";
    case "Beginner":
      return "bg-green-100 text-green-700";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};
const AllProgram = () => {
  return (
    <div>
      <div className="space-y-4">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {program.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(program.level)}`}
                >
                  {program.level}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700 text-sm">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Duration</p>
                <p className="text-sm font-medium text-gray-900">
                  {program.duration}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Enrolments</p>
                <p className="text-sm font-medium text-gray-900">
                  {program.enrollments}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Completion</p>
                <p className="text-sm font-medium text-green-600">
                  {program.completion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProgram;
