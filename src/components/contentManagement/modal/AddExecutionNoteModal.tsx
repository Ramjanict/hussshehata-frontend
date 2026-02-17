import CloseButton from "@/common/button/CloseButton";
import CommonButton from "@/common/button/CommonButton";
import AddButton from "@/common/custom/AddButton";
import CommonHeader from "@/common/header/CommonHeader";
import { inputClass } from "@/components/programManagement/modal/showExerciseModal";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const AddExecutionNoteModal: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const [executionNotes, setExecutionNotes] = useState<string[]>([""]);

  const addNote = () => {
    setExecutionNotes([...executionNotes, ""]);
  };

  const removeNote = (index: number) => {
    const newNotes = [...executionNotes];
    newNotes.splice(index, 1);
    setExecutionNotes(newNotes);
  };
  const updateNote = (index: number, value: string) => {
    const newNotes = [...executionNotes];
    newNotes[index] = value;
    setExecutionNotes(newNotes);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <CommonHeader size="xl" className="">
              Add Execution Note
            </CommonHeader>
            <CloseButton action={onClose} />
          </div>

          <div className="border border-darkPurple rounded-2xl p-8 mb-6">
            <div className="space-y-6">
              <div>
                <label className={inputClass.label}>Execution Title</label>
                <input
                  type="text"
                  placeholder="Workout Duration Rule"
                  className={inputClass.input}
                />
              </div>

              <div>
                <label className={inputClass.label}>Execution note</label>

                <div className="">
                  {executionNotes.map((note, index) => (
                    <textarea
                      key={index}
                      value={note}
                      onChange={(e) => updateNote(index, e.target.value)}
                      placeholder="Aim to complete all sessions in under 60 minutes."
                      className={inputClass.input}
                      rows={2}
                    />
                  ))}
                  <div>
                    {executionNotes.length > 1 && (
                      <button
                        className="  cursor-pointer text-blue"
                        onClick={() => removeNote(executionNotes.length - 1)}
                      >
                        <RiDeleteBin5Line size={20} />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex justify-end ">
                  <AddButton action={addNote} />
                </div>
              </div>
              <div className="flex justify-end ">
                <CommonButton>Save</CommonButton>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <CommonHeader size="md" className="!font-bold !text-[#090818]">
              Final Message
            </CommonHeader>
            <textarea
              placeholder="The Monster Confusion Cycle rejects routine comfort. It forces continuous adaptation through rotating stimuli and strategic challenge, ensuring constant progress in neuromuscular performance, speed, strength, and muscle growth."
              className={inputClass.input}
              rows={4}
            />
          </div>
          <CommonButton className="mt-8">Save Execution Note</CommonButton>
        </div>
      </div>
    </div>
  );
};

export default AddExecutionNoteModal;
