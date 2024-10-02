export default function RecentBooking() {
  return (
    <div className="mt-8 rounded-lg bg-white p-4 shadow-sm w-full md:w-2/5">
      <h2 className="mb-4 text-lg font-semibold">Recent Bookings</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/placeholder.svg"
              alt="Room"
              className="h-16 w-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold">Queen Bed A-12324</h3>
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg"
                  alt="James Sukardi"
                  className="h-6 w-6 rounded-full"
                />
                <span className="text-sm text-gray-500">James Sukardi</span>
                <span className="text-sm text-gray-500">12min ago</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-green-500 px-3 py-1 text-sm font-medium text-white">
            3
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/placeholder.svg"
              alt="Room"
              className="h-16 w-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold">Deluxe Room B-1324</h3>
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg"
                  alt="Angela Moss"
                  className="h-6 w-6 rounded-full"
                />
                <span className="text-sm text-gray-500">Angela Moss</span>
                <span className="text-sm text-gray-500">12min ago</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-red-500 px-3 py-1 text-sm font-medium text-white">
            16, 17, 18
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/placeholder.svg"
              alt="Room"
              className="h-16 w-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold">King Big C-2445</h3>
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg"
                  alt="JGeovanny"
                  className="h-6 w-6 rounded-full"
                />
                <span className="text-sm text-gray-500">JGeovanny</span>
                <span className="text-sm text-gray-500">12min ago</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-orange-500 px-3 py-1 text-sm font-medium text-white">
            3
          </div>
        </div>
      </div>
      <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800">
        View more
      </button>
    </div>
  );
}
