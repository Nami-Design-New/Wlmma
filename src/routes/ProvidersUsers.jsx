import DataTable from "../components/dashboard/DataTabel";
import useGetUsers from "../hooks/users/useGetUsers";

export default function ProvidersUsers() {
  const { data: users, isLoading } = useGetUsers(2);
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
        <h1>Service Providers</h1>
        <p>View and manage all companies registered in the application</p>
      </div>

      <div className="tab_wrapper">
        {!isLoading && <DataTable data={users} columns={cols} />}
      </div>
    </section>
  );
}
