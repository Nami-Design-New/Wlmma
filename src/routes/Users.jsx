import { useState } from "react";
import DataTable from "../components/dashboard/DataTabel";
import useGetAllUsers from "../hooks/users/useGetAllUsers";
import DataLoader from "../ui/DataLoader";

export default function Users() {
  const [page, setPage] = useState(1);
  const { data: users, total, isLoading } = useGetAllUsers(page);

  const cols = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Phone Number",
      accessorKey: "phone_number",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
    {
      header: "Join Date",
      accessorKey: "created_at",
      cell: (info) => {
        const dateString = info.getValue?.();
        const date = new Date(dateString);
        return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleString();
      },
    },
  ];

  return (
    <section className="form_ui">
      <div className="page_head">
        <h1>App Users</h1>
        <p>View and manage all users registered in the application</p>
      </div>

      <div className="tab_wrapper">
        {isLoading ? (
          <DataLoader />
        ) : (
          <DataTable
            data={users}
            columns={cols}
            page={page}
            total={Math.ceil(total / 8)}
            setPage={setPage}
          />
        )}
      </div>
    </section>
  );
}
