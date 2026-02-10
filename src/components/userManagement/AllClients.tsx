import AllUsersTable from "./AllUsersTable";

const clientsData = [
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

const AllClients = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <AllUsersTable users={clientsData} />
      </div>
    </div>
  );
};

export default AllClients;
