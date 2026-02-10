import {
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Edit,
  Plus,
  Trash2,
} from "lucide-react";

const trainingMethods = [
  {
    id: 1,
    name: "5×5",
    sets: "5",
    reps: "5",
    description:
      "Classic strength and mass builder using 5 sets of 5 reps at around 80-85% of your 10RM. Warm up thoroughly, then perform 5 challenging work sets of 5 reps with 2-3 minutes rest between sets. Increase weight when you can complete all 5×5 with solid form. This method builds both strength and muscle mass through progressive overload on compound movements.",
  },
  {
    id: 2,
    name: "MAX-OT",
    sets: "5",
    reps: "5",
    description:
      "Classic strength and mass builder using 5 sets of 5 reps at around 80-85% of your 10RM. Warm up thoroughly, then perform 5 challenging work sets of 5 reps with 2-3 minutes rest between sets. Increase weight when you can complete all 5×5 with solid form. This method builds both strength and muscle mass through progressive overload on compound movements.",
  },
  {
    id: 3,
    name: "Burns",
    sets: "5",
    reps: "5",
    description:
      "Classic strength and mass builder using 5 sets of 5 reps at around 80-85% of your 10RM. Warm up thoroughly, then perform 5 challenging work sets of 5 reps with 2-3 minutes rest between sets. Increase weight when you can complete all 5×5 with solid form. This method builds both strength and muscle mass through progressive overload on compound movements.",
  },
  {
    id: 4,
    name: "Bulldozer",
    sets: "5",
    reps: "5",
    description:
      "Classic strength and mass builder using 5 sets of 5 reps at around 80-85% of your 10RM. Warm up thoroughly, then perform 5 challenging work sets of 5 reps with 2-3 minutes rest between sets. Increase weight when you can complete all 5×5 with solid form. This method builds both strength and muscle mass through progressive overload on compound movements.",
  },
];
interface TrainingProps {
  setShowMethodModal: (show: boolean) => void;
}
const Training: React.FC<TrainingProps> = ({ setShowMethodModal }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Training Methods Library
        </h3>
        <button
          onClick={() => setShowMethodModal(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700"
        >
          <Plus className="w-5 h-5" />
          Add Method
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {trainingMethods.map((method) => (
          <div
            key={method.id}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {method.name}
                </h4>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1 text-gray-400 hover:text-indigo-600">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-400 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Sets</p>
                <p className="text-lg font-semibold text-green-600">
                  {method.sets}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Reps</p>
                <p className="text-lg font-semibold text-orange-600">
                  {method.reps}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {method.description}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded flex items-center gap-1">
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
        <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded">
          1
        </button>
        <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
          2
        </button>
        <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
          3
        </button>
        <span className="px-3 py-2 text-sm text-gray-600">...</span>
        <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded flex items-center gap-1">
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Training;
