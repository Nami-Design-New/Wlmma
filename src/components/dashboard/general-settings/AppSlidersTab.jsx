import { useState } from "react";
import DataTable from "../DataTabel";
import AddSlideModal from "../../../ui/modals/AddSlideModal";

export default function AppSlidersTab() {
  const [show, setShow] = useState(false);

  const cols = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ row }) => (
        <img
          src={row.original.image}
          alt={`slider-${row.original.id}`}
          style={{
            width: "100px",
            height: "80px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      ),
    },
    {
      header: "Link",
      accessorKey: "link",
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="d-flex gap-2">
          <button
            className="action_btn"
            style={{ color: "#000" }}
            onClick={() => handleEdit(row.original)}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button
            className="action_btn"
            style={{ color: "#ff0000" }}
            onClick={() => handleDelete(row.original)}
          >
            <i className="fa-regular fa-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      image: "/images/app-icon.svg",
      link: "Slider 1",
    },
    {
      id: "2",
      image: "/images/app-icon.svg",
      link: "Slider 2",
    },
    {
      id: "3",
      image: "/images/app-icon.svg",
      link: "Slider 3",
    },
    {
      id: "4",
      image: "/images/app-icon.svg",
      link: "Slider 4",
    },
  ];

  const handleEdit = (slider) => {
    console.log("Edit slider:", slider);
    setShow(true);
  };

  const handleDelete = (slider) => {
    console.log("Delete slider:", slider);
  };

  return (
    <div className="tab_wrapper">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">App Sliders</h5>
        <button className="add_btn" onClick={() => setShow(true)}> Add Slide</button>
      </div>
      <DataTable columns={cols} data={data} />

      <AddSlideModal showModal={show} setShowModal={setShow} />
    </div>
  );
}
