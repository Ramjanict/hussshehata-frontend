import DashboardTopSection from "@/common/DashboardTopSection";
import BFR from "@/components/contentManagement/BFR";
import Essential from "@/components/contentManagement/Essential";
import Execution from "@/components/contentManagement/Execution";
import HomePageContent from "@/components/contentManagement/HomePageContent";
import AddBFRSessionModal from "@/components/contentManagement/modal/AddBFRSessionModal";
import AddExecutionNoteModal from "@/components/contentManagement/modal/AddExecutionNoteModal";
import AddPartnerClinicModal from "@/components/contentManagement/modal/AddPartnerClinicModal";
import AddResearchEducationModal from "@/components/contentManagement/modal/AddResearchEducationModal";
import AddSupplementProductModal from "@/components/contentManagement/modal/AddSupplementProductModal";
import Premium from "@/components/contentManagement/Premium";
import React, { useState } from "react";
import UserTabs from "./UserTabs";

type ContentType = "safety" | "sessions" | "research";

const tabs = [
  "Home Page Content",
  "Premium Lock Library",
  "Execution Notes",
  "BFR Sessions Guidelines",
  "Essential Management",
];
const ContentManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home Page Content");
  const [activeContentType, setActiveContentType] =
    useState<ContentType>("safety");
  const [activeEssentialType, setActiveEssentialType] =
    useState<EssentialType>("health");
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="">
      <DashboardTopSection
        title="Content Management"
        description="Manage app content, premium features, and training notes"
      />
      {/* Tabs */}

      <div className="w-full">
        <UserTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="p-6">
        {activeTab === "Home Page Content" && <HomePageContent />}
        {activeTab === "Premium Lock Library" && <Premium />}
        {activeTab === "Execution Notes" && <Execution />}
        {activeTab === "BFR Sessions Guidelines" && <BFR />}
        {activeTab === "Essential Management" && <Essential />}
      </div>

      {/* Modals */}
      {showAddModal &&
        activeTab === "bfr" &&
        activeContentType === "sessions" && (
          <AddBFRSessionModal onClose={() => setShowAddModal(false)} />
        )}
      {showAddModal && activeTab === "execution" && (
        <AddExecutionNoteModal onClose={() => setShowAddModal(false)} />
      )}
      {showAddModal &&
        activeTab === "essential" &&
        activeEssentialType === "health" && (
          <AddPartnerClinicModal onClose={() => setShowAddModal(false)} />
        )}
      {showAddModal &&
        activeTab === "essential" &&
        activeEssentialType === "supplements" && (
          <AddSupplementProductModal onClose={() => setShowAddModal(false)} />
        )}
      {showAddModal &&
        activeTab === "bfr" &&
        activeContentType === "research" && (
          <AddResearchEducationModal onClose={() => setShowAddModal(false)} />
        )}
    </div>
  );
};

export default ContentManagement;
