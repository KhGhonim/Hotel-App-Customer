"use client";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import MenuChefSpeacial from "./MenuChefSpeacial/MenuChefSpeacial";

export default function ChefSpecial() {
  const [chefSpecial, setChefSpecial] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [ResturantMenuChefSpeacialGrid, setResturantMenuChefSpeacialGrid] =
    useState([]);
  const [isFetching, setisFetching] = useState(false);
  const [avatar, setavatar] = useState(null);
  const [avatartoBE, setavatartoBE] = useState(null);
  const [Isloading, setIsloading] = useState(false);
  const [Col1] = useState("image");
  const [Col2] = useState("name");
  const [Col3] = useState("description");
  const [Col4] = useState("price");
  const [Col6] = useState("Actions");

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
    if (!chefSpecial.name || !chefSpecial.price || !chefSpecial.description) {
      toast.error("Please fill in all fields");
      setIsloading(false);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("name", chefSpecial.name);
      formData.append("price", chefSpecial.price);
      formData.append("description", chefSpecial.description);
      formData.append("image", avatartoBE);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_ResturantMenuChefSpeacialGrid}`,
        {
          method: "POST",
          credentials: "include",
          cache: "no-store",
          body: formData,
        }
      );
      if (response.ok) {
        setisFetching(true);
        setChefSpecial({
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
        setChefSpecial({
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

  const ref = useRef(null);
  useEffect(() => {
    const FetchResturantMenuChefSpeacialGrid = async () => {
      const res = await fetch(
        process.env.NEXT_PUBLIC_ResturantMenuChefSpeacialGET,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        toast.error("Failed to fetch Menu Chef Preview");
      }
      setResturantMenuChefSpeacialGrid(data);
    };
    FetchResturantMenuChefSpeacialGrid();
  }, [isFetching]);

  return (
    <>
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          Chef's Special
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={chefSpecial.name}
              onChange={(e) =>
                setChefSpecial((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              value={chefSpecial.price}
              onChange={(e) =>
                setChefSpecial((prev) => ({
                  ...prev,
                  price: e.target.value,
                }))
              }
              className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={chefSpecial.description}
            onChange={(e) =>
              setChefSpecial((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex items-center gap-4 mt-4">
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
            onChange={handleAvatarChange}
          />
          <button
            onClick={() => ref.current.click()}
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
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <MenuChefSpeacial
          Col1={Col1}
          Col2={Col2}
          Col3={Col3}
          Col4={Col4}
          Col6={Col6}
          ResturantMenuChefSpeacialGrid={ResturantMenuChefSpeacialGrid}
        />
      </section>
    </>
  );
}
