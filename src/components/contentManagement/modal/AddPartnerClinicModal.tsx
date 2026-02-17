import CloseButton from "@/common/button/CloseButton";
import CommonButton from "@/common/button/CommonButton";
import { inputClass } from "@/components/programManagement/modal/showExerciseModal";
import { Clock } from "lucide-react";

interface AddPartnerClinicModalProps {
  onClose: () => void;
}
const AddPartnerClinicModal: React.FC<AddPartnerClinicModalProps> = ({
  onClose,
}) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Add Partner Clinic</h2>

          <CloseButton action={onClose} />
        </div>

        <div className="border border-darkPurple rounded-lg p-6 space-y-4">
          <div>
            <label className={inputClass.label}>Clinic Name</label>
            <input
              type="text"
              placeholder="e.g., Elite Diagnostics Center"
              className={inputClass.input}
            />
          </div>

          <div>
            <label className={inputClass.label}>Phone Number</label>
            <input
              type="text"
              placeholder="+1 (555) 123-4567"
              className={inputClass.input}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={inputClass.label}>Country</label>
              <input
                type="text"
                placeholder="USA"
                className={inputClass.input}
              />
            </div>
            <div>
              <label className={inputClass.label}>City</label>
              <input
                type="text"
                placeholder="e.g., New York"
                className={inputClass.input}
              />
            </div>
          </div>

          <div>
            <label className={inputClass.label}>Address</label>
            <input
              type="text"
              placeholder="Street address"
              className={inputClass.input}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={inputClass.label}>Open Time</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="8.00 Am"
                  className={inputClass.input}
                />
                <Clock
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div>
              <label className={inputClass.label}>Close Time</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="5.00 Pm"
                  className={inputClass.input}
                />
                <Clock
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <CommonButton>Save Clinic</CommonButton>
        </div>
      </div>
    </div>
  </div>
);

export default AddPartnerClinicModal;
