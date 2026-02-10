import { Plus, X } from "lucide-react";
import { useState } from "react";

const AddExecutionNoteModal: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const [executionNotes, setExecutionNotes] = useState<string[]>([""]);

  const addNote = () => {
    setExecutionNotes([...executionNotes, ""]);
  };

  const updateNote = (index: number, value: string) => {
    const newNotes = [...executionNotes];
    newNotes[index] = value;
    setExecutionNotes(newNotes);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Add Execution Note</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          <div className="border-2 border-blue-200 rounded-2xl p-8 mb-6">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-bold mb-3">
                  Execution Title
                </label>
                <input
                  type="text"
                  placeholder="Workout Duration Rule"
                  className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-lg font-bold mb-3">
                  Execution note
                </label>
                {executionNotes.map((note, index) => (
                  <textarea
                    key={index}
                    value={note}
                    onChange={(e) => updateNote(index, e.target.value)}
                    placeholder="Aim to complete all sessions in under 60 minutes."
                    className="w-full px-4 py-4 text-base border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                    rows={2}
                  />
                ))}
                <div className="flex justify-end">
                  <button
                    onClick={addNote}
                    className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600"
                  >
                    <Plus size={24} />
                  </button>
                </div>
              </div>

              <button className="bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-600 font-semibold text-lg">
                Save
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Final Message</h3>
            <textarea
              placeholder="The Monster Confusion Cycle rejects routine comfort. It forces continuous adaptation through rotating stimuli and strategic challenge, ensuring constant progress in neuromuscular performance, speed, strength, and muscle growth."
              className="w-full px-4 py-4 text-base border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>

          <button className="mt-8 bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600 font-semibold text-lg">
            Save Execution Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExecutionNoteModal;
