"use client";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import MenuHighlightsTable from "./MenuHighlightsTable/MenuHighlightsTable";

export default function MenuHighlights() {
  const [Col1] = useState("image");
  const [Col2] = useState("name");
  const [Col3] = useState("description");
  const [Col4] = useState("price");
  const [Col6] = useState("Actions");
  const [ResturantMenuGrid, setResturantMenuGrid] = useState([]);
  const [isFetching, setisFetching] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const FetchResturantMenuGrid = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ResturantMenuGrid, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      }
      setResturantMenuGrid(data);
    };
    FetchResturantMenuGrid();
  }, [isFetching]);

  const [menuHighlights, setMenuHighlights] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [avatar, setavatar] = useState(null);
  const [avatartoBE, setavatartoBE] = useState(null);
  const [Isloading, setIsloading] = useState(false);
  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setavatar(URL.createObjectURL(file));
      setavatartoBE(file);
    }
  };

  const handleSave = async (eo) => {
    eo.preventDefault();
    setIsloading(true);
    if (
      !menuHighlights.name ||
      !menuHighlights.price ||
      !menuHighlights.description
    ) {
      toast.error("Please fill in all fields");
      setIsloading(false);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("name", menuHighlights.name);
      formData.append("price", menuHighlights.price);
      formData.append("description", menuHighlights.description);
      formData.append("image", avatartoBE);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_ResturantMenuGrid}`,
        {
          method: "POST",
          credentials: "include",
          cache: "no-store",
          body: formData,
        }
      );
      if (response.ok) {
        setisFetching(true);
        setMenuHighlights({
          name: "",
          price: "",
          description: "",
        });
        setavatar(null);
        setavatartoBE(null);
        setIsloading(false);
        toast.success("Menu Highlights added successfully");
        eo.target.reset();
      } else {
        setIsloading(false);
        setisFetching(false);
        toast.error("Failed to add Menu Highlights");
        eo.target.reset();
        setavatar(null);
        setavatartoBE(null);
        setMenuHighlights({
          name: "",
          price: "",
          description: "",
        });
      }
    } catch (error) {
      console.error(error);
      setIsloading(false);
      toast.error("Failed to add Menu Highlights");
    } finally {
      setIsloading(false);
      eo.target.reset();
    }
  };

  return (
    <>
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          Menu Highlights
        </h2>
        <div className="p-4 border-b border-gray-200 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={menuHighlights.name}
                className="w-full p-2 border outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
                onChange={(e) =>
                  setMenuHighlights((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                value={menuHighlights.price}
                className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
                onChange={(e) =>
                  setMenuHighlights((prev) => ({
                    ...prev,
                    price: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              rows={4}
              cols={50}
              value={menuHighlights.description}
              onChange={(e) =>
                setMenuHighlights((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row  items-center gap-4 mt-4">
            <img
              src={avatar || "https://via.placeholder.com/150"} // Placeholder when no avatar is uploaded
              alt="User Avatar"
              className="w-96 h-96 object-cover rounded-lg"
            />
            <input
              ref={ref}
              type="file"
              name="image"
              id="image"
              className="hidden"
              onChange={handleAvatarChange} // Trigger image preview on file selection
            />
            <button
              onClick={() => ref.current.click()} // Open file dialog on button click
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
            >
              Upload Image
            </button>
          </div>
          <form onSubmit={handleSave} className="flex justify-end">
            <button
              type="submit"
              disabled={Isloading}
              className="bg-teal-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-teal-700"
            >
              {Isloading ? (
                <div className="flex w-full h-full items-center justify-center">
                  <FaSpinner className="animate-spin" />
                </div>
              ) : (
                "Add to Menu Item"
              )}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <MenuHighlightsTable
          Col1={Col1}
          Col2={Col2}
          Col3={Col3}
          Col6={Col6}
          ResturantMenuGrid={ResturantMenuGrid}
          Col4={Col4}
        />
      </section>
    </>
  );
}
