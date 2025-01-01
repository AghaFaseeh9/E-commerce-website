"use client";
import Link from "next/link";
import Image from "next/image";
import {useState } from "react";

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
            <Link
              href="/"
              className="block text-white  hover:text-[#007580] hover:underline transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#featured-products"
              className="block text-white  hover:text-[#007580] hover:underline transition-colors duration-300"
            >
              Shop
            </Link>
            <Link
              href="/productspage"
              className="block text-white  hover:text-[#007580] hover:underline transition-colors duration-300"
            >
              Products
            </Link>
            <Link
              href="/productspage"
              className="block text-white  hover:text-[#007580] hover:underline transition-colors duration-300"
            >
              Pages
            </Link>
            <Link
              href="/Aboutpage"
              className="block text-white  hover:text-[#007580] hover:underline transition-colors duration-300"
            >
              About
            </Link>
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
            </p></Link>
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
                <Link
                  href="/"
                  className="text-[#636270] hover:text-[#007580] hover:underline transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#featured-products"
                  className="text-[#636270] hover:text-[#007580] hover:underline transition-colors duration-300"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/productspage"
                  className="text-[#636270] hover:text-[#007580] hover:underline transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/productspage"
                  className="text-[#636270] hover:text-[#007580] hover:underline transition-colors duration-300"
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/Aboutpage"
                  className="text-[#636270] hover:text-[#007580] hover:underline transition-colors duration-300"
                >
                  About
                </Link>
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

      {/* Main Product*/}
      <main className="px-6 py-8 lg:px-10 lg:py-12 lg:flex lg:items-start lg:space-x-16">
        {/* Product Image */}
        <div className="lg:w-1/2 mx-auto lg:mx-[300px] mb-6 lg:mb-0">
          <img
            src="/Image (5).png"
            alt="Library Stool Chair"
            className="rounded-lg w-full h-auto shadow-md transition-transform transform hover:scale-105 duration-500 ease-in-out"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 relative lg:right-[250px]">
          <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-[#272343] leading-tight mb-6">
            Library Stool <br />
            Chair
          </h1>

          <p className="text-[#FFFFFF] text-xl flex justify-center items-center font-semibold mb-4 w-[144px] h-[44px] bg-[#029FAE] rounded-[100px] hover:bg-[#027F8E] transition-colors duration-300">
            $99 USD
          </p>

          <p className="w-full h-[1px] bg-[#D9D9D9] my-[40px]"></p>

          <p className="text-[#272343] opacity-[60%] text-[20px] sm:text-[22px] leading-relaxed my-[35px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br /> elit. Nullam tincidunt erat enim. Lorem ipsum dolor
            <br /> sit amet, consectetur adipiscing.
          </p>

          <button className="flex justify-center items-center gap-2 bg-[#029FAE] w-[212px] h-[63px] text-white text-lg font-bold px-8 py-3 rounded-md hover:bg-[#027F8E] transition-colors duration-300">
            <Image
              src="/Group (3).png"
              alt="cart logo"
              width={22}
              height={22}
              className="w-[22px] h-[22px]"
            />
            Add To Cart
          </button>
        </div>
      </main>

      {/* Featured Products */}
      <h1  id="featured-products" className="font-bold text-[33px] uppercase mx-[20px] sm:mx-[100px] lg:mx-[200px] text-center sm:text-left">
        Featured Products
      </h1>

      <div className="flex gap-10 justify-center sm:px-10 flex-wrap my-[40px] sm:my-[60px]">
        {/* Product Card 1 */}
        <Link href="/subpage1" passHref>
          <div className="w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] mb-6 sm:mb-0 group hover:scale-105 transition-all">
            <Image
              src="/Image (8).png"
              alt="product 1"
              width={312}
              height={312}
              className="rounded-lg w-full h-auto transition-all group-hover:scale-105 transform duration-300 ease-in-out"
            />
            <div className="flex justify-between items-center m-4">
              <p className="text-[#272343] text-[16px]">Library Stool Chair</p>
              <p className="font-bold text-[14px]">$99</p>
            </div>
          </div>
        </Link>
        {/* Product Card 2 */}
        <Link href="/subpage2" passHref>
          <div className="w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] mb-6 sm:mb-0 relative group hover:scale-105 transition-all">
            <Image
              src="/Image.png"
              alt="product 2"
              width={312}
              height={312}
              className="rounded-lg w-full sm:h-[270px] h-[200px] transition-all group-hover:scale-105 transform duration-300 ease-in-out"
            />
            <div className="flex justify-between items-center m-4">
              <p className="text-[#272343] text-[16px]">Library Stool Chair</p>
              <p className="font-bold text-[14px]">$99</p>
            </div>
          </div>
        </Link>
        {/* Product Card 3 */}
        <Link href="/subpage3" passHref>
          <div className="w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] mb-6 relative sm:bottom-5sm:mb-0 group hover:scale-105 transition-all">
            <Image
              src="/Image (7).png"
              alt="product 3"
              width={312}
              height={312}
              className="rounded-lg w-full h-auto transition-all group-hover:scale-105 transform duration-300 ease-in-out"
            />
            <div className="flex justify-between items-center m-4">
              <p className="text-[#272343] text-[16px]">Library Stool Chair</p>
              <p className="font-bold text-[14px]">$99</p>
            </div>
          </div>
        </Link>
        {/* Product Card 4 */}
        <Link href="/subpage4" passHref>
          <div className="w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] mb-6 sm:mb-0 group hover:scale-105 transition-all">
            <Image
              src="/Image (2).png"
              alt="product 4"
              width={312}
              height={312}
              className="rounded-lg w-full h-auto transition-all group-hover:scale-105 transform duration-300 ease-in-out"
            />
            <div className="flex justify-between items-center m-4">
              <p className="text-[#272343] text-[16px]">Library Stool Chair</p>
              <p className="font-bold text-[14px]">$99</p>
            </div>
          </div>
        </Link>
        {/* Product Card 5 */}
        <Link href="/subpage5" passHref>
          <div className="w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] mb-6 sm:mb-0 group hover:scale-105 transition-all">
            <Image
              src="/Image (5).png"
              alt="product 5"
              width={312}
              height={312}
              className="rounded-lg w-full h-auto transition-all group-hover:scale-105 transform duration-300 ease-in-out"
            />
            <div className="flex justify-between items-center m-4">
              <p className="text-[#272343] text-[16px]">Library Stool Chair</p>
              <p className="font-bold text-[14px]">$99</p>
            </div>
          </div>
        </Link>
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
      