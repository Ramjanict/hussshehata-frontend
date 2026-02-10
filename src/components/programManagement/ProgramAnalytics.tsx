import { Crown, MoreVertical } from "lucide-react";
import { getStatusColor, getTypeColor } from "../userManagement/AllUsersTable";

const performanceUsers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: "/api/placeholder/40/40",
    type: "Clients",
    status: "Active",
    subscription: "Premium",
    registration: "2025-01-10",
    lastLogin: "2026-01-22",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: "/api/placeholder/40/40",
    type: "Clients",
    status: "Active",
    subscription: "Free",
    registration: "2025-01-10",
    lastLogin: "2026-01-22",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: "/api/placeholder/40/40",
    type: "Clients",
    status: "Active",
    subscription: "Free",
    registration: "2025-01-10",
    lastLogin: "2026-01-22",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: "/api/placeholder/40/40",
    type: "Clients",
    status: "Active",
    subscription: "Free",
    registration: "2025-01-10",
    lastLogin: "2026-01-22",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: "/api/placeholder/40/40",
    type: "Clients",
    status: "Active",
    subscription: "Free",
    registration: "2025-01-10",
    lastLogin: "2026-01-22",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: "/api/placeholder/40/40",
    type: "Clients",
    status: "Active",
    subscription: "Free",
    registration: "2025-01-10",
    lastLogin: "2026-01-22",
  },
];
const enrollmentPrograms = [
  { name: "10-Week Monster Confusion (Classic)", users: 342, percentage: 16 },
  {
    name: "10-Week Monster Confusion (Modernized)",
    users: 298,
    percentage: 20,
  },
  { name: "HUSS 8-Week Beast", users: 189, percentage: 36 },
  { name: "2-2-2 Method", users: 189, percentage: 65 },
];

const ProgramAnalytics = () => {
  return (
    <div className="space-y-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-600 rounded-xl p-6 text-white">
          <p className="text-sm opacity-90 mb-2">Most Popular Program</p>
          <h3 className="text-2xl font-bold mb-1">Monster Confusion</h3>
          <p className="text-sm opacity-90 mb-4">456 enrollments</p>
          <p className="text-sm opacity-75">78% completion rate</p>
        </div>
        <div className="bg-green-600 rounded-xl p-6 text-white">
          <p className="text-sm opacity-90 mb-2">Highest Completion</p>
          <h3 className="text-2xl font-bold mb-1">Monster Confusion</h3>
          <p className="text-sm opacity-90 mb-4">789 enrollments</p>
          <p className="text-sm opacity-75">78% completion rate</p>
        </div>
      </div>

      {/* Enrollment Programs */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Enrolment Programs (This Week)
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          By enrollments and completion rate
        </p>
        <div className="space-y-4">
          {enrollmentPrograms.map((program, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">
                  {program.name}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    {program.users} users
                  </span>
                  <span className="text-sm text-gray-500">
                    {program.percentage}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                  style={{ width: `${program.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Performance Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Program Performance Breakdown
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Detailed metrics for each program
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700">
                  Program Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700">
                  Subscription
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700">
                  Registration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {performanceUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(user.type)}`}
                    >
                      {user.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-sm ${user.subscription === "Premium" ? "text-orange-600 flex items-center gap-1" : "text-blue-600"}`}
                    >
                      {user.subscription === "Premium" && (
                        <Crown className="w-4 h-4" />
                      )}
                      {user.subscription}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.registration}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgramAnalytics;
