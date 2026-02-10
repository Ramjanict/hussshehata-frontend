import { X } from "lucide-react";

const inputClass = {
  label: "block text-sm font-normal text-[#020617] font-inter mb-2",
  input:
    "w-full border border-[#CBD5E1] rounded-md p-3 outline-none text-[#0A0A0A]/50 text-xs border-[#A78BFA] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#A78BFA]",
  error: "text-red-500 text-sm mt-1",
};
interface ShowMethodModalProps {
  setShowMethodModal: (show: boolean) => void;
}

const ShowMethodModal: React.FC<ShowMethodModalProps> = ({
  setShowMethodModal,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Add New Training Method
          </h2>
          <button
            onClick={() => setShowMethodModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className={inputClass.label}>Method Name</label>
            <input
              type="text"
              placeholder="e.g., 5×5, Max-OT, Burns"
              className={inputClass.input}
            />
          </div>

          <div>
            <label className={inputClass.label}>Short Description</label>
            <input
              type="text"
              placeholder="e.g., 5 sets of 5 heavy reps"
              className={inputClass.input}
            />
          </div>

          <div>
            <label className={inputClass.label}>Detailed Description</label>
            <textarea
              rows={6}
              placeholder="Provide a detailed explanation of how to execute this training method..."
              className={inputClass.input}
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={inputClass.label}>Default Sets</label>
              <input
                type="text"
                placeholder="e.g., 5 or 6-9"
                className={inputClass.input}
              />
            </div>
            <div>
              <label className={inputClass.label}>Default Reps</label>
              <input
                type="text"
                placeholder="e.g., 5 or 4-6"
                className={inputClass.input}
              />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-base font-semibold text-blue-900 mb-2">
              Method Guidelines
            </h4>
            <p className="text-sm text-blue-800">
              Provide clear instructions on tempo, rest periods, and intensity.
              This will help users understand how to properly execute the
              training method.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setShowMethodModal(false)}
              className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={() => setShowMethodModal(false)}
              className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-medium"
            >
              Add Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMethodModal;
