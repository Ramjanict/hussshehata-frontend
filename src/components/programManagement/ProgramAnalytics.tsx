import SectionHeader from "@/common/button/SectionHeader";

interface Program {
  id: string;
  name: string;
  type: string;
  enrolment: number;
  activeUsers: number;
  completion: number;
  revenue: number;
  trend: "Growing" | "Declining" | "Stable";
}

const programs: Program[] = [
  {
    id: "1",
    name: "Monster Confusion (Classic)",
    type: "10 Weeks",
    enrolment: 456,
    activeUsers: 342,
    completion: 46,
    revenue: 12450,
    trend: "Growing",
  },
  {
    id: "2",
    name: "Monster Confusion (Classic)",
    type: "10 Weeks",
    enrolment: 456,
    activeUsers: 342,
    completion: 46,
    revenue: 12450,
    trend: "Declining",
  },
  {
    id: "3",
    name: "Monster Confusion (Classic)",
    type: "10 Weeks",
    enrolment: 456,
    activeUsers: 342,
    completion: 46,
    revenue: 12450,
    trend: "Growing",
  },
  {
    id: "4",
    name: "Monster Confusion (Classic)",
    type: "10 Weeks",
    enrolment: 456,
    activeUsers: 342,
    completion: 46,
    revenue: 12450,
    trend: "Growing",
  },
];

const tableHeaders = [
  { label: "Program Name", align: "text-left" },
  { label: "Type", align: "text-center xl:table-cell hidden" },
  { label: "Enrolment", align: "text-center md:table-cell hidden" },
  { label: "Active Users", align: "text-center lg:table-cell hidden" },
  { label: "Completion", align: "text-center" },
  { label: "Revenue", align: "text-center md:table-cell hidden" },
  { label: "Trend", align: "text-center sm:table-cell hidden" },
];

const TrendBadge: React.FC<{ trend: Program["trend"] }> = ({ trend }) => {
  if (trend === "Growing") {
    return (
      <span className="text-green-500 font-medium text-sm">↑ Growing</span>
    );
  }
  if (trend === "Declining") {
    return (
      <span className="text-red-500 font-medium text-sm">↓ Declining</span>
    );
  }
  return <span className="text-gray-500 font-medium text-sm">→ Stable</span>;
};

const CompletionBar: React.FC<{ value: number }> = ({ value }) => (
  <div className="flex items-center gap-2">
    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-indigo-500 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
    <span className="text-sm text-gray-600">{value}%</span>
  </div>
);
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

export const tableDesign = {
  table:
    "w-full border-separate border-spacing-0 border border-[#EEF2FF] rounded-lg overflow-hidden",
  thead: "bg-[#EEF2FF] text-black",
  tbody: "text-[#101828]",
  tr: "border-b last:border-b-0 border-[#EEF2FF]",
  th: "text-left py-3 px-4 text-sm font-bold text-black border-b border-r border-[#EEF2FF] first:rounded-tl-lg last:rounded-tr-lg",
  td: "text-left py-3 px-4 text-sm text-[#101828] border-b border-r border-[#EEF2FF] last:border-r-0",
};

const ProgramAnalytics = () => {
  return (
    <div className="space-y-6">
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

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <SectionHeader
          title="Enrollment Programs"
          description="By enrollments and completion rate"
        />

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
        <SectionHeader
          title="Program Performance Breakdown"
          description="Detailed metrics for each program"
        />

        <div className="w-full overflow-x-auto">
          <table className={tableDesign.table}>
            <thead className={tableDesign.thead}>
              <tr className={tableDesign.tr}>
                {tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className={`
                    ${tableDesign.th}
                    ${header.align}
                  `}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <tr key={program.id} className={tableDesign.tr}>
                  <td className={tableDesign.td}>{program.name}</td>

                  <td className={`xl:table-cell hidden ${tableDesign.td}`}>
                    <span className="inline-block bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 rounded-full">
                      {program.type}
                    </span>
                  </td>

                  <td className={`md:table-cell hidden ${tableDesign.td}`}>
                    {program.enrolment.toLocaleString()}
                  </td>

                  <td className={`lg:table-cell hidden ${tableDesign.td}`}>
                    {program.activeUsers.toLocaleString()}
                  </td>

                  <td className={` ${tableDesign.td}`}>
                    <div className="flex justify-center">
                      <CompletionBar value={program.completion} />
                    </div>
                  </td>

                  <td className={`md:table-cell hidden ${tableDesign.td}`}>
                    ${program.revenue.toLocaleString()}
                  </td>

                  <td className={` sm:table-cell hidden  ${tableDesign.td}`}>
                    <TrendBadge trend={program.trend} />
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
