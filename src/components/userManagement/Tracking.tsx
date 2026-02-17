import image from "@/assets/images/woman.png";
import SectionHeader from "@/common/button/SectionHeader";
const popularPrograms = [
  { name: "10-Week Monster Confusion (Classic)", users: 342, percentage: 46 },
  {
    name: "10-Week Monster Confusion (Modernized)",
    users: 298,
    percentage: 75,
  },
  { name: "HUSS 8-Week Beast", users: 189, percentage: 75 },
  { name: "2-2-2 Method", users: 189, percentage: 75 },
];

const recentActivity = [
  {
    id: 1,
    userName: "Lisa Anderson",
    avatar: image,
    action: 'Completed "Monster Mass Builder - Week 3, Day 7"',
    time: "5 min ago",
    badge: "Active",
  },
  {
    id: 2,
    userName: "Mike Chen",
    avatar: image,
    action: 'Completed "Beginner Foundation - Week 1, Day 1"',
    time: "2 min ago",
    badge: "Active",
  },
  {
    id: 3,
    userName: "James Rodriguez",
    avatar: image,
    action: "Upgraded to Premium subscription",
    time: "7 min ago",
    badge: "Subscription",
  },
  {
    id: 4,
    userName: "James Rodriguez",
    avatar: image,
    action: "Upgraded to Premium subscription",
    time: "2 min ago",
    badge: "Subscription",
  },
  {
    id: 5,
    userName: "",
    avatar: image,
    action: 'Completed "Monster Mass Builder - Week 3, Day 2"',
    time: "2 min ago",
    badge: "Active",
  },
];

const activeUsers = [
  {
    id: 1,
    name: "John Smith",
    avatar: image,
    streak: "10 day streak",
    workouts: 12,
  },
  {
    id: 2,
    name: "John Smith",
    avatar: image,
    streak: "10 day streak",
    workouts: 12,
  },
  {
    id: 3,
    name: "John Smith",
    avatar: image,
    streak: "10 day streak",
    workouts: 12,
  },
  {
    id: 4,
    name: "John Smith",
    avatar: image,
    streak: "10 day streak",
    workouts: 12,
  },
];
const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "Active":
      return "bg-green-100 text-green-700";
    case "Subscription":
      return "bg-orange-100 text-orange-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};
const Tracking = () => {
  return (
    <div className="space-y-6">
      {/* Recent User Activity */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <SectionHeader
          title="Recent User Activity"
          description="Real-time user actions and workout completions"
        />

        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={activity.avatar}
                  alt={activity.userName}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {activity.userName}
                  </p>
                  <p className="text-xs text-gray-600">{activity.action}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500">{activity.time}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(activity.badge)}`}
                >
                  {activity.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Most Active Users */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <SectionHeader
            title="Most Active Users (This Week)"
            description="Latest user actions and events"
          />

          <div className="space-y-4">
            {activeUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
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
                    <p className="text-xs text-gray-600">{user.streak}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">
                    {user.workouts}
                  </p>
                  <p className="text-xs text-gray-500">workouts</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Popular Programs */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <SectionHeader
            title="Most Popular Programs (This Week)"
            description="By enrollments and completion rate"
          />

          <div className="space-y-4">
            {popularPrograms.map((program, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    {program.name}
                  </span>
                  <div className="flex items-center gap-2">
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
      </div>
    </div>
  );
};

export default Tracking;
