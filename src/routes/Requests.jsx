import { useState } from "react";
import DataTable from "../components/dashboard/DataTabel";
import useGetRequests from "../hooks/users/useGetRequests";
import DataLoader from "../ui/DataLoader";

export default function Requests() {
  const [page, setPage] = useState(1);
  const { data: requests, total, isLoading } = useGetRequests(page);  

  const cols = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "provider.name",
    },
    {
      header: "Phone Number",
      accessorKey: "provider.phone_number",
    },
    {
      header: "Gender",
      accessorKey: "provider.gender",
    },
    {
      header: "Type",
      accessorKey: "provider.user_type.type",
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
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="d-flex gap-2">
          <button className="requests_action" style={{ color: "#000" }}>
            <i className="fa-regular fa-check"></i> Approve
          </button>
          <button className="requests_action" style={{ color: "#ff0000" }}>
            <i className="fa-regular fa-x"></i> Decline
          </button>
        </div>
      ),
      accessorKey: "actions",
    },
  ];

  return (
    <section className="form_ui">
      <div className="page_head">
        <h1>Providers Requests</h1>
        <p>View and manage all providers requests in the application</p>
      </div>

      <div className="tab_wrapper">
        {isLoading ? (
          <DataLoader />
        ) : (
          <DataTable
            data={requests}
            columns={cols}
            total={Math.ceil(total / 8)}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </section>
  );
}
