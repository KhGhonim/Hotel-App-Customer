"use client";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function GallerySection() {
  const [gallery, setGallery] = useState([]);
  const [isFetching, setisFetching] = useState(false);
  const [avatar, setavatar] = useState(null);
  const [avatartoBE, setavatartoBE] = useState(null);
  const [Isloading, setIsloading] = useState(false);
  console.log(gallery);
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
    if (!avatartoBE || !avatar) {
      toast.error("Please add an image to the gallery");
      setIsloading(false);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("image", avatartoBE);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_ResturantGallery}`,
        {
          method: "POST",
          credentials: "include",
          cache: "no-store",
          body: formData,
        }
      );
      if (response.ok) {
        setisFetching(true);
        setavatar(null);
        setavatartoBE(null);
        setIsloading(false);
        toast.success("Image added successfully");
        eo.target.reset();
      } else {
        setIsloading(false);
        setisFetching(false);
        toast.error("Failed to add image to gallery");
        eo.target.reset();
        setavatar(null);
        setavatartoBE(null);
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
    const FetchResturantGallery = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ResturantMGalleryGET, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error("Failed to fetch Gallery Preview");
      }
      setGallery(data);
    };
    FetchResturantGallery();
  }, [isFetching]);

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row  items-center gap-4 my-4">
        <img
          src={avatar || "https://via.placeholder.com/150"}
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
            "Add Gallery"
          )}
        </button>
      </form>

      <h2 className="text-2xl font-semibold text-teal-700 mb-4">Gallery</h2>
      {!gallery ||
        (gallery.length === 0 && <div>No images in the gallery</div>)}
      {gallery && gallery.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
          {gallery?.map((image, index) => (
            <div key={index} className="relative w-56 h-56">
              <img
                src={image.image || "https://via.placeholder.com/300"}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                onClick={() =>
                  setGallery((prev) => prev.filter((_, i) => i !== index))
                }
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
              >
                <MdClose />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
