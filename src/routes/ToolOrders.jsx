import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import DataTable from "../components/dashboard/DataTabel";
import useGetTools from "../hooks/settings/useGetTools";
import DataLoader from "../ui/DataLoader";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function ToolOrders() {
  const { data: tools, isLoading } = useGetTools();

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
  }, []);

  const cols = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ row }) => {
        const images = row.original.tool_images || [];
        const groupName = `gallery-${row.original.id}`;

        return (
          <>
            {images.length > 0 && (
              <a href={images[0].image_path} data-fancybox={groupName}>
                <img
                  src={images[0].image_path}
                  alt={`tool-${row.original.id}`}
                  style={{
                    width: "100px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </a>
            )}

            {images.slice(1).map((img, idx) => (
              <a
                key={idx}
                href={img.image_path}
                data-fancybox={groupName}
                style={{ display: "none" }}
              >
                Hidden Image
              </a>
            ))}
          </>
        );
      },
    },

    {
      header: "Name",
      accessorKey: "name_en",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "Owner",
      accessorKey: "user.name",
    },
  ];

  return (
    <section className="form_ui">
      <div className="page_head">
        <h1>Tools Orders</h1>
        <p>View and manage all orders for tools</p>
      </div>

      <div className="tab_wrapper">
        {isLoading ? <DataLoader /> : <DataTable data={tools} columns={cols} />}
      </div>
    </section>
  );
}
