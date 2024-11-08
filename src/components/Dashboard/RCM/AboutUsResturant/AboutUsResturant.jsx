"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

export default function AboutUsResturant() {
  const [aboutUs, setAboutUs] = useState("");
  const [aboutUsData, setaboutUsData] = useState([]);
  const [Isloading, setIsloading] = useState(false);

  useEffect(() => {
    const FetchAboutUs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_AboutUs}`);
        const data = await response.json();
        setaboutUsData(data);
        setIsloading(false);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch About Us data");
      }
    };

    FetchAboutUs();
  }, [Isloading]);

  const saveAboutUs = async () => {
    setIsloading(true);
    try {
      const response = await fetch(
        `/api/AboutUsResturant/updateHeadline?id=${aboutUs}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        toast.error("Failed to update About Us data");
        setIsloading(false);
        return;
      } else {
        toast.success("About Us data saved successfully");
        setIsloading(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save About Us data");
      setIsloading(false);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-teal-700 mb-4">About Us</h2>
      <textarea
        defaultValue={aboutUsData?.headline || aboutUs}
        onChange={(e) => setAboutUs(e.target.value)}
        className="w-full h-32 p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
        placeholder="Describe your restaurant..."
      />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="mt-4 p-4 flex-1 bg-teal-50 rounded-lg">
          <h3 className="text-lg font-semibold text-teal-700">Preview:</h3>
          <span className="text-gray-600">{aboutUs}</span>
        </div>
        <button
          disabled={Isloading}
          onClick={saveAboutUs}
          className="bg-teal-600 text-white w-32 p-2 rounded-lg hover:bg-teal-700"
        >
          {Isloading ? (
            <div className="flex w-full h-full items-center justify-center">
              <FaSpinner className="animate-spin" />
            </div>
          ) : (
            "Save"
          )}
        </button>
      </div>
    </section>
  );
}
