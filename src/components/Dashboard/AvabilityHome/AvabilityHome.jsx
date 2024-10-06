import ProgressBar from "../ProgressBar/ProgressBar";

export default function AvabilityHome() {
  return (
    <div className="mt-8 w-full md:w-1/2 gap-4 e flex flex-col">
      <div className="rounded-lg bg-green-700 p-4 text-white">
        <h3 className="mb-2 text-lg font-semibold">Available Room Today</h3>
        <div className="flex items-center justify-around">
          <div className="text-3xl font-bold">10</div>
          <ProgressBar percentage={10} />
        </div>
      </div>
      <div className="rounded-lg bg-green-700 p-4 text-white">
        <h3 className="mb-2 text-lg font-semibold">Sold Out Room Today</h3>
        <div className="flex items-center justify-around">
          <div className="text-3xl font-bold">40</div>
          <ProgressBar percentage={40} />
        </div>
      </div>
      <div className="rounded-lg bg-green-700 p-4 text-white">
        <h3 className="mb-2 text-lg font-semibold">
          Dining Table Reserved Today
        </h3>
        <div className="flex items-center justify-around">
          <div className="text-3xl font-bold">86</div>
          <ProgressBar percentage={86} />
        </div>
      </div>
    </div>
  );
}
