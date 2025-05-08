"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="relative">
        {/* Hero section */}
        <div className="w-full h-[70vh] bg-gradient-to-r from-jasglynn-green to-jasglynn-lime relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center sm:px-6 lg:px-8 relative z-10">
            <Image
              src="/assets/jasLogo.png"
              alt="JasGlynn Logo"
              width={120}
              height={120}
              className="mb-6 transform hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-md">
              <span className="block">JasGlynn Event Center</span>
              <span className="block text-jasglynn-yellow">
                Event Venue &amp; Photo Studio
              </span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-white drop-shadow-md font-medium sm:max-w-3xl">
              Book our premium venues for your special events or our
              professional photo studios for your next shoot.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:space-x-4">
                <Link
                  href="/event-booking"
                  className="inline-block py-3 px-6 rounded-md shadow-lg bg-jasglynn-yellow text-gray-900 font-bold hover:bg-jasglynn-yellow/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jasglynn-yellow focus:ring-offset-jasglynn-green transform hover:scale-105 transition-all duration-300"
                >
                  Book Event Venue
                </Link>
                <Link
                  href="/studio-booking"
                  className="inline-block py-3 px-6 rounded-md shadow-lg bg-white text-jasglynn-green font-bold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jasglynn-green focus:ring-offset-jasglynn-lime transform hover:scale-105 transition-all duration-300"
                >
                  Book Photo Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking options section */}
      <div className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-jasglynn-green tracking-wide uppercase">
              Our Services
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Choose your booking option
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-700">
              We offer two premium booking services to meet your needs.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-lg shadow-lg overflow-hidden border-2 border-jasglynn-green/30 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8 text-gray-800">
                  <div className="flex items-center">
                    <div className="bg-jasglynn-green rounded-md p-2 shadow-md">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-900">
                      Event Venue Booking
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-700">
                    Book our premium venues for your special events, weddings,
                    corporate meetings, and more. Multiple spaces available to
                    accommodate your needs.
                  </p>
                  <div className="mt-6">
                    <Link href="/event-booking">
                      <Button
                        variant="primary"
                        className="font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        Book a Venue
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-lg shadow-lg overflow-hidden border-2 border-jasglynn-lime/30 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8 text-gray-800">
                  <div className="flex items-center">
                    <div className="bg-jasglynn-green rounded-md p-2 shadow-md">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-900">
                      Photo Studio Booking
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-700">
                    Reserve one of our professional photography studios equipped
                    with lighting equipment. Optional professional photographer
                    available.
                  </p>
                  <div className="mt-6">
                    <Link href="/studio-booking">
                      <Button
                        variant="primary"
                        className="font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        Book a Studio
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-700">
              Hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 border-l-4 border-jasglynn-yellow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-jasglynn-yellow flex items-center justify-center text-gray-900 font-bold text-xl shadow-md">
                  S
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">Wedding Reception</p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;The venue was absolutely perfect for our wedding
                reception. The staff were professional and accommodating to all
                our needs.&quot;
              </p>
              <div className="mt-3 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-jasglynn-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 border-l-4 border-jasglynn-coral hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-jasglynn-coral flex items-center justify-center text-white font-bold text-xl shadow-md">
                  M
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Michael Brown</h3>
                  <p className="text-sm text-gray-600">Product Photography</p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;The studio had all the equipment I needed for my product
                photography. Having the option of a professional photographer
                was a huge plus.&quot;
              </p>
              <div className="mt-3 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-jasglynn-coral"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 border-l-4 border-jasglynn-green hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-jasglynn-green flex items-center justify-center text-white font-bold text-xl shadow-md">
                  L
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Lisa Chen</h3>
                  <p className="text-sm text-gray-600">Corporate Event</p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;We&apos;ve hosted multiple corporate events at JasGlynn
                and each one has been a success. Their attention to detail is
                exceptional.&quot;
              </p>
              <div className="mt-3 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-jasglynn-green"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admin access section */}
      <div className="bg-gray-900 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Are you an administrator?</h2>
          <div className="mt-4">
            <Link href="/admin/dashboard">
              <Button
                variant="secondary"
                className="font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Go to Admin Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
