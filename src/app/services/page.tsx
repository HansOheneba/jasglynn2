"use client";

import React from "react";
// import Image from "next/image";
import Link from "next/link";
import Button from "@/components/atoms/Button";

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="bg-jasglynn-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-xl max-w-3xl mx-auto">
              Premium spaces and professional services for all your photography
              and event needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-jasglynn-gray">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-jasglynn-coral mx-auto my-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JasGlynn Studios provides premium spaces and services to make your
            events and photography sessions exceptional.
          </p>
        </div>

        {/* Event Venue Section */}
        <div className="mb-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="lg:order-2 mb-10 lg:mb-0">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gradient-to-r from-jasglynn-yellow/30 to-jasglynn-coral/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-white/80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-jasglynn-gray">
                      Event Venues
                    </h3>
                    <p className="text-jasglynn-gray">
                      Perfect for weddings, corporate events, and celebrations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-1">
              <h3 className="text-2xl font-bold text-jasglynn-gray mb-6">
                Event Venue Rentals
              </h3>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Our versatile event spaces are designed to accommodate any
                  occasion, from intimate gatherings to grand celebrations. With
                  customizable layouts and premium amenities, your event will be
                  nothing short of extraordinary.
                </p>

                <h4 className="text-jasglynn-green font-semibold mt-6">
                  Venue Features:
                </h4>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-jasglynn-green mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Flexible spaces accommodating 20-300 guests</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-jasglynn-green mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>State-of-the-art sound and lighting systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-jasglynn-green mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Catering kitchen and bar facilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-jasglynn-green mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Private parking for up to 100 vehicles</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-jasglynn-green mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Optional event planning and coordination services
                    </span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link href="/event-booking">
                    <Button variant="success" className="py-2 px-6">
                      Book an Event Venue
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Studio Section */}
        <div className="mb-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gradient-to-r from-jasglynn-green/30 to-jasglynn-sky/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-white/80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-jasglynn-gray">
                      Photo Studios
                    </h3>
                    <p className="text-jasglynn-gray">
                      Professional spaces for photographers of all levels
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-jasglynn-gray mb-6">
                Photography Studio Rentals
              </h3>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Our fully-equipped photography studios provide the perfect
                  setting for professional shoots. Whether you&apos;re a seasoned
                  photographer or just starting out, our studios offer
                  everything you need for stunning results.
                </p>

                <h4 className="text-jasglynn-coral font-semibold mt-6">
                  Studio Features:
                </h4>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-jasglynn-coral mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Studios ranging from 500-1,500 sq ft</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-jasglynn-coral mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Professional lighting equipment included</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-jasglynn-coral mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Multiple backdrop options (white, black, green screen)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-jasglynn-coral mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Private dressing rooms and makeup stations</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-jasglynn-coral mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Optional professional photographer services</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link href="/studio-booking">
                    <Button variant="danger" className="py-2 px-6">
                      Book a Photo Studio
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-jasglynn-gray">
              Additional Services
            </h3>
            <div className="w-20 h-1 bg-jasglynn-lime mx-auto my-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Enhance your booking with our premium add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-105">
              <div className="h-48 bg-jasglynn-yellow/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-jasglynn-yellow"
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
              <div className="p-6">
                <h4 className="font-bold text-lg text-jasglynn-gray mb-2">
                  Professional Photography
                </h4>
                <p className="text-gray-600 mb-4">
                  Our skilled photographers can capture your event or provide
                  direction during your studio session.
                </p>
                <p className="text-jasglynn-green font-semibold">
                  Starting at $200/hour
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-105">
              <div className="h-48 bg-jasglynn-coral/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-jasglynn-coral"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-jasglynn-gray mb-2">
                  Event Planning
                </h4>
                <p className="text-gray-600 mb-4">
                  Full-service event planning including catering coordination,
                  decor, and vendor management.
                </p>
                <p className="text-jasglynn-green font-semibold">
                  Starting at $500/event
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-105">
              <div className="h-48 bg-jasglynn-sky/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-jasglynn-sky"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-jasglynn-gray mb-2">
                  Photo Editing
                </h4>
                <p className="text-gray-600 mb-4">
                  Professional photo editing services to enhance your images
                  with color correction, retouching, and more.
                </p>
                <p className="text-jasglynn-green font-semibold">
                  Starting at $75/hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-jasglynn-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-jasglynn-gray">
              Our Pricing
            </h2>
            <div className="w-20 h-1 bg-jasglynn-yellow mx-auto my-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with packages to fit every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Venue Package */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105 border border-jasglynn-green/20">
              <div className="p-6 bg-jasglynn-green text-white text-center">
                <h3 className="text-xl font-bold">Basic Event Package</h3>
                <p className="text-4xl font-bold mt-4">$1,500</p>
                <p className="mt-1 text-white/80">for up to 4 hours</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-green mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Venue space for up to 50 guests
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-green mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Basic sound system</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-green mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Tables and chairs included
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-green mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">On-site coordinator</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-green mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Free parking</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link href="/event-booking">
                    <Button variant="secondary" className="py-2 px-6">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Studio Package */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105 border border-jasglynn-coral/20">
              <div className="p-6 bg-jasglynn-coral text-white text-center">
                <h3 className="text-xl font-bold">
                  Professional Studio Package
                </h3>
                <p className="text-4xl font-bold mt-4">$300</p>
                <p className="mt-1 text-white/80">for 2 hours</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-coral mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      1,000 sq ft studio space
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-coral mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Full lighting setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-coral mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Three backdrop options
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-coral mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Private dressing room</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-coral mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Technical assistance</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link href="/studio-booking">
                    <Button variant="danger" className="py-2 px-6">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105 border border-jasglynn-yellow/20">
              <div className="p-6 bg-jasglynn-yellow text-jasglynn-gray text-center">
                <h3 className="text-xl font-bold">Premium Combined Package</h3>
                <p className="text-4xl font-bold mt-4">$2,000</p>
                <p className="mt-1 text-jasglynn-gray/80">best value</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-yellow mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      4-hour event venue rental
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-yellow mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      2-hour photo studio session
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-yellow mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      1-hour professional photography
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-yellow mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Basic photo editing included
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jasglynn-yellow mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Save 30% compared to booking separately
                    </span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link href="/contact">
                    <Button
                      variant="secondary"
                      className="py-2 px-6 bg-jasglynn-yellow text-jasglynn-gray"
                    >
                      Contact For Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-jasglynn-coral text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book our professional spaces and services today and bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button
                variant="secondary"
                className="text-jasglynn-gray font-medium px-8 py-3"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="secondary"
                className="text-white border-white font-medium px-8 py-3 hover:bg-white hover:text-jasglynn-coral"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
