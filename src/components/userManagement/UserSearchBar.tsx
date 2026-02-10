import CommonSelect from "@/common/custom/CommonSelect";
import CommonSearch from "../CommonSearch";

const UserSearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <CommonSearch />

      <CommonSelect
        value="all_roles"
        onValueChange={(val) => console.log(val)}
        w={200}
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
