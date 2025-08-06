import { useState } from "react";
import DataTable from "../components/dashboard/DataTabel";
import useGetUsers from "../hooks/users/useGetUsers";
import DataLoader from "../ui/DataLoader";

export default function Companies() {
  const [page, setPage] = useState(1);
  const { data: users, total, isLoading } = useGetUsers(3, page);
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
      accessorKey: "join_date",
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
        <h1>Companies</h1>
        <p>View and manage all companies registered in the application</p>
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
