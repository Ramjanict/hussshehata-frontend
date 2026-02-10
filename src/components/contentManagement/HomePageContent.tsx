import { Edit2, Trash2 } from "lucide-react";

const homePagePrograms = [
  {
    id: "1",
    title: "10-Week Monster Confusion (Modernized)",
    category: "Advanced",
    position: 1,
  },
  {
    id: "2",
    title: "10-Week Monster Confusion (Classic)",
    category: "Beginner",
    position: 2,
  },
  {
    id: "3",
    title: "HUSS 8-Week Beast",
    category: "Advanced",
    position: 3,
  },
  {
    id: "4",
    title: "HUSS 8-Week Beast",
    category: "Advanced",
    position: 4,
  },
];
const HomePageContent = () => {
  return (
    <div>
      <div className="space-y-4">
        {homePagePrograms.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-lg border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center text-gray-400">
                  <div className="text-xs">↑</div>
                  <div className="text-xs">↓</div>
                </div>
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
        ))}
      </div>
    </div>
  );
};

export default HomePageContent;
