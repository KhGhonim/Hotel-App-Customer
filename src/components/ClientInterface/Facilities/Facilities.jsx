import { amenities } from "DB/db";

export default function Facilities() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
            THE KG CAVE HOTEL
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Facilities and Amenities
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600 mx-auto">
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-base text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
