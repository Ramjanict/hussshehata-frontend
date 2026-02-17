import CommonSelect from "@/common/custom/CommonSelect";
import CommonSearch from "../CommonSearch";

const UserSearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-lg p-4">
      <CommonSearch />

      <CommonSelect
        value="all_roles"
        onValueChange={(val) => console.log(val)}
        className="sm:w-50! w-full!"
        item={[
          { label: "All Roles", value: "all_roles" },
          { label: "Admin", value: "admin" },
          { label: "Editor", value: "editor" },
          { label: "User", value: "user" },
        ]}
      />
    </div>
  );
};

export default UserSearchBar;
