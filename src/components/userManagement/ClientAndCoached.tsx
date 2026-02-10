import { ChevronLeft, ChevronRight, Crown, MoreVertical } from "lucide-react";
import { getStatusColor, getTypeColor } from "./AllUsersTable";

const coachedClientsData = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientAvatar: "/api/placeholder/40/40",
    coachName: "Sarah Johnson",
    coachEmail: "sarah.j@email.com",
    coachAvatar: "/api/placeholder/40/40",
    type: "Coached Client",
    status: "Approved",
    subscription: "Premium",
    registration: "2025-01-10",
  },
  {
    id: 2,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientAvatar: "/api/placeholder/40/40",
    coachName: "Sarah Johnson",
    coachEmail: "sarah.j@email.com",
    coachAvatar: "/api/placeholder/40/40",
    type: "Coached Client",
    status: "Need Clearance",
    subscription: "Free",
    registration: "2025-01-10",
  },
  {
    id: 3,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientAvatar: "/api/placeholder/40/40",
    coachName: "Sarah Johnson",
    coachEmail: "sarah.j@email.com",
    coachAvatar: "/api/placeholder/40/40",
    type: "Coached Client",
    status: "Approved",
    subscription: "Free",
    registration: "2025-01-10",
  },
  {
    id: 4,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientAvatar: "/api/placeholder/40/40",
    coachName: "Sarah Johnson",
    coachEmail: "sarah.j@email.com",
    coachAvatar: "/api/placeholder/40/40",
    type: "Coached Client",
    status: "Need Clearance",
    subscription: "Free",
    registration: "2025-01-10",
  },
  {
    id: 5,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientAvatar: "/api/placeholder/40/40",
    coachName: "Sarah Johnson",
    coachEmail: "sarah.j@email.com",
    coachAvatar: "/api/placeholder/40/40",
    type: "Coached Client",
    status: "Approved",
    subscription: "Free",
    registration: "2025-01-10",
  },
  {
    id: 6,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientAvatar: "/api/placeholder/40/40",
    coachName: "Sarah Johnson",
    coachEmail: "sarah.j@email.com",
    coachAvatar: "/api/placeholder/40/40",
    type: "Coached Client",
    status: "Approved",
    subscription: "Free",
    registration: "2025-01-10",
  },
];
const ClientAndCoached = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-blue-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700">
              Coached clients
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700">
              Coach
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
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {coachedClientsData.map((client) => (
            <tr key={client.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={client.clientAvatar}
                    alt={client.clientName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {client.clientName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {client.clientEmail}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={client.coachAvatar}
                    alt={client.coachName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {client.coachName}
                    </p>
                    <p className="text-xs text-gray-500">{client.coachEmail}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(client.type)}`}
                >
                  {client.type}
                </span>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}
                >
                  {client.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`text-sm ${client.subscription === "Premium" ? "text-orange-600 flex items-center gap-1" : "text-blue-600"}`}
                >
                  {client.subscription === "Premium" && (
                    <Crown className="w-4 h-4" />
                  )}
                  {client.subscription}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {client.registration}
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

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 py-4 border-t border-gray-200">
        <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded flex items-center gap-1">
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
        <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded">
          1
        </button>
        <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
          2
        </button>
        <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
          3
        </button>
        <span className="px-3 py-2 text-sm text-gray-600">...</span>
        <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded flex items-center gap-1">
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ClientAndCoached;
