import CommonButton from "@/common/button/CommonButton";
import CommonSwitch from "@/common/custom/CommonSwitch";
import CommonHeader from "@/common/header/CommonHeader";
import type { FC } from "react";
import { CgLockUnlock } from "react-icons/cg";
import type { Program } from "../contentManagement/Premium";

interface WeekCardProps {
  program: Program;
  toggleWeekPremium: (id: string, week: number) => void;
  toggleLockAll: (id: string) => void;
  handleSaveConfiguration: (id: string) => void;
}
const WeekCard: FC<WeekCardProps> = ({
  program,
  toggleWeekPremium,
  toggleLockAll,
  handleSaveConfiguration,
}) => {
  return (
    <div className="pt-6 ">
      <div className="flex justify-between items-center mb-8">
        <CommonHeader
          size="sm"
          className="text-[#101828]! font-semibold! line-clamp-1"
        >
          Week-by-Week Lock Configuration
        </CommonHeader>

        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span className="text-sm text-gray-600 ">Lock All</span>
          <CommonSwitch
            checked={program.lockAll}
            onChange={() => toggleLockAll(program.id)}
          />
        </div>
      </div>

      <div className=" flex  flex-wrap gap-5">
        {program.weekConfig.map((week) => (
          <div
            key={week.week}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all w-full  sm:w-60 ${
              week.isPremium
                ? "border-purple-300 bg-purple-50"
                : "border-gray-300 bg-white"
            }`}
            onClick={() => toggleWeekPremium(program.id, week.week)}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">Week {week.week}</span>
              {week.isPremium && (
                <CgLockUnlock size={20} className="text-purple-600" />
              )}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {week.isPremium ? "Premium" : "Free"}
            </p>
          </div>
        ))}
      </div>
      <div className=" flex justify-end mt-6">
        <CommonButton onClick={() => handleSaveConfiguration(program.id)}>
          Save Week Configuration
        </CommonButton>
      </div>
    </div>
  );
};

export default WeekCard;
