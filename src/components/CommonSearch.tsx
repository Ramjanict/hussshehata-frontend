import { Search } from "lucide-react";

const CommonSearch = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-7 h-7 text-[#919EAB]" />
        <input
          type="text"
          placeholder="search user"
          className="w-full pl-12 p-3 bg-[#A78BFA]/12 rounded-lg text-sm outline-none "
        />
      </div>
    </div>
  );
};

export default CommonSearch;
