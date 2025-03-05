import Link from "next/link";

function SpecialEventsCelebrations() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-12">
          Special Events & Celebrations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Weddings",
              capacity: "Up to 200 guests",
              image: "photo-1519167758481-83f550bb49b3",
              type: "weddings",
            },
            {
              title: "Corporate Events",
              capacity: "Up to 150 guests",
              image: "photo-1523580494863-6f3031224c94",
              type: "corporate",
            },
            {
              title: "Private Parties",
              capacity: "Up to 100 guests",
              image: "photo-1562866470-3774249bef10",
              type: "parties",
            },
          ].map((event, index) => (
            <Link
              href={`/Events/${event.type}`}
              key={index}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={`https://images.unsplash.com/${event.image}`}
                alt={event.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-white/80 mb-4">{event.capacity}</p>
                <button className="w-full py-2 cursor-pointer bg-white text-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialEventsCelebrations;
