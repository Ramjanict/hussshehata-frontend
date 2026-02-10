import { ImageIcon, Video, X } from "lucide-react";
import { useState } from "react";

interface ShowExerciseModalProps {
  setShowExerciseModal: (show: boolean) => void;
}
const ShowExerciseModal: React.FC<ShowExerciseModalProps> = ({
  setShowExerciseModal,
}) => {
  const [exerciseType, setExerciseType] = useState<"main" | "bfr">("main");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Add Exercise to Day 1
          </h2>
          <button
            onClick={() => setShowExerciseModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setExerciseType("main")}
              className={`px-6 py-2 rounded-lg font-medium ${
                exerciseType === "main"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600 border border-purple-200"
              }`}
            >
              Main Exercise
            </button>
            <button
              onClick={() => setExerciseType("bfr")}
              className={`px-6 py-2 rounded-lg font-medium ${
                exerciseType === "bfr"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600 border border-purple-200"
              }`}
            >
              BFR Exercise
            </button>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-900">
              <span className="font-medium">Exercise Name :</span> Dumbbell Flat
              Bench Press
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Set : 5 &nbsp;&nbsp;&nbsp; Rep : 5 &nbsp;&nbsp;&nbsp; Rest : 60
              sec
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Exercise Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Exercise For
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  defaultValue="Chest"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex -space-x-2">
                  <img
                    src="/api/placeholder/40/40"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="/api/placeholder/40/40"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Set
                </label>
                <input
                  type="text"
                  defaultValue="05"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Reps
                </label>
                <input
                  type="text"
                  defaultValue="05"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Rest
                </label>
                <input
                  type="text"
                  defaultValue="60 sec"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                defaultValue="Keep your feet flat on the ground and maintain a slight arch in your lower back. Press dumbbells up and slightly together at the top for maximum chest contraction."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-900">
                  Exercise Animation
                </label>
                <div className="flex -space-x-2">
                  <img
                    src="/api/placeholder/40/40"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="/api/placeholder/40/40"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 flex items-center gap-3">
                <Video className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">
                  Dumbbell Flat Bench Press.mp4
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Exercise Image
              </label>
              <div className="border border-gray-300 rounded-lg p-4 flex items-center gap-3">
                <ImageIcon className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">
                  Dumbbell Flat Bench Press.mp4
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Save
              </button>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => setShowExerciseModal(false)}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
            >
              Save Exercise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowExerciseModal;
