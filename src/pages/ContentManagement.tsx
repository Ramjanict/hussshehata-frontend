import DashboardTopSection from "@/common/DashboardTopSection";
import BFR from "@/components/contentManagement/BFR";
import Essential from "@/components/contentManagement/Essential";
import Execution from "@/components/contentManagement/Execution";
import HomePageContent from "@/components/contentManagement/HomePageContent";
import AddBFRSessionModal from "@/components/contentManagement/modal/AddBFRSessionModal";
import AddExecutionNoteModal from "@/components/contentManagement/modal/AddExecutionNoteModal";
import AddPartnerClinicModal from "@/components/contentManagement/modal/AddPartnerClinicModal";
import AddSupplementProductModal from "@/components/contentManagement/modal/AddSupplementProductModal";
import Premium from "@/components/contentManagement/Premium";
import React, { useState } from "react";
import UserTabs from "./UserTabs";

const tabs = [
  "Home Page Content",
  "Premium Lock Library",
  "Execution Notes",
  "BFR Sessions Guidelines",
  "Essential Management",
];
export type EssentialType = "health" | "supplements";
const ContentManagement: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>("Home Page Content");

  const [activeEssentialType, setActiveEssentialType] =
    useState<EssentialType>("health");
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="">
      <DashboardTopSection
        title="Content Management"
        description="Manage app content, premium features, and training notes"
      />

      <div className="w-full">
        <UserTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="py-6">
        {activeTab === "Home Page Content" && <HomePageContent />}
        {activeTab === "Premium Lock Library" && <Premium />}
        {activeTab === "Execution Notes" && (
          <Execution setShowAddModal={setShowAddModal} />
        )}
        {activeTab === "BFR Sessions Guidelines" && (
          <BFR setShowAddModal={setShowAddModal} />
        )}
        {activeTab === "Essential Management" && (
          <Essential
            setShowAddModal={setShowAddModal}
            setActiveEssentialType={setActiveEssentialType}
            activeEssentialType={activeEssentialType}
          />
        )}
      </div>

      {showAddModal && activeTab === "BFR Sessions Guidelines" && (
        <AddBFRSessionModal onClose={() => setShowAddModal(false)} />
      )}
      {showAddModal && activeTab === "Execution Notes" && (
        <AddExecutionNoteModal onClose={() => setShowAddModal(false)} />
      )}
      {showAddModal &&
        activeTab === "Essential Management" &&
        activeEssentialType === "health" && (
          <AddPartnerClinicModal onClose={() => setShowAddModal(false)} />
        )}
      {showAddModal &&
        activeTab === "Essential Management" &&
        activeEssentialType === "supplements" && (
          <AddSupplementProductModal onClose={() => setShowAddModal(false)} />
        )}
      {/* {showAddModal &&
        activeTab === "bfr" &&
        activeContentType === "research" && (
          <AddResearchEducationModal onClose={() => setShowAddModal(false)} />
        )} */}
    </div>
  );
};

export default ContentManagement;
