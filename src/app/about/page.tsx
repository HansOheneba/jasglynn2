"use client";

import React from "react";
// import Image from "next/image";
import Link from "next/link";
import Button from "@/components/atoms/Button";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="bg-jasglynn-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              About JasGlynn Studios
            </h1>
            <p className="mt-4 text-xl max-w-3xl mx-auto">
              Your premier destination for event venue and photography studio
              bookings
            </p>
          </div>
        </div>
      </div>

      {/* Our Story section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-jasglynn-gray mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Founded in 2020, JasGlynn Studios was born from a passion for
                  creating perfect spaces for life&apos;s memorable moments. What
                  started as a small photography studio has grown into a
                  full-service venue and studio booking service.
                </p>
                <p className="mt-4">
                  Our founder, Jasmine Glenn, combined her background in
                  photography and event planning to create spaces that are both
                  functional and beautiful. With an eye for detail and a
                  commitment to excellence, we&apos;ve hosted hundreds of successful
                  events and photo shoots.
                </p>
                <p className="mt-4">
                  Today, we offer multiple venue spaces and fully-equipped
                  photography studios to accommodate everything from intimate
                  gatherings to large corporate events.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-jasglynn-gray/20 flex items-center justify-center">
                  <p className="text-center text-gray-600">
                    [Placeholder for founder image]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values section */}
      <div className="py-16 bg-jasglynn-sky/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-jasglynn-gray">
              Our Values
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-jasglynn-green/10 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-jasglynn-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-jasglynn-gray mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in every detail, from the cleanliness
                of our spaces to the responsiveness of our team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-jasglynn-lime/10 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-jasglynn-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-jasglynn-gray mb-2">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                Your vision is our priority. We go above and beyond to ensure
                your event or photoshoot is exactly as you imagined.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-jasglynn-coral/10 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-jasglynn-coral"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-jasglynn-gray mb-2">
                Creativity
              </h3>
              <p className="text-gray-600">
                We embrace creativity and innovation in our spaces, equipment,
                and solutions to make your vision come to life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-jasglynn-gray">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind JasGlynn Studios
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team member 1 */}
            <div className="text-center">
              <div className="relative h-64 rounded-lg overflow-hidden bg-jasglynn-green/10 mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-jasglynn-gray">[Team member photo]</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-jasglynn-gray">
                Jasmine Glenn
              </h3>
              <p className="text-jasglynn-green">Founder & CEO</p>
            </div>

            {/* Team member 2 */}
            <div className="text-center">
              <div className="relative h-64 rounded-lg overflow-hidden bg-jasglynn-yellow/10 mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-jasglynn-gray">[Team member photo]</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-jasglynn-gray">
                Robert Chen
              </h3>
              <p className="text-jasglynn-green">Lead Photographer</p>
            </div>

            {/* Team member 3 */}
            <div className="text-center">
              <div className="relative h-64 rounded-lg overflow-hidden bg-jasglynn-coral/10 mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-jasglynn-gray">[Team member photo]</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-jasglynn-gray">
                Sarah Williams
              </h3>
              <p className="text-jasglynn-green">Event Coordinator</p>
            </div>

            {/* Team member 4 */}
            <div className="text-center">
              <div className="relative h-64 rounded-lg overflow-hidden bg-jasglynn-lime/10 mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-jasglynn-gray">[Team member photo]</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-jasglynn-gray">
                James Thompson
              </h3>
              <p className="text-jasglynn-green">Studio Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-jasglynn-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Book Your Event or Session?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover why hundreds of clients choose JasGlynn Studios for their
            important moments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/event-booking">
              <Button
                variant="secondary"
                className="text-jasglynn-gray font-medium px-8 py-3"
              >
                Book an Event Venue
              </Button>
            </Link>
            <Link href="/studio-booking">
              <Button
                variant="success"
                className="text-jasglynn-gray font-medium px-8 py-3"
              >
                Book a Photo Studio
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="danger"
                className="text-white font-medium px-8 py-3"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
