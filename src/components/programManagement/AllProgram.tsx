import ActionButton from "@/common/button/ActionButton";
import DashboardCardSkeleton from "@/common/button/DashboardCardSkeleton";
import SectionHeader from "@/common/button/SectionHeader";
import Pagination from "@/common/custom/Pagination";
import { useDebounce } from "@/common/custom/useDebounce";
import {
  useDeleteProgramMutation,
  useGetAllProgramQuery,
} from "@/store/features/program/programAPI";
import type { ProgramSingle } from "@/store/features/program/types/program";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";

export const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-red-100 text-red-700";
    case "Beginner":
      return "bg-green-100 text-green-700";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

interface AllProgramProps {
  handleEdit: (item: ProgramSingle) => void;
}
const AllProgram: React.FC<AllProgramProps> = ({ handleEdit }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const limit = 10;
  const searchDebounce = useDebounce(search, 500);
  const { data, isLoading } = useGetAllProgramQuery({
    page,
    search: searchDebounce,
    limit,
  });

  console.log("setSearch", setSearch);

  const programs = data?.data.data.data || [];
  const totalPage = data?.data.data.meta.totalPages || 0;

  const list = new Array(10).fill(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteProgram] = useDeleteProgramMutation();
  const handleDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await deleteProgram(id).unwrap();
    } catch (error) {
      console.error(error);
    } finally {
      setDeletingId(null);
    }
  };
  return (
    <div>
      {isLoading ? (
        list.map((_, index) => <DashboardCardSkeleton key={index} />)
      ) : programs.length > 0 ? (
        <div className="space-y-4">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <SectionHeader
                    title={program.name}
                    description=""
                    className="!mb-0 line-clamp-1!"
                  />

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium hidden md:block ${getLevelColor(program.difficulty)}`}
                  >
                    {program.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ActionButton onClick={() => handleEdit(program)}>
                    <Edit className="w-4 h-4" />
                    Edit
                  </ActionButton>
                  <ActionButton
                    onClick={() => handleDelete(program.id)}
                    isDelete={deletingId === program.id}
                    variant="delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </ActionButton>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Duration</p>
                  <p className="text-sm font-medium text-gray-900">
                    {program.durationWeeks}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Enrolment</p>
                  <p className="text-sm font-medium text-gray-900">452</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Completion</p>
                  <p className="text-sm font-medium text-green-600">78%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-5">
          <p className="text-center text-gray-600">No program found</p>
        </div>
      )}
      <div className="py-5">
        <Pagination
          currentPage={page}
          totalPages={totalPage}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default AllProgram;
