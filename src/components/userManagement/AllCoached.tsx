import image from "@/assets/images/woman.png";
import AllUsersTable from "./AllUsersTable";

const coachesData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: image,
    type: "Clients",
    status: "Active",
    subscription: "Premium",
    registration: "2025-01-10",
    lastLogin: "2026-01-22",
    inviteSent: 5,
    clients: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: image,
    type: "Clients",
    status: "Active",
    subscription: "Free",
    registration: "2025-01-10",
    lastLogin: "2026-01-22",
    inviteSent: 2,
    clients: 2,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: image,
    type: "Clients",
    status: "Active",
    subscription: "Free",
    registration: "2025-01-10",
    lastLogin: "2026-01-22",
    inviteSent: 0,
    clients: 0,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: image,
    type: "Clients",
    status: "Active",
    subscription: "Free",
    registration: "2025-01-10",
    lastLogin: "2026-01-22",
    inviteSent: 1,
    clients: 1,
  },
  {
    id: 5,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: image,
    type: "Clients",
    status: "Active",
    subscription: "Free",
    registration: "2025-01-10",
    lastLogin: "2026-01-22",
    inviteSent: 5,
    clients: 5,
  },
  {
    id: 6,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: image,
    type: "Clients",
    status: "Active",
    subscription: "Free",
    registration: "2025-01-10",
    lastLogin: "2026-01-22",
    inviteSent: 10,
    clients: 10,
  },
];

const AllCoached = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <AllUsersTable users={coachesData} />
    </div>
  );
};

export default AllCoached;
