import DashboardCardSkeleton from "@/common/button/DashboardCardSkeleton";
import Pagination from "@/common/custom/Pagination";
import {
  useGetAllProgramCardQuery,
  useGetProgramLockQuery,
} from "@/store/features/content/essentialManagement";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProgramCard from "../reuseable/ProgramCard";
import WeekCard from "../reuseable/WeekCard";

const Premium = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetAllProgramCardQuery(
    { page },
    { refetchOnMountOrArgChange: true },
  );
  const programs = data?.data?.data?.data || [];
  const list = new Array(5).fill(null);

  const [selectedProgramId, setSelectedProgramId] = useState<string>("");
  const { data: lockStatus } = useGetProgramLockQuery(selectedProgramId, {
    skip: !selectedProgramId,
    refetchOnMountOrArgChange: true,
  });

  return (
    <div>
      <div className="space-y-4">
        {programs.map((program) => (
          <div
            className="bg-white rounded-lg border border-[#E7E8EB] p-4 sm:p-6"
            key={program.id}
          >
            <ProgramCard
              id={program.id}
              title={program.name}
              category={program.difficulty}
              position={program.sortOrder}
              icon={
                <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                  {selectedProgramId === program.id ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
              }
              onDelete={() => {}}
              onEdit={() => {
                setSelectedProgramId(program.id);
              }}
              iconAction={() => {
                setSelectedProgramId(program.id);
              }}
            />

            {selectedProgramId === program.id ? (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-6  gap-4 w-full">
                {list.map((_, idx) => (
                  <DashboardCardSkeleton key={idx} />
                ))}
              </div>
            ) : (
              lockStatus?.data?.data &&
              selectedProgramId === program.id && (
                <WeekCard
                  program={lockStatus?.data?.data}
                  selectedProgramId={selectedProgramId}
                />
              )
            )}
          </div>
        ))}
      </div>
      <div className="py-5">
        <Pagination
          currentPage={page}
          onPageChange={(page) => setPage(page)}
          totalPages={data?.data.data.meta.totalPage ?? 1}
        />
      </div>
    </div>
  );
};

export default Premium;
