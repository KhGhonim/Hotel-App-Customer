import React from "react";

export default function AvabilityHome() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      <div className="rounded-lg bg-green-700 p-4 text-white">
        <h3 className="mb-2 text-lg font-semibold">Available Room Today</h3>
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold">683</div>
          <div className="h-2 w-3/4 rounded-full bg-green-600">
            <div className="h-full w-4/5 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-green-700 p-4 text-white">
        <h3 className="mb-2 text-lg font-semibold">Sold Out Room Today</h3>
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold">156</div>
          <div className="h-2 w-3/4 rounded-full bg-green-600">
            <div className="h-full w-1/5 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
