import CommonHeader from "@/common/header/CommonHeader";
import { Check } from "lucide-react";
import { useState } from "react";
import EditPlan from "./EditPlan";

const plans = [
  {
    name: "Free",
    price: 0,
    period: "/month",
    features: [
      "Basic workout programs",
      "3 exercises per workout",
      "Progress tracking",
      "Community access",
    ],
  },
  {
    name: "Monthly Premium",
    price: 29.99,
    period: "/month",
    popular: true,
    features: [
      "Basic workout programs",
      "3 exercises per workout",
      "Progress tracking",
      "Community access",
    ],
  },
  {
    name: "Yearly Premium",
    price: 299.99,
    period: "/year",
    savings: "Save 17%",
    features: [
      "Basic workout programs",
      "3 exercises per workout",
      "Progress tracking",
      "Community access",
    ],
  },
];
interface Plan {
  name: string;
  price: number;
  period: string;
  popular?: boolean;
  savings?: string;
  features: string[];
}
export interface EditPlanFormData {
  name: string;
  price: string;
  billingPeriod: string;
  features: string[];
}
const SubscriptionPlan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<EditPlanFormData | null>(null);

  const handleEditPlan = (plan: Plan) => {
    setEditingPlan({
      name: plan.name,
      price: plan.price.toString(),
      billingPeriod:
        plan.period === "/month"
          ? "Monthly"
          : plan.period === "/year"
            ? "Yearly"
            : "Monthly",
      features: [...plan.features],
    });
    setIsModalOpen(true);
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative"
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-darkPurple text-white text-xs font-semibold px-3 py-1 rounded-full">
                  POPULAR
                </span>
              </div>
            )}

            <div className="mb-6">
              <CommonHeader size="lg" className="">
                {plan.name}
              </CommonHeader>

              <div className="flex items-baseline gap-1 pt-2">
                <CommonHeader size="3xl" className="text-[#0A0A0A]">
                  {plan.price}
                </CommonHeader>

                <span className="text-[#4A5565]">{plan.period}</span>
              </div>
              {plan.savings && (
                <span className="inline-block mt-2 px-2 py-1 text-[#008236] text-sm font-medium rounded bg-[#DCFCE7]">
                  {plan.savings}
                </span>
              )}
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <CommonHeader size="sm" className="">
                    {feature}
                  </CommonHeader>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleEditPlan(plan)}
              className={`w-full py-2.5 rounded-md font-medium transition-colors cursor-pointer ${
                plan.popular
                  ? "bg-darkPurple text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              Edit Plan
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && editingPlan && (
        <EditPlan
          editingPlan={editingPlan}
          handleCloseModal={() => setIsModalOpen(false)}
          setEditingPlan={setEditingPlan}
        />
      )}
    </div>
  );
};

export default SubscriptionPlan;
