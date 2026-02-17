import TabButton from "@/common/custom/TabButton";
import DashboardTopSection from "@/common/DashboardTopSection";
import Payment from "@/components/feature/Payment";
import SubscriptionPlan from "@/components/feature/SubscriptionPlan";
import React, { useState } from "react";

type TabType = "subscription" | "payment";

const PremiumFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("subscription");

  return (
    <div className="w-full max-w-full">
      <div className="w-full max-w-full">
        <DashboardTopSection
          title="Premium Features Control"
          description="Manage subscription plans, payments, and premium feature access"
        />

        <div className="flex gap-2 mb-8">
          <TabButton
            label="Subscription"
            value="subscription"
            activeValue={activeTab}
            onChange={setActiveTab}
          />
          <TabButton
            label="Payment"
            value="payment"
            activeValue={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {activeTab === "subscription" && <SubscriptionPlan />}

        {activeTab === "payment" && <Payment />}
      </div>
    </div>
  );
};

export default PremiumFeatures;
