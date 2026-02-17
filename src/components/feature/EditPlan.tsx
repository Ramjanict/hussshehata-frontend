import CloseButton from "@/common/button/CloseButton";
import CommonButton from "@/common/button/CommonButton";
import CommonSelect from "@/common/custom/CommonSelect";
import CommonHeader from "@/common/header/CommonHeader";
import { Plus, X } from "lucide-react";
import { inputClass } from "../programManagement/modal/showExerciseModal";
import type { EditPlanFormData } from "./SubscriptionPlan";

interface EditPlanProps {
  editingPlan: EditPlanFormData;
  setEditingPlan: (plan: EditPlanFormData) => void;
  handleCloseModal: () => void;
}
const EditPlan: React.FC<EditPlanProps> = ({
  editingPlan,
  handleCloseModal,
  setEditingPlan,
}) => {
  const handleSaveChanges = () => {
    console.log("Saving plan changes:", editingPlan);
    // Add your save logic here
    handleCloseModal();
  };

  const handleInputChange = (field: keyof EditPlanFormData, value: string) => {
    if (editingPlan) {
      setEditingPlan({ ...editingPlan, [field]: value });
    }
  };

  const handleAddFeature = () => {
    if (editingPlan) {
      setEditingPlan({
        ...editingPlan,
        features: [...editingPlan.features, ""],
      });
    }
  };

  const handleRemoveFeature = (index: number) => {
    if (editingPlan) {
      setEditingPlan({
        ...editingPlan,
        features: editingPlan.features.filter((_, i) => i !== index),
      });
    }
  };

  const handleFeatureChange = (index: number, value: string) => {
    if (editingPlan) {
      const newFeatures = [...editingPlan.features];
      newFeatures[index] = value;
      setEditingPlan({ ...editingPlan, features: newFeatures });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={handleCloseModal}
        />

        <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex justify-between pb-2">
              <CommonHeader size="lg" className="">
                Edit Plan: {editingPlan.name}
              </CommonHeader>
              <CloseButton action={handleCloseModal} />
            </div>
            <div className="border border-darkPurple rounded-2xl p-6 mb-6">
              <div className="mb-6">
                <label className={inputClass.label}>Plan Name</label>
                <input
                  type="text"
                  value={editingPlan.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={inputClass.input}
                />
              </div>

              <div className="mb-6">
                <label className={inputClass.label}>Price (USD)</label>
                <input
                  type="text"
                  value={editingPlan.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  className={inputClass.input}
                />
              </div>

              <div className="mb-6">
                <label className={inputClass.label}>Billing Period</label>
                <div className="relative">
                  <CommonSelect
                    value={editingPlan.billingPeriod}
                    item={[
                      { value: "Monthly", label: "Monthly" },
                      { value: "Yearly", label: "Yearly" },
                      { value: "Weekly", label: "Weekly" },
                    ]}
                    onValueChange={(val) => console.log(val)}
                    className="w-full!"
                  />
                </div>
              </div>

              <div>
                <div className={"flex justify-between items-center mb-3"}>
                  <label className={inputClass.label}>Features</label>
                  <button
                    onClick={handleAddFeature}
                    className="flex items-center gap-1 text-darkPurple font-medium transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    Add Feature
                  </button>
                </div>

                <div className="space-y-3">
                  {editingPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) =>
                          handleFeatureChange(index, e.target.value)
                        }
                        placeholder="All workout programs"
                        className={inputClass.input}
                      />
                      <button
                        onClick={() => handleRemoveFeature(index)}
                        className="text-red-500 hover:text-red-600 transition-colors cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <CommonButton onClick={handleSaveChanges}>
              Save Changes
            </CommonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPlan;
