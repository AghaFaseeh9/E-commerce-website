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
      {/* Header */}
      <div className="flex justify-center gap-5 sm:flex-row flex-col my-[50px]">
        <section className="bg-[#007580] w-[672px] h-[478px] ">
          <div className="py-[27px] px-[35px]">
            <h2 className="text-[32px] font-bold text-[#ffffff]">
              About Us - Comforty
            </h2>
            <p className="text-[#ffffff] text-[18px] py-4">
              At Comforty, we believe that the right chair can transform <br />
              your space and elevate your comfort. Specializing in
              <br /> ergonomic design, premium materials, and modern
              <br /> aesthetics, we craft chairs that seamlessly blend style{" "}
              <br />
              with functionality.{" "}
            </p>
          </div>
          <div className="bg-[#F9F9F926] text-[#FFFFFF] text-[16px] w-[179px] h-[56px] justify-center items-center flex  my-[100px] mx-[35px] transition-transform transform hover:scale-105">
            <Link href="/productspage" passHref>
              <button
                type="button"
                className="text-white font-medium hover:underline"
              >
                View collection
              </button>
            </Link>
          </div>
        </section>
        <section>
          <Image
            src="/Image.png"
            alt="product 1"
            width={619}
            height={478}
            className="transition-all transform group-hover:scale-105 w-[619px] h-[478px]"
          />
        </section>
      </div>
      <h1 className="text-[#272343] font-semibold text-[32px] text-center">
        What makes our Brand Different
      </h1>
      {/* Boards */}
      <div className="flex justify-center gap-6 sm:flex-row mx-[150px] flex-col my-10">
        <section className="text-[#007580] bg-[#F9F9F9] w-[309px] h-[244px] p-[48px] cursor-pointer transition-transform transform hover:scale-105">
          <Image
            src="/vector (1).png"
            alt="product 1"
            width={21}
            height={16.5}
            className="w-[21px] h-[16.5px]"
          />
          <p className="text-[20px] py-2">Next day as standard</p>
          <p className="text-[16px]">
            Order before 3pm and get
            <br /> your order the next day as
            <br /> standard
          </p>
        </section>
        <section className="text-[#007580] bg-[#F9F9F9] w-[309px] h-[244px] p-[48px] cursor-pointer transition-transform transform hover:scale-105">
          <Image
            src="/vector (2).png"
            alt="product 1"
            width={21}
            height={16.5}
            className="w-[21px] h-[16.5px]"
          />
          <p className="text-[20px] py-2">Made by true artisans</p>
          <p className="text-[16px]">
            Handmade crafted goods
            <br /> made with real passion and
            <br /> craftmanship
          </p>
        </section>
        <section className="text-[#007580] bg-[#F9F9F9] w-[309px] h-[244px] p-[48px] cursor-pointer transition-transform transform hover:scale-105">
          <Image
            src="/vector (3).png"
            alt="product 1"
            width={21}
            height={16.5}
            className="w-[21px] h-[16.5px]"
          />
          <p className="text-[20px] py-2">Unbeatable prices</p>
          <p className="text-[16px]">
            For our materials and
            <br /> quality you won’t find better <br />
            prices anywhere
          </p>
        </section>
        <section className="text-[#007580] bg-[#F9F9F9] w-[309px] h-[244px] p-[48px] cursor-pointer transition-transform transform hover:scale-105">
          <Image
            src="/Sprout.png"
            alt="product 1"
            width={21}
            height={16.5}
            className="w-[21px] h-[16.5px]"
          />
          <p className="text-[20px] py-2">Recycled packaging</p>
          <p className="text-[16px]">
            We use 100% recycled to
            <br /> ensure our footprint is more
            <br /> manageable
          </p>
        </section>
      </div>
      <h1 className="text-[28px] sm:text-[32px] md:text-[36px] text-[#272343] font-semibold relative left-[20px] sm:left-[50px] md:left-[270px]">
  Our Popular Products
</h1>

      {/* popular product */}
      <div className="flex flex-col sm:flex-row justify-center items-center my-[30px] gap-[30px]">
        <section className="relative overflow-hidden bg-white shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
          <Image
            src="/Large.png"
            alt="large"
            width={630}
            height={375}
            className="w-[630px] h-[375px] rounded-t-lg transition-transform duration-300 transform hover:scale-105"
          />

          <div className="p-4 text-center">
            <p className="text-[#2A254B] text-[20px] font-semibold transition-all duration-300 hover:text-[#007580]">
              The Poplar Suede Sofa
            </p>
            <p className="text-[#2A254B] text-[18px] mt-2 font-medium transition-all duration-300 hover:text-[#F5813F]">
              $99.00
            </p>
          </div>
        </section>
        <div className="flex gap-5">
          <section className="relative overflow-hidden bg-white shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
            <Image
              src="/Photo.png"
              alt="photo 1"
              width={305}
              height={375}
              className="w-[305px] h-[375px] rounded-t-lg transition-transform duration-300 transform hover:scale-105"
            />
            <div className="p-4 text-center">
              <p className="text-[#2A254B] text-[20px] font-semibold transition-all duration-300 hover:text-[#007580]">
                The Dandy Chair
              </p>
              <p className="text-[#2A254B] text-[18px] mt-2 font-medium transition-all duration-300 hover:text-[#F5813F]">
                $99.00
              </p>
            </div>
          </section>

          <section className="relative overflow-hidden bg-white shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
            <Image
              src="/Photo (1).png"
              alt="photo 2"
              width={305}
              height={375}
              className="w-[305px] h-[375px] rounded-t-lg transition-transform duration-300 transform hover:scale-105"
            />
            <div className="p-4 text-center">
              <p className="text-[#2A254B] text-[20px] font-semibold transition-all duration-300 hover:text-[#007580]">
                The Dandy Chair
              </p>
              <p className="text-[#2A254B] text-[18px] mt-2 font-medium transition-all duration-300 hover:text-[#F5813F]">
                $99.00
              </p>
            </div>
          </section>
        </div>
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
