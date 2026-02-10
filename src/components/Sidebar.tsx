import man from "@/assets/images/man.png";
import CommonHeader from "@/common/header/CommonHeader";
import { cn } from "@/lib/utils";
import { Settings, User, Users } from "lucide-react";
import { BsFillGridFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { LuDumbbell } from "react-icons/lu";
import { PiBookOpenTextLight } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

interface SidebarProps {
  onItemClick?: () => void;
}

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: BsFillGridFill,
    path: "/dashboard",
  },
  {
    id: "user-management",
    label: "User Management",
    icon: Users,
    path: "/dashboard/user-management",
  },
  {
    id: "program-management",
    label: "Program Management",
    icon: LuDumbbell,
    path: "/dashboard/program-management",
  },
  {
    id: "content-management",
    label: "Content Management",
    icon: PiBookOpenTextLight,
    path: "/dashboard/content-management",
  },
  {
    id: "premium-features",
    label: "Premium Features",
    icon: FaCrown,
    path: "/dashboard/premium-features",
  },

  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ onItemClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-white flex flex-col h-full w-full ">
      <div className="flex items-center justify-center m-6">
        <div className="w-full bg-black p-4  rounded-lg">
          <div className="w-10 h-10 flex justify-center mx-auto">
            <img
              src={logo}
              alt="Arlene McCoy"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Profile Section */}
          <div className="flex items-start justify-between mt-4 ">
            <div className="flex items-center gap-1">
              {/* Profile Image */}
              <div className="w-7.5 h-7.5 rounded-full  overflow-hidden flex-shrink-0 bg-slate-700">
                <img
                  src={man}
                  alt="Arlene McCoy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Email */}
              <div className="flex-1">
                <CommonHeader size="xs" className="!text-white">
                  Arlene McCoy
                </CommonHeader>
                <CommonHeader size="xs" className="!text-[#5CE1E6]">
                  Admin@gmail.com
                </CommonHeader>
              </div>
            </div>

            {/* Settings Icon */}
            <button className="text-slate-400 hover:text-cyan-400 transition-colors p-2">
              <User size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/dashboard" &&
              location.pathname.startsWith(item.path));

          return (
            <div
              key={item.id}
              className={`flex justify-between py-2 rounded-md hover:bg-gray hover:text-green ${
                isActive && "bg-black text-white"
              }`}
            >
              <button
                className={cn(
                  "w-full cursor-pointer flex items-center gap-2 transition-all duration-200 px-4",
                  isActive && "text-green",
                )}
                onClick={() => {
                  navigate(item.path);
                  onItemClick?.(); // close sheet if provided
                }}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
