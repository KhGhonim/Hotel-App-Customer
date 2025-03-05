"use client";
import Footer from "components/ClientInterface/Footer/Footer";
import Header from "components/ClientInterface/Header/Header";
import { eventData } from "DB/db";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BiCamera } from "react-icons/bi";
import { TbUserScan } from "react-icons/tb";

function EventsWrapper({event}) {
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Event Not Found
          </h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={`https://images.unsplash.com/${event.images[0]}`}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            {event.title}
          </h1>
          <p className="text-lg mt-4 max-w-2xl">{event.description}</p>
        </div>
      </div>

      {/* Venue Features */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Venue Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {event.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Event Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Event Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {event.packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition flex flex-col h-full"
              >
                <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
                <div className="flex items-center gap-2 mb-4 text-gray-700">
                  <TbUserScan className="w-5 h-5 text-blue-500" />
                  <span>{pkg.guests} guests</span>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-3 text-gray-700 flex-grow">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-auto py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Event Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {event.images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={`https://images.unsplash.com/${image}`}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <BiCamera className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className=" py-6 bg-white mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Get in Touch
        </h2>
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative">
              <label className="block text-gray-600 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            {/* Email */}
            <div className="relative">
              <label className="block text-gray-600 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            {/* Event Date */}
            <div className="relative">
              <label className="block text-gray-600 font-medium mb-2">
                Event Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Guests */}
            <div className="relative">
              <label className="block text-gray-600 font-medium mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Expected guests"
              />
            </div>
            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-gray-600 font-medium mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Tell us more about your event..."
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="md:col-span-2">
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg rounded-lg hover:opacity-90 transition">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default EventsWrapper