import image from "@/assets/images/woman.png";
import { Crown, MoreVertical } from "lucide-react";
import { tableDesign } from "../programManagement/ProgramAnalytics";
import { getStatusColor, getTypeColor } from "./AllUsersTable";

const coachedClientsData = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientAvatar: image,
    coachName: "Sarah Johnson",
    coachEmail: "sarah.j@email.com",
    coachAvatar: image,
    type: "Coached Client",
    status: "Approved",
    subscription: "Premium",
    registration: "2025-01-10",
  },
  {
    id: 2,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientAvatar: image,
    coachName: "Sarah Johnson",
    coachEmail: "sarah.j@email.com",
    coachAvatar: image,
    type: "Coached Client",
    status: "Need Clearance",
    subscription: "Free",
    registration: "2025-01-10",
  },
  {
    id: 3,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientAvatar: image,
    coachName: "Sarah Johnson",
    coachEmail: "sarah.j@email.com",
    coachAvatar: image,
    type: "Coached Client",
    status: "Approved",
    subscription: "Free",
    registration: "2025-01-10",
  },
  {
    id: 4,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientAvatar: image,
    coachName: "Sarah Johnson",
    coachEmail: "sarah.j@email.com",
    coachAvatar: image,
    type: "Coached Client",
    status: "Need Clearance",
    subscription: "Free",
    registration: "2025-01-10",
  },
  {
    id: 5,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientAvatar: image,
    coachName: "Sarah Johnson",
    coachEmail: "sarah.j@email.com",
    coachAvatar: image,
    type: "Coached Client",
    status: "Approved",
    subscription: "Free",
    registration: "2025-01-10",
  },
  {
    id: 6,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientAvatar: image,
    coachName: "Sarah Johnson",
    coachEmail: "sarah.j@email.com",
    coachAvatar: image,
    type: "Coached Client",
    status: "Approved",
    subscription: "Free",
    registration: "2025-01-10",
  },
];
const tableHeaders = [
  { label: "Coached clients", align: "text-left" },
  { label: "Coach", align: "text-left md:table-cell hidden" },
  { label: "Type", align: "text-left lg:table-cell hidden" },
  { label: "Status", align: "text-left" },
  { label: "Subscription", align: "text-left xl:table-cell hidden" },
  { label: "Registration", align: "text-left xl:table-cell hidden" },
  { label: "Action", align: "text-left" },
];
const ClientAndCoached = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="block w-full overflow-x-auto">
        <table className={tableDesign.table}>
          <thead className={tableDesign.thead}>
            <tr className={tableDesign.tr}>
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className={` ${header.align} ${tableDesign.th}`}
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={tableDesign.tbody}>
            {coachedClientsData.map((client) => (
              <tr key={client.id} className={tableDesign.tr}>
                <td className={` ${tableDesign.td}`}>
                  <div className="flex items-center gap-3">
                    <img
                      src={client.clientAvatar}
                      alt={client.clientName}
                      className="w-10 h-10 rounded-full  hidden sm:block"
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
                <td className={` md:table-cell hidden ${tableDesign.td} `}>
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
                      <p className="text-xs text-gray-500">
                        {client.coachEmail}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  className={`truncate hidden lg:table-cell ${tableDesign.td} `}
                >
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(client.type)}`}
                  >
                    {client.type}
                  </span>
                </td>
                <td className={` truncate ${tableDesign.td} `}>
                  <span
                    className={` px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}
                  >
                    {client.status}
                  </span>
                </td>
                <td className={` hidden xl:table-cell ${tableDesign.td} `}>
                  <span
                    className={`text-sm ${client.subscription === "Premium" ? "text-orange-600 flex items-center gap-1" : "text-blue-600"}`}
                  >
                    {client.subscription === "Premium" && (
                      <Crown className="w-4 h-4" />
                    )}
                    {client.subscription}
                  </span>
                </td>
                <td className={` hidden xl:table-cell  ${tableDesign.td} `}>
                  {client.registration}
                </td>
                <td className={` ${tableDesign.td} `}>
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
  );
};

export default ClientAndCoached;
