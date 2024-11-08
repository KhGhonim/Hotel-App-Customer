"use client";
import { useState } from "react";
import SharingCard from "./SharingCard/SharingCard";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

export default function AboutCards() {
  const [activeTabs, setactiveTabs] = useState("Headline");
  const [completedSteps, setCompletedSteps] = useState({
    Headline: false,
    Card1: false,
    Card2: false,
    Card3: false,
  });
  const [CardsData, setCardsData] = useState({
    Cardtitle: "",
    CardDscription: "",
    Cardicon: "",
  });

  const [Header, setHeader] = useState({
    headline: "",
    subtitle: "",
    buttonText: "",
  });
  const [Isloading, setIsloading] = useState(false);

  const handleSaveCard = async (eo, currentCard) => {
    eo.preventDefault();
    setIsloading(true);
    if (
      !CardsData.Cardtitle ||
      !CardsData.CardDscription ||
      !CardsData.Cardicon
    ) {
      toast.error("Please fill in all fields");
      setIsloading(false);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("Cardtitle", CardsData.Cardtitle);
      formData.append("CardDscription", CardsData.CardDscription);
      formData.append("Cardicon", CardsData.Cardicon);
      formData.append("currentCard", currentCard);
      const response = await fetch(`${process.env.NEXT_PUBLIC_AboutUsCards}`, {
        method: "POST",
        credentials: "include",
        cache: "no-store",
        body: formData,
      });
      if (response.ok) {
        setCompletedSteps((prev) => ({ ...prev, [currentCard]: true }));
        setCardsData({
          Cardtitle: "",
          CardDscription: "",
          Cardicon: "",
        });
        setIsloading(false);
        toast.success("Page Successfully updated");
        if (currentCard === "Card1") setactiveTabs("Card 2");
        else if (currentCard === "Card2") setactiveTabs("Card 3");
        eo.target.reset();
      } else {
        setIsloading(false);
        toast.error("Failed to the new content");
        eo.target.reset();

        setCardsData({
          Cardtitle: "",
          CardDscription: "",
          Cardicon: "",
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

  const handleSaveHeader = async (eo, currentCard) => {
    eo.preventDefault();
    setIsloading(true);
    if (!Header.headline || !Header.subtitle || !Header.buttonText) {
      toast.error("Please fill in all fields");
      setIsloading(false);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("headline", Header.headline);
      formData.append("subtitle", Header.subtitle);
      formData.append("buttonText", Header.buttonText);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AboutUsHeadline}`,
        {
          method: "POST",
          credentials: "include",
          cache: "no-store",
          body: formData,
        }
      );
      if (response.ok) {
        setCompletedSteps((prev) => ({ ...prev, [currentCard]: true }));
        setHeader({
          headline: "",
          subtitle: "",
          buttonText: "",
        });
        setIsloading(false);
        toast.success("Page Successfully updated");
        eo.target.reset();
        if (currentCard === "Headline") setactiveTabs("Card 1");
      } else {
        setIsloading(false);
        toast.error("Failed to the new content");
        eo.target.reset();

        setHeader({
          headline: "",
          subtitle: "",
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
  return (
    <div className={`h-full w-full flex flex-col gap-4`}>
      <div className="flex flex-col my-2 justify-between items-center lg:flex-row gap-8">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setactiveTabs("Headline")}
              className={`${
                activeTabs === "Headline"
                  ? "bg-teal-600 text-white"
                  : "bg-white text-teal-600"
              } px-4 py-2 rounded-lg`}
              disabled={!completedSteps.Headline}
            >
              Headline
            </button>
            <button
              onClick={() => setactiveTabs("Card 1")}
              className={`${
                activeTabs === "Card 1"
                  ? "bg-teal-600 text-white"
                  : "bg-white text-teal-600"
              } px-4 py-2 rounded-lg`}
              disabled={!completedSteps.Card1}
            >
              Card 1
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setactiveTabs("Card 2")}
              className={`${
                activeTabs === "Card 2"
                  ? "bg-teal-600 text-white"
                  : "bg-white text-teal-600"
              } px-4 py-2 rounded-lg`}
              disabled={!completedSteps.Card2}
            >
              Card 2
            </button>
            <button
              onClick={() => setactiveTabs("Card 3")}
              className={`${
                activeTabs === "Card 3"
                  ? "bg-teal-600 text-white"
                  : "bg-white text-teal-600"
              } px-4 py-2 rounded-lg`}
              disabled={!completedSteps.Card3}
            >
              Card 3
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Headline content */}
        {activeTabs === "Headline" && (
          <div className="grid my-9 grid-cols-1  gap-4">
            <div>
              <label className="block text-gray-700">Headline</label>
              <input
                type="text"
                name="headline"
                value={Header.headline}
                onChange={(e) =>
                  setHeader((prev) => ({
                    ...prev,
                    headline: e.target.value,
                  }))
                }
                className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Subtitle</label>
              <input
                type="text"
                name="subtitle"
                value={Header.subtitle}
                onChange={(e) =>
                  setHeader((prev) => ({
                    ...prev,
                    subtitle: e.target.value,
                  }))
                }
                className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Button Text</label>
              <input
                type="text"
                name="buttonText"
                value={Header.buttonText}
                onChange={(e) =>
                  setHeader((prev) => ({
                    ...prev,
                    buttonText: e.target.value,
                  }))
                }
                className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
              />
            </div>

            <form
              onSubmit={(eo) => handleSaveHeader(eo, "Headline")}
              className="flex justify-end items-center"
            >
              <button
                type="submit"
                disabled={Isloading}
                className="bg-teal-600 text-white px-8 py-2 rounded-lg"
              >
                {Isloading ? (
                  <div className="flex w-full h-full items-center justify-center">
                    <FaSpinner className="animate-spin" />
                  </div>
                ) : (
                  "Save"
                )}
              </button>
            </form>
          </div>
        )}

        {/* 1st Card */}
        {activeTabs === "Card 1" && completedSteps.Headline && (
          <SharingCard
            setCardsData={setCardsData}
            CardsData={CardsData}
            handleSaveCard={(eo) => handleSaveCard(eo, "Card1")}
            Isloading={Isloading}
          />
        )}

        {/* 2nd Card */}
        {activeTabs === "Card 2" && completedSteps.Card1 && (
          <SharingCard
            setCardsData={setCardsData}
            CardsData={CardsData}
            handleSaveCard={(eo) => handleSaveCard(eo, "Card2")}
            Isloading={Isloading}
          />
        )}

        {/* 3rd Card */}
        {activeTabs === "Card 3" && completedSteps.Card2 && (
          <SharingCard
            setCardsData={setCardsData}
            CardsData={CardsData}
            handleSaveCard={(eo) => handleSaveCard(eo, "Card3")}
            Isloading={Isloading}
          />
        )}
      </div>
    </div>
  );
}
