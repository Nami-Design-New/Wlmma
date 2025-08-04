import DataTable from "../components/dashboard/DataTabel";

export default function ToolOrders() {
  const cols = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Provider",
      accessorKey: "provider",
    },
    {
      header: "User",
      accessorKey: "user",
    },
    {
      header: "booking date",
      accessorKey: "booking_date",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
  ];
  const data = [
    {
      id: 1,
      status: "pending",
      provider: "John Doe",
      user: "John Doe",
      booking_date: "2022-01-01",
      price: "1000",
    },
    {
      id: 1,
      status: "pending",
      provider: "John Doe",
      user: "John Doe",
      booking_date: "2022-01-01",
      price: "1000",
    },
    {
      id: 1,
      status: "pending",
      provider: "John Doe",
      user: "John Doe",
      booking_date: "2022-01-01",
      price: "1000",
    },
    {
      id: 1,
      status: "pending",
      provider: "John Doe",
      user: "John Doe",
      booking_date: "2022-01-01",
      price: "1000",
    },
  ];

  return (
    <section className="form_ui">
      <div className="page_head">
        <h1>Tools Orders</h1>
        <p>View and manage all orders for tools</p>
      </div>

      <div className="tab_wrapper">
        <DataTable data={data} columns={cols} />
      </div>
    </section>
  );
}
