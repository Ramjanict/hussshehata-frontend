import CommonCard from "@/common/CommonCard";
import DashboardTopSection from "@/common/DashboardTopSection";
import CommonSearch from "@/components/CommonSearch";
import AllProgram from "@/components/programManagement/AllProgram";
import CreateProgramModal from "@/components/programManagement/modal/CreateProgramModal";
import ShowExerciseModal from "@/components/programManagement/modal/showExerciseModal";
import ShowMethodModal from "@/components/programManagement/modal/ShowMethodModal";
import ProgramAnalytics from "@/components/programManagement/ProgramAnalytics";
import Training from "@/components/programManagement/Training";
import { Clock, Crown, Dumbbell, Users } from "lucide-react";
import { useState } from "react";
import UserTabs from "./UserTabs";

const ProgramManagement = () => {
  const [activeTab, setActiveTab] = useState("All Programs");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showMethodModal, setShowMethodModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showExerciseModal, setShowExerciseModal] = useState(false);

  const statsData = [
    {
      icon: Dumbbell,
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      value: "4",
      title: "Total Programs",
    },
    {
      icon: Users,
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
      value: "987",
      title: "Active Enrolments",
    },
    {
      icon: Crown,
      iconBgColor: "bg-cyan-100",
      iconColor: "text-cyan-600",
      value: "01",
      title: "Premium Programs",
    },
    {
      icon: Clock,
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      value: "78%",
      title: "Avg Completion",
    },
  ];

  const tabs = [
    "All Programs",
    "Training Methods Library",
    "Program Analytics",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <DashboardTopSection
        title="Program Management"
        description="Create and manage comprehensive workout programs"
        buttonText="Create Program"
        action={() => setShowCreateModal(true)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {statsData.map((stat, index) => {
          return <CommonCard key={index} {...stat} />;
        })}
      </div>

      <UserTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <CommonSearch />
      {activeTab === "All Programs" && <AllProgram />}
      {activeTab === "Training Methods Library" && (
        <Training setShowMethodModal={setShowMethodModal} />
      )}
      {activeTab === "Program Analytics" && <ProgramAnalytics />}
      {showMethodModal && (
        <ShowMethodModal setShowMethodModal={setShowMethodModal} />
      )}
      {showCreateModal && (
        <CreateProgramModal
          setShowCreateModal={setShowCreateModal}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          setShowExerciseModal={setShowExerciseModal}
        />
      )}

      {showExerciseModal && (
        <ShowExerciseModal setShowExerciseModal={setShowExerciseModal} />
      )}
    </div>
  );
};

export default ProgramManagement;
