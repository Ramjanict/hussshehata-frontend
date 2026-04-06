import DashboardCardSkeleton from "@/common/button/DashboardCardSkeleton";
import Pagination from "@/common/custom/Pagination";
import { useGetAllProgramCardQuery } from "@/store/features/content/essentialManagement";
import { useState } from "react";
import ProgramCard from "../reuseable/ProgramCard";

const HomePageContent = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllProgramCardQuery(
    { page },
    { refetchOnMountOrArgChange: true },
  );
  const programs = data?.data?.data?.data || [];
  const list = new Array(10).fill(null);
  return (
    <div>
      <div className="space-y-4">
        {isLoading ? (
          list.map((_, index) => <DashboardCardSkeleton key={index} />)
        ) : programs.length > 0 ? (
          programs.map((program) => (
            <div className="bg-white rounded-lg border border-[#E7E8EB] p-4 sm:p-6">
              <ProgramCard
                key={program.id}
                id={program.id}
                title={program.name}
                category={program.difficulty}
                position={program.sortOrder}
                icon={
                  <div className="flex  items-center text-gray-400 gap-0.5 ">
                    <div className="text-xs">↑</div>
                    <div className="text-xs">↓</div>
                  </div>
                }
                onDelete={() => {}}
                onEdit={() => {}}
                iconAction={() => {}}
              />
            </div>
          ))
        ) : (
          <p className=" text-center"> No programs found</p>
        )}
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

export default HomePageContent;
