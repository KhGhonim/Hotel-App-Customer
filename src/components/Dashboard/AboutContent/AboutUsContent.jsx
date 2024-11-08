import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

export default function AboutUsContent() {
  const [AboutUsConent, setAboutUsConent] = useState({
    welcoming: "",
    title: "",
    content: "",
    description: "",
    buttonText: "",
  });
  const [isFetching, setisFetching] = useState(false);
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
      !AboutUsConent.welcoming ||
      !AboutUsConent.title ||
      !AboutUsConent.description ||
      !AboutUsConent.content ||
      !AboutUsConent.buttonText
    ) {
      toast.error("Please fill in all fields");
      setIsloading(false);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("welcoming", AboutUsConent.welcoming);
      formData.append("title", AboutUsConent.title);
      formData.append("content", AboutUsConent.content);
      formData.append("description", AboutUsConent.description);
      formData.append("buttonText", AboutUsConent.buttonText);
      formData.append("image", avatartoBE);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AboutUsContent}`,
        {
          method: "POST",
          credentials: "include",
          cache: "no-store",
          body: formData,
        }
      );
      if (response.ok) {
        setisFetching(true);
        setAboutUsConent({
          title: "",
          welcoming: "",
          content: "",
          description: "",
          buttonText: "",
        });
        setavatar(null);
        setavatartoBE(null);
        setIsloading(false);
        toast.success("Page Successfully updated");
        eo.target.reset();
      } else {
        setIsloading(false);
        setisFetching(false);
        toast.error("Failed to the new content");
        eo.target.reset();
        setavatar(null);
        setavatartoBE(null);
        setAboutUsConent({
          title: "",
          welcoming: "",
          content: "",
          description: "",
          buttonText: "",
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

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-teal-700 mb-4">
        About Us &copy;
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700">Welcoming</label>
          <input
            type="text"
            value={AboutUsConent.welcoming}
            name="welcoming"
            onChange={(e) =>
              setAboutUsConent((prev) => ({
                ...prev,
                welcoming: e.target.value,
              }))
            }
            className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={AboutUsConent.title}
            onChange={(e) =>
              setAboutUsConent((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Button</label>
          <input
            type="text"
            value={AboutUsConent.buttonText}
            name="buttonText"
            onChange={(e) =>
              setAboutUsConent((prev) => ({
                ...prev,
                buttonText: e.target.value,
              }))
            }
            className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700">Content</label>
        <textarea
          value={AboutUsConent.content}
          onChange={(e) =>
            setAboutUsConent((prev) => ({
              ...prev,
              content: e.target.value,
            }))
          }
          className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          value={AboutUsConent.description}
          onChange={(e) =>
            setAboutUsConent((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
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
            "Change About Us "
          )}
        </button>
      </form>
    </section>
  );
}
