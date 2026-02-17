import CloseButton from "@/common/button/CloseButton";
import CommonButton from "@/common/button/CommonButton";
import CommonSelect from "@/common/custom/CommonSelect";
import CommonHeader from "@/common/header/CommonHeader";
import { inputClass } from "@/components/programManagement/modal/showExerciseModal";
import RichTextEditor from "./RichTextEditor";

interface AddBFRSessionModalProps {
  onClose: () => void;
}
const AddBFRSessionModal: React.FC<AddBFRSessionModalProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <CommonHeader size="xl"> Add BFR Session</CommonHeader>
          <CloseButton action={onClose} />
        </div>

        <div className="space-y-4 border border-darkBlue rounded-lg p-6">
          <div>
            <label className={inputClass.label}>Title</label>
            <input
              type="text"
              placeholder="Upper Body Hypertrophy BFR"
              className={inputClass.input}
            />
          </div>

          <div>
            <label className={inputClass.label}>Category</label>
            <CommonSelect
              value="Hypertrophy"
              item={[
                { value: "Hypertrophy", label: "Hypertrophy" },
                { value: "Strength", label: "Strength" },
                { value: "Endurance", label: "Endurance" },
              ]}
              onValueChange={(val) => console.log(val)}
              className="!w-full"
            />
          </div>

          <div>
            <label className={inputClass.label}>Body Type</label>
            <input
              type="text"
              placeholder="Upper"
              className={inputClass.input}
            />
          </div>

          <div>
            <label className={inputClass.label}>Time</label>
            <input
              type="text"
              placeholder="20 min"
              className={inputClass.input}
            />
          </div>

          <div>
            <label className={inputClass.label}>Exercise</label>
            <input type="text" placeholder="04" className={inputClass.input} />
          </div>

          <div>
            <label className={inputClass.label}>Short Description</label>
            <textarea
              placeholder="For chest, shoulders, arms using light loads."
              className={inputClass.input}
            />
          </div>

          <div>
            <RichTextEditor />
          </div>
        </div>
        <div className=" pt-6">
          <CommonButton>Save Content</CommonButton>
        </div>
      </div>
    </div>
  </div>
);

export default AddBFRSessionModal;
