import React from 'react'

export default function HomeStatics() {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <div className="flex items-center">
        <div className="mr-4 rounded bg-red-100 p-3">
          <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">New Booking</p>
          <p className="text-2xl font-semibold text-gray-900">8,461</p>
        </div>
      </div>
    </div>
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <div className="flex items-center">
        <div className="mr-4 rounded bg-green-100 p-3">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Check In</p>
          <p className="text-2xl font-semibold text-gray-900">753</p>
        </div>
      </div>
    </div>
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <div className="flex items-center">
        <div className="mr-4 rounded bg-red-100 p-3">
          <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Check Out</p>
          <p className="text-2xl font-semibold text-gray-900">516</p>
        </div>
      </div>
    </div>
  </div>
  )
}
