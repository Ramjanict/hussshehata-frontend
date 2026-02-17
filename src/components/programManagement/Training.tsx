import image from "@/assets/images/muscle.svg";
import ActionButton from "@/common/button/ActionButton";
import CommonButton from "@/common/button/CommonButton";
import Pagination from "@/common/custom/Pagination";
import CommonHeader from "@/common/header/CommonHeader";
import { Edit, Plus, Trash2 } from "lucide-react";
const trainingMethods = [
  {
    id: 1,
    name: "5×5",
    subtitle: "5 sets of 5 heavy reps",
    sets: "5",
    reps: "5",
    description:
      "Classic strength and mass builder using 5 sets of 5 reps at around 80-85% of your 10RM. Warm up thoroughly, then perform 5 challenging work sets of 5 reps with 2-3 minutes rest between sets. Increase weight when you can complete all 5×5 with solid form. This method builds both strength and muscle mass through progressive overload on compound movements.",
  },
  {
    id: 2,
    name: "MAX-OT",
    subtitle: "6-9 heavy sets of 4-6 reps",
    sets: "5",
    reps: "5",
    description:
      "Classic strength and mass builder using 5 sets of 5 reps at around 80-85% of your 10RM. Warm up thoroughly, then perform 5 challenging work sets of 5 reps with 2-3 minutes rest between sets. Increase weight when you can complete all 5×5 with solid form. This method builds both strength and muscle mass through progressive overload on compound movements.",
  },
  {
    id: 3,
    name: "Burns",
    subtitle: "One brutal rest-pause set to 50 total reps",
    sets: "5",
    reps: "5",
    description:
      "Classic strength and mass builder using 5 sets of 5 reps at around 80-85% of your 10RM. Warm up thoroughly, then perform 5 challenging work sets of 5 reps with 2-3 minutes rest between sets. Increase weight when you can complete all 5×5 with solid form. This method builds both strength and muscle mass through progressive overload on compound movements.",
  },
  {
    id: 4,
    name: "Bulldozer",
    subtitle: "1 rest-pause set to 20 total reps",
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

        <CommonButton onClick={() => setShowMethodModal(true)}>
          <Plus className="w-5 h-5" />
          Add Method
        </CommonButton>
      </div>

      <div className={"grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-4 gap-6"}>
        {trainingMethods.map((method) => (
          <div
            key={method.id}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center">
                  <img src={image} alt="Arlene McCoy" />
                </div>

                <CommonHeader size="lg">{method.name}</CommonHeader>
              </div>
              <div className="flex items-center gap-1">
                <ActionButton
                  variant="edit"
                  editClassName="!bg-white border border-blue"
                >
                  <Edit className="w-5 h-5 text-blue" />
                </ActionButton>
                <ActionButton variant="delete">
                  <Trash2 className="w-5 h-5" />
                </ActionButton>
              </div>
            </div>
            <CommonHeader size="sm" className="mb-4 text-[#4A5565]!">
              {method.subtitle}
            </CommonHeader>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-[#F0FDF4] flex flex-col items-center justify-center p-1 sm:p-4 rounded-md">
                <p className="text-xs text-gray-600 mb-1">Sets</p>
                <p className="text-lg font-semibold text-green-600">
                  {method.sets}
                </p>
              </div>
              <div className=" bg-[#FFF7ED] flex flex-col items-center justify-center p-4 rounded-md">
                <p className="text-xs text-gray-600 mb-1">Reps</p>
                <p className="text-lg font-semibold text-orange-600">
                  {method.reps}
                </p>
              </div>
            </div>
            <CommonHeader size="sm" className="!text-[#090818]">
              {method.description}{" "}
            </CommonHeader>
          </div>
        ))}
      </div>
      <div className="pt-6">
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </div>
    </div>
  );
};

export default Training;
