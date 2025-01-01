"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#272343] text-white">
        {/* Navbar - Top Part */}
        <div className="flex justify-between items-center bg-[#272343] text-[#ffffff] h-[45px] text-[13px] px-[20px] lg:px-[300px] py-[10px] shadow-md">
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/Group.png" alt="logo" width={24} height={12} />
            <p className="text-sm font-medium">
              Free shipping on all orders over $50
            </p>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <p className="flex items-center gap-1 opacity-80 hover:opacity-100 text-[13px] font-semibold cursor-pointer  hover:text-[#007580] hover:underline transition-colors duration-300">
              Eng
              <Image
                src="/Group (1).png"
                alt="language icon"
                width={14}
                height={14}
                className=" hover:text-[#007580] hover:underline transition-colors duration-300"
              />
            </p>
            <Link href="/faqs" passHref>
              <p className="opacity-80 hover:opacity-100 text-[13px] font-semibold cursor-pointer  hover:text-[#007580] hover:underline transition-colors duration-300">
                Faqs
              </p>
            </Link>
            <Link href="/contactuspage" passHref>
              <p className="flex items-center gap-1 opacity-80 hover:opacity-100 text-[13px] font-semibold cursor-pointer  hover:text-[#007580] hover:underline transition-colors duration-300">
                <Image
                  src="/alert-circle 1.png"
                  alt="help icon"
                  width={18}
                  height={18}
                  className=" hover:text-[#007580] hover:underline transition-colors duration-300"
                />
                Need Help
              </p>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button
              className="text-white text-xl focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#272343] text-white text-sm p-4 space-y-4 shadow-md">
            <a
              href="/"
              className="block text-white  hover:text-[#007580] hover:underline transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#featured-product"
              className="block text-white  hover:text-[#007580] hover:underline transition-colors duration-300"
            >
              Shop
            </a>
            <a
              href="/productspage"
              className="block text-white  hover:text-[#007580] hover:underline transition-colors duration-300"
            >
              Products
            </a>
            <a
              href="/productpage"
              className="block text-white  hover:text-[#007580] hover:underline transition-colors duration-300"
            >
              Pages
            </a>
            <a
              href="/Aboutpage"
              className="block text-white  hover:text-[#007580] hover:underline transition-colors duration-300"
            >
              About
            </a>
            <hr className="border-t border-white opacity-30" />
            <p className="block text-white  hover:text-[#007580] hover:underline transition-colors duration-300">
              Eng
            </p>
            <Link href="/faqs" passHref>
              <p className="opacity-80 hover:opacity-100 text-[13px] font-semibold cursor-pointer  hover:text-[#007580] hover:underline transition-colors duration-300">
                Faqs
              </p>
            </Link>
            <Link href="/contactuspage" passHref>
              <p className="block text-white  hover:text-[#007580] hover:underline transition-colors duration-300">
                Need Help
              </p>
            </Link>
          </div>
        )}

        {/* Middle Section */}
        <div className="bg-[#F0F2F3] flex w-full h-[84px] justify-between px-[20px] lg:px-[300px] py-[20px]">
          <div>
            <Image src="/Logo (1).png" alt="Logo" width={166} height={40} />
          </div>
          <Link href="/cartpage">
            <div className="flex bg-[#FFFFFF] w-[120px] h-[44px] justify-center items-center gap-[12px] py-[11px] px-[16px]  rounded-[10px] transition-all duration-300 hover:shadow-[0px_4px_15px_0px_rgba(0,0,0,0.4)] hover:bg-gradient-to-b from-[#F0F0F0] to-[#D0D0D0]">
              <Image src="/Buy 3.png" alt="cart logo" width={22} height={22} />
              <p className="text-[#272343]">Cart</p>
              <Image src="/No.png" alt="no logo" width={20} height={20} />
            </div>
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="hidden lg:flex font-medium justify-between px-[300px] bg-[#FFFFFF] w-full h-[74px] py-[14px]">
          <div className="text-[#636270]">
            <ul className="flex gap-[32px]">
              <li>
                <a
                  href="/"
                  className="text-[#636270] hover:text-[#007580] hover:underline transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#featured-product"
                  className="text-[#636270] hover:text-[#007580] hover:underline transition-colors duration-300"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/productspage"
                  className="text-[#636270] hover:text-[#007580] hover:underline transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/productpage"
                  className="text-[#636270] hover:text-[#007580] hover:underline transition-colors duration-300"
                >
                  Pages
                </a>
              </li>
              <li>
                <a
                  href="/Aboutpage"
                  className="text-[#636270] hover:text-[#007580] hover:underline transition-colors duration-300"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[#272343]">
              <span className="text-[#636270]">Contact:</span> (808) 555-0111
            </p>
          </div>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center py-10 px-4 md:px-20 lg:mx-[300px] ">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 p-10 relative lg:bottom-12">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 text-center md:text-left mb-8">
            For More Information About Our Products & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="text-xl text-[#029FAE]">📍</span>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-xl text-[#029FAE]">📞</span>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>Mobile: +1(84) 546-6789</p>
                <p>Hotline: +1(84) 546-6789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-xl text-[#029FAE]">🕒</span>
              <div>
                <h4 className="font-semibold">Working Time</h4>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 relative lg:top-[65px]">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-[1px] h-[75px] border-[#9F9F9F] rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                placeholder="   Abc"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-[1px] h-[75px] border-[#9F9F9F] rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                placeholder="   abc@def.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full border-[1px] h-[75px] border-[#9F9F9F] rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                placeholder="   This is an optional"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border-[1px] border-[#9F9F9F] rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                placeholder="   Hi! I’d like to ask about"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-[237px] h-[55px] bg-[#029FAE] text-white py-2 px-4 rounded-md hover:bg-[#3b9098] focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-10 lg:px-20 mt-10 md:mt-16">
        <Image
          src="/Frame 161.png"
          alt="frame"
          width={1320}
          height={270}
          className="w-full h-auto"
        />
      </div>

      {/* footer */}
      <footer className="flex flex-col lg:flex-row justify-between p-6 my-8 relative overflow-hidden mx-4 lg:mx-[150px] gap-8">
        <div className="flex flex-col mt-[150px] lg:mt-0 mb-6">
          <Image src="/Logo (1).png" alt="Logo" width={168} height={40} />
          <div className="text-[#272343] opacity-[60%] mt-4">
            <p>Vivamus tristique odio sit amet velit semper,</p>
            <p>eu posuere turpis interdum. Cras egestas purus</p>
          </div>
          <div className="flex justify-start py-4 gap-[12px] mt-4">
            <Image
              src="/Facebook---Negative 2.png"
              alt="Facebook Logo"
              width={16}
              height={16}
              className="transition-all transform hover:rotate-12 hover:text-[#F5813F] hover:scale-125 ease-in-out duration-500"
            />
            <Image
              src="/Twitter---Negative 1.png"
              alt="Twitter Logo"
              width={16}
              height={16}
              className="transition-all transform hover:rotate-12 hover:text-[#F5813F] hover:scale-125 ease-in-out duration-500"
            />
            <Image
              src="/Instagram 1.png"
              alt="Instagram Logo"
              width={16}
              height={16}
              className="transition-all transform hover:rotate-12 hover:text-[#F5813F] hover:scale-125 ease-in-out duration-500"
            />
            <Image
              src="/Pinterest---Negative 1.png"
              alt="Pinterest Logo"
              width={16}
              height={16}
              className="transition-all transform hover:rotate-12 hover:text-[#F5813F] hover:scale-125 ease-in-out duration-500"
            />
            <Image
              src="/Youtube---Negative 1.png"
              alt="YouTube Logo"
              width={16}
              height={16}
              className="transition-all transform hover:rotate-12 hover:text-[#F5813F] hover:scale-125 ease-in-out duration-500"
            />
          </div>
        </div>

        <div className="flex flex-col mt-6 lg:mt-0">
          <h1 className="text-[#9A9CAA] text-[14px] font-medium">CATEGORY</h1>
          <p>
            <span className="hover:text-[#007580] hover:underline transition-colors duration-300">
              Sofa
            </span>
          </p>
          <p>
            <span className="hover:text-[#007580] hover:underline transition-colors duration-300">
              Armchair
            </span>
          </p>
          <p>
            <span className="hover:text-[#007580] hover:underline transition-colors duration-300">
              Wing Chair
            </span>
          </p>
          <p>
            <span className="hover:text-[#007580] hover:underline transition-colors duration-300">
              Desk Chair
            </span>
          </p>
          <p>
            <span className="hover:text-[#007580] hover:underline transition-colors duration-300">
              Wooden Chair
            </span>
          </p>
          <p>
            <span className="hover:text-[#007580] hover:underline transition-colors duration-300">
              Park Bench
            </span>
          </p>
        </div>

        <div className="flex flex-col mt-6 lg:mt-0">
          <h1 className="text-[#9A9CAA] text-[14px] font-medium">SUPPORT</h1>
          <p>
            <span className="hover:text-[#007580] hover:underline transition-colors duration-300">
              Help and Support
            </span>
          </p>
          <p>
            <span className="hover:text-[#007580] hover:underline transition-colors duration-300">
              Terms and Conditions
            </span>
          </p>
          <p>
            <span className="hover:text-[#007580] hover:underline transition-colors duration-300">
              Privacy Policy
            </span>
          </p>
          <p>
            <span className="hover:text-[#007580] hover:underline transition-colors duration-300">
              Help
            </span>
          </p>
        </div>

        <div className="flex flex-col mt-6 lg:mt-0">
          <h1 className="text-[#9A9CAA] text-[14px] font-medium">NEWSLETTER</h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="email"
              name="search-email"
              id="email"
              placeholder="Your email"
              className="border border-[#E1E3E5] px-2 py-2 w-full lg:w-[285px] h-[45px] transition-all ease-in-out duration-300 hover:scale-105"
            />
            <input
              type="button"
              value="Subscribe"
              className="bg-[#029FAE] font-semibold w-full lg:w-[127px] h-[46px] rounded-[8px] text-[#ffffff] text-[18px] mt-4 lg:mt-0 transition-all ease-in-out duration-300 transform hover:scale-110"
            />
          </div>
          <p className="text-[#272343] opacity-[60%] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-[#272343] opacity-[60%]">
            Nullam tincidunt erat enim.
          </p>
        </div>
      </footer>

      <div className="group-hover:scale-105 transition-transform duration-500 mt-8">
        <Image src="/Frame 69.png" alt="Footer Logo" width={1920} height={75} />
      </div>
    </div>
  );
}
