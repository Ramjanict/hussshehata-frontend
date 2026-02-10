import DashboardTopSection from "@/common/DashboardTopSection";
import {
  Check,
  ChevronDown,
  DollarSign,
  Percent,
  Plus,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import React, { useState } from "react";

type TabType = "subscription" | "payment";

interface Plan {
  name: string;
  price: number;
  period: string;
  popular?: boolean;
  savings?: string;
  features: string[];
}

interface Transaction {
  id: string;
  user: string;
  amount: number;
  plan: string;
  status: "Success" | "Failed";
  date: string;
}

interface StatCard {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
}

interface EditPlanFormData {
  name: string;
  price: string;
  billingPeriod: string;
  features: string[];
}

const PremiumFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("subscription");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<EditPlanFormData | null>(null);

  const plans: Plan[] = [
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

  const transactions: Transaction[] = [
    {
      id: "TXN001",
      user: "Sarah Johnson",
      amount: 29.99,
      plan: "Monthly Premium",
      status: "Success",
      date: "2026-01-22",
    },
    {
      id: "TXN002",
      user: "Sarah Johnson",
      amount: 29.99,
      plan: "Monthly Premium",
      status: "Failed",
      date: "2026-01-22",
    },
    {
      id: "TXN003",
      user: "Sarah Johnson",
      amount: 29.99,
      plan: "Monthly Premium",
      status: "Success",
      date: "2026-01-22",
    },
    {
      id: "TXN004",
      user: "Sarah Johnson",
      amount: 29.99,
      plan: "Monthly Premium",
      status: "Success",
      date: "2026-01-22",
    },
  ];

  const stats: StatCard[] = [
    {
      label: "Total Revenue",
      value: "$48,234",
      icon: DollarSign,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "Monthly Revenue",
      value: "$12,456",
      icon: TrendingUp,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Active Subscriptions",
      value: "456",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Conversion Rate",
      value: "18.4%",
      icon: Percent,
      color: "bg-orange-100 text-orange-600",
    },
  ];

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

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPlan(null);
  };

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
    <div className="">
      <div className="">
        <DashboardTopSection
          title="Premium Features Control"
          description="Manage subscription plans, payments, and premium feature access"
        />

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab("subscription")}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === "subscription"
                ? "bg-purple-500 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Subscription Plans
          </button>
          <button
            onClick={() => setActiveTab("payment")}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === "payment"
                ? "bg-purple-500 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Payment Management
          </button>
        </div>

        {/* Subscription Plans Tab */}
        {activeTab === "subscription" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative"
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <span className="inline-block mt-2 text-green-600 text-sm font-medium">
                      {plan.savings}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleEditPlan(plan)}
                  className={`w-full py-2.5 rounded-md font-medium transition-colors ${
                    plan.popular
                      ? "bg-purple-500 text-white hover:bg-purple-600"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  Edit Plan
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Payment Management Tab */}
        {activeTab === "payment" && (
          <div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}
                  >
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Transactions Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Transactions
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Detailed metrics for each program
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Transaction ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {transaction.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {transaction.user}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          ${transaction.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {transaction.plan}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              transaction.status === "Success"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {transaction.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit Plan Modal */}
      {isModalOpen && editingPlan && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={handleCloseModal}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8">
                {/* Modal Header */}
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Edit Plan: {editingPlan.name}
                </h2>

                {/* Form Container */}
                <div className="border-2 border-purple-200 rounded-2xl p-6 mb-6">
                  {/* Plan Name */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Plan Name
                    </label>
                    <input
                      type="text"
                      value={editingPlan.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Price (USD)
                    </label>
                    <input
                      type="text"
                      value={editingPlan.price}
                      onChange={(e) =>
                        handleInputChange("price", e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  {/* Billing Period */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Billing Period
                    </label>
                    <div className="relative">
                      <select
                        value={editingPlan.billingPeriod}
                        onChange={(e) =>
                          handleInputChange("billingPeriod", e.target.value)
                        }
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors appearance-none bg-white cursor-pointer"
                      >
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                        <option value="Weekly">Weekly</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-gray-700 font-semibold">
                        Features
                      </label>
                      <button
                        onClick={handleAddFeature}
                        className="flex items-center gap-1 text-purple-500 hover:text-purple-600 font-medium transition-colors"
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
                            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-gray-500"
                          />
                          <button
                            onClick={() => handleRemoveFeature(index)}
                            className="text-red-500 hover:text-red-600 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <button
                  onClick={handleSaveChanges}
                  className="w-full sm:w-auto px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumFeatures;
