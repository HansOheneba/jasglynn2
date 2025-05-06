'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/atoms/Button';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        {/* Hero section */}
        <div className="w-full h-[70vh] bg-gradient-to-r from-blue-800 to-purple-900 relative">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">JasGlynn Bookings</span>
              <span className="block text-indigo-200">Event Venue &amp; Photo Studio</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-indigo-100 sm:max-w-3xl">
              Book our premium venues for your special events or our professional photo studios for your next shoot.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:space-x-4">
                <Link href="/event-booking" 
                      className="inline-block py-3 px-6 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-gray-900">
                  Book Event Venue
                </Link>
                <Link href="/studio-booking"
                      className="inline-block py-3 px-6 rounded-md shadow bg-white text-indigo-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-gray-900">
                  Book Photo Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking options section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Services</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">Choose your booking option</p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We offer two premium booking services to meet your needs.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center">
                    <div className="bg-indigo-500 rounded-md p-2">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="ml-4 text-xl font-medium text-gray-900">Event Venue Booking</h3>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Book our premium venues for your special events, weddings, corporate meetings, and more. Multiple spaces available to accommodate your needs.
                  </p>
                  <div className="mt-6">
                    <Link href="/event-booking">
                      <Button variant="primary">Book a Venue</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center">
                    <div className="bg-indigo-500 rounded-md p-2">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="ml-4 text-xl font-medium text-gray-900">Photo Studio Booking</h3>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Reserve one of our professional photography studios equipped with lighting equipment. Optional professional photographer available.
                  </p>
                  <div className="mt-6">
                    <Link href="/studio-booking">
                      <Button variant="primary">Book a Studio</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admin access section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Are you an administrator?</h2>
          <div className="mt-4">
            <Link href="/admin/dashboard">
              <Button variant="secondary">Go to Admin Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
