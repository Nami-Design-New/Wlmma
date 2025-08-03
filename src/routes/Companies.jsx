import DataTable from "../components/dashboard/DataTabel";

export default function Companies() {
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
        <h1>Companies</h1>
        <p>View and manage all companies registered in the application</p>
      </div>

      <div className="tab_wrapper">
        <DataTable data={data} columns={cols} />
      </div>
    </section>
  );
}
