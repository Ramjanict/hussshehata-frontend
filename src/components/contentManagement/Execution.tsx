import { Edit2, Trash2 } from "lucide-react";

const executionNotes = [
  {
    id: "1",
    title: "Workout Duration Rule",
    position: 2,
    notes: ["Aim to complete all sessions in under 60 minutes."],
  },
  {
    id: "2",
    title: "Adaptability + Personal Split",
    position: 3,
    notes: ["Customize the program based on your schedule and preferences."],
  },
  {
    id: "3",
    title: "Westside Days - Customization Allowed",
    position: 4,
    notes: ["Feel free to adjust Westside training days as needed."],
  },
];
const Execution = () => {
  return (
    <div className="space-y-4">
      {executionNotes.map((note) => (
        <div
          key={note.id}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center text-gray-400">
                <div className="text-xs">↑</div>
                <div className="text-xs">↓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold">{note.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Position {note.position}
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
  );
};

export default Execution;
