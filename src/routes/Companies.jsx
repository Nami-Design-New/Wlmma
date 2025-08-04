import DataTable from "../components/dashboard/DataTabel";

export default function Companies() {
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
    }
  ];
  const data = [
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      join_date: "2022-01-01",
    },
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      join_date: "2022-01-01",
    },
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      join_date: "2022-01-01",
    },
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      join_date: "2022-01-01",
    },
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      join_date: "2022-01-01",
    },
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      join_date: "2022-01-01",
    },
    {
      id: 1,
      name: "John Doe",
      phone_number: "01027964469",
      gender: "Male",
      join_date: "2022-01-01",
    },
  ];
  
  return (
    <section className="form_ui">
      <div className="page_head">
        <h1>Companies</h1>
        <p>View and manage all companies registered in the application</p>
      </div>

      <div className="tab_wrapper">
        <DataTable data={data} columns={cols} />
      </div>
    </section>
  );
}
