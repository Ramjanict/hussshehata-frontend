import CloseButton from "@/common/button/CloseButton";
import CommonButton from "@/common/button/CommonButton";
import CommonHeader from "@/common/header/CommonHeader";

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
          <CommonHeader size="lg">Add New Training Method</CommonHeader>
          <CloseButton action={() => setShowMethodModal(false)} />
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

          <div className="bg-[#EFF6FF] border border-blue-200 rounded-lg p-4">
            <CommonHeader size="md" className="!text-[#1C398E]">
              Method Guidelines
            </CommonHeader>
            <CommonHeader size="sm" className="!text-[#1C398E]">
              Provide clear instructions on tempo, rest periods, and intensity.
              This will help users understand how to properly execute the
              training method.
            </CommonHeader>
          </div>

          <div className="flex gap-4">
            <CommonButton
              onClick={() => setShowMethodModal(false)}
              className="!bg-white !text-[#5B667B] border border-[#5B667B]"
            >
              Cancel
            </CommonButton>
            <CommonButton onClick={() => setShowMethodModal(false)}>
              Add Method
            </CommonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMethodModal;
