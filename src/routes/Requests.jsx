import DataTable from "../components/dashboard/DataTabel";

export default function Requests() {
  const cols = [
    {
      header: "ID",
      accessorKey: "id",
    },
  ];
  const data = [
    {
      id: 1,
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
