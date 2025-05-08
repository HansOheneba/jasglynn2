import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jasglynn-gray text-white">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-jasglynn-green py-12 px-4 sm:px-6 lg:px-8 rounded-t-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Stay updated with our latest offerings, events, and special
              promotions
            </p>
            <form className="flex flex-col sm:flex-row justify-center gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-jasglynn-yellow focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-jasglynn-yellow text-jasglynn-gray font-medium px-6 py-3 rounded-md hover:bg-jasglynn-yellow/90 transition-colors shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer */}
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and description */}
            <div className="md:col-span-4">
              <Link href="/" className="flex items-center mb-6">
                <div className="relative h-12 w-12 mr-3 overflow-hidden rounded-full border-2 border-jasglynn-yellow">
                  <Image
                    src="/assets/jasLogo.png"
                    alt="JasGlynn Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-white font-bold text-xl leading-none block">
                    JasGlynn
                  </span>
                  <span className="text-jasglynn-yellow text-xs tracking-wider block">
                    STUDIOS
                  </span>
                </div>
              </Link>
              <p className="text-gray-300 mb-6">
                Professional photography studios and premium event venues for
                all your special moments. Creating memories has never been
                easier.
              </p>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-jasglynn-gray-light hover:bg-jasglynn-yellow/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-5 w-5 text-jasglynn-yellow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-jasglynn-gray-light hover:bg-jasglynn-coral/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5 text-jasglynn-coral"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-jasglynn-gray-light hover:bg-jasglynn-sky/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-5 w-5 text-jasglynn-sky"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-jasglynn-gray-light hover:bg-jasglynn-lime/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5 text-jasglynn-lime"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-jasglynn-yellow font-semibold text-lg mb-4">
                Explore
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-jasglynn-yellow transition-colors flex items-center"
                  >
                    <svg
                      className="h-3 w-3 mr-2 text-jasglynn-yellow"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-jasglynn-yellow transition-colors flex items-center"
                  >
                    <svg
                      className="h-3 w-3 mr-2 text-jasglynn-yellow"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-jasglynn-yellow transition-colors flex items-center"
                  >
                    <svg
                      className="h-3 w-3 mr-2 text-jasglynn-yellow"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-jasglynn-yellow transition-colors flex items-center"
                  >
                    <svg
                      className="h-3 w-3 mr-2 text-jasglynn-yellow"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Booking Options */}
            <div className="md:col-span-2">
              <h3 className="text-jasglynn-yellow font-semibold text-lg mb-4">
                Bookings
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/event-booking"
                    className="text-gray-300 hover:text-jasglynn-yellow transition-colors flex items-center"
                  >
                    <svg
                      className="h-3 w-3 mr-2 text-jasglynn-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Event Venue
                  </Link>
                </li>
                <li>
                  <Link
                    href="/studio-booking"
                    className="text-gray-300 hover:text-jasglynn-yellow transition-colors flex items-center"
                  >
                    <svg
                      className="h-3 w-3 mr-2 text-jasglynn-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Photo Studio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/dashboard"
                    className="text-gray-300 hover:text-jasglynn-yellow transition-colors flex items-center"
                  >
                    <svg
                      className="h-3 w-3 mr-2 text-jasglynn-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Admin Portal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4">
              <h3 className="text-jasglynn-yellow font-semibold text-lg mb-4">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-jasglynn-gray-light rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-jasglynn-lime"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 leading-tight">
                      123 Photography Street
                    </p>
                    <p className="text-gray-300 leading-tight">
                      Photo City, CA 90210
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 bg-jasglynn-gray-light rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-jasglynn-coral"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">(123) 456-7890</p>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 bg-jasglynn-gray-light rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-jasglynn-sky"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">contact@jasglynn.com</p>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 bg-jasglynn-gray-light rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-jasglynn-yellow"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 leading-tight">
                      Monday - Friday: 9am - 6pm
                    </p>
                    <p className="text-gray-300 leading-tight">
                      Saturday: 10am - 4pm, Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between text-sm">
            <p className="text-center md:text-left text-gray-400">
              &copy; {currentYear} JasGlynn Photography Studios. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-jasglynn-yellow"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-jasglynn-yellow"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-jasglynn-yellow"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
