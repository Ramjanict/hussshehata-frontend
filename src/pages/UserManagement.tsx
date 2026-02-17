import CommonCard from "@/common/CommonCard";
import Pagination from "@/common/custom/Pagination";
import DashboardTopSection from "@/common/DashboardTopSection";
import AllClients from "@/components/userManagement/AllClients";
import AllCoached from "@/components/userManagement/AllCoached";
import AllUsers from "@/components/userManagement/AllUsers";
import ClientAndCoached from "@/components/userManagement/ClientAndCoached";
import Tracking from "@/components/userManagement/Tracking";
import UserSearchBar from "@/components/userManagement/UserSearchBar";
import { Activity, Crown, UserPlus, Users } from "lucide-react";
import { useState } from "react";
import UserTabs from "./UserTabs";

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState("All Users");

  const statsData = [
    {
      icon: Users,
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      value: "3,421",
      title: "Total Users",
    },
    {
      icon: Activity,
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
      value: "987",
      title: "Active Users",
    },
    {
      icon: Crown,
      iconBgColor: "bg-cyan-100",
      iconColor: "text-cyan-600",
      value: "456",
      title: "Premium Users",
    },
    {
      icon: UserPlus,
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      value: "89",
      title: "New This Month",
    },
  ];

  const activityStats = [
    {
      icon: Users,
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      value: "247",
      title: "Workouts Completed (Today)",
    },
    {
      icon: Activity,
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
      value: "89",
      title: "Active Sessions",
    },
    {
      icon: Activity,
      iconBgColor: "bg-cyan-100",
      iconColor: "text-cyan-600",
      value: "42m",
      title: "Avg. Session Time",
    },
  ];

  const tabs = [
    "All Users",
    "Clients",
    "Coaches",
    "Coached Client",
    "Activity Tracking",
  ];

  return (
    <div className=" space-y-6">
      <DashboardTopSection
        title="User Management"
        description="Manage all users, clients, and coaches on the platform"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {(activeTab === "Activity Tracking" ? activityStats : statsData).map(
          (stat) => {
            return (
              <CommonCard
                key={stat.title}
                icon={stat.icon}
                iconBgColor={stat.iconBgColor}
                iconColor={stat.iconColor}
                value={stat.value}
                title={stat.title}
              />
            );
          },
        )}
      </div>

      <div className="w-full">
        <UserTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {activeTab !== "Activity Tracking" && <UserSearchBar />}

      {activeTab === "All Users" && <AllUsers />}

      {activeTab === "Clients" && <AllClients />}

      {activeTab === "Coaches" && <AllCoached />}

      {activeTab === "Coached Client" && <ClientAndCoached />}

      {activeTab === "Activity Tracking" && <Tracking />}

      <Pagination totalPages={10} currentPage={1} onPageChange={() => {}} />
    </div>
  );
};

export default UserManagement;
