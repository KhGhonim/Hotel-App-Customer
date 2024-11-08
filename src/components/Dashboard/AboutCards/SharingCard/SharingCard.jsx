import { FaSpinner } from "react-icons/fa";

export default function SharingCard({
  setCardsData,
  CardsData,
  handleSaveCard,
  Isloading,
}) {
  return (
    <div className="my-8  gap-4 flex flex-col w-full">
      <div className="grid grid-cols-1  gap-4">
        <div>
          <label className="block text-gray-700">Card title</label>
          <input
            type="text"
            value={CardsData.Cardtitle}
            name="Cardtitle"
            onChange={(e) =>
              setCardsData((prev) => ({
                ...prev,
                Cardtitle: e.target.value,
              }))
            }
            className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Card Dscription</label>
          <input
            type="text"
            name="CardDscription"
            value={CardsData.CardDscription}
            onChange={(e) =>
              setCardsData((prev) => ({
                ...prev,
                CardDscription: e.target.value,
              }))
            }
            className="w-full p-2 border  outline-none focus:outline-teal-400 border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <select
            name="select"
            id="select"
            value={CardsData.Cardicon}
            onChange={(e) =>
              setCardsData((prev) => ({
                ...prev,
                Cardicon: e.target.value,
              }))
            }
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option disabled value="">
              Select a category
            </option>
            <option value="Sun">Sun</option>
            <option value="Building">Building</option>
            <option value="Green Leaf">Green Leaf</option>
          </select>
        </div>
      </div>

      <form onSubmit={handleSaveCard} className="flex justify-end">
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
            "Save "
          )}
        </button>
      </form>
    </div>
  );
}
