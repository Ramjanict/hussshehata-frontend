import { Crown, MoreVertical } from "lucide-react";

export interface User {
  id: number | string;
  name: string;
  email: string;
  avatar: string;
  type: "Clients" | "Coach" | "Coached Client" | string;
  status: "Active" | "Approved" | "Need Clearance" | string;
  subscription: "Premium" | "Free" | string;
  registration: string; // e.g. "2025-01-10"
  lastLogin: string;
}

export interface AllUsersTableProps {
  users: User[];
  emptyMessage?: string;
  onActionClick?: (user: User) => void;
}

export const getTypeColor = (type: string): string => {
  switch (type) {
    case "Clients":
      return "bg-purple-100 text-purple-700";
    case "Coach":
      return "bg-blue-100 text-blue-700";
    case "Coached Client":
      return "bg-cyan-100 text-cyan-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "Active":
    case "Approved":
      return "bg-green-100 text-green-700";
    case "Need Clearance":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export const AllUsersTable: React.FC<AllUsersTableProps> = ({
  users,
  emptyMessage = "No users found.",
  onActionClick,
}) => {
  return (
    <>
      <div className=" bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700">
                  User
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
              {users.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                users.map((user) => (
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
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                          user.type,
                        )}`}
                      >
                        {user.type}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          user.status,
                        )}`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`text-sm flex items-center gap-1 ${
                          user.subscription === "Premium"
                            ? "text-orange-600"
                            : "text-blue-600"
                        }`}
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
                      <button
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        onClick={() => onActionClick?.(user)}
                        aria-label={`Actions for ${user.name}`}
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default AllUsersTable;
