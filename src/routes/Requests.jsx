import DataTable from "../components/dashboard/DataTabel";

export default function Requests() {
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
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Join Date",
      accessorKey: "join_date",
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

  const data = [
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      type: "Company",
      join_date: "2022-01-01",
    },
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      type: "Individual",
      join_date: "2022-01-01",
    },
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      type: "Company",
      join_date: "2022-01-01",
    },
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      type: "Company",
      join_date: "2022-01-01",
    },
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      type: "Individual",
      join_date: "2022-01-01",
    },
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      type: "Individual",
      join_date: "2022-01-01",
    },
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      type: "Individual",
      join_date: "2022-01-01",
    },
  ];

  return (
    <section className="form_ui">
      <div className="page_head">
        <h1>Providers Requests</h1>
        <p>View and manage all providers requests in the application</p>
      </div>

      <div className="tab_wrapper">
        <DataTable data={data} columns={cols} />
      </div>
    </section>
  );
}
