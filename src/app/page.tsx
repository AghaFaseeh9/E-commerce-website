"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
              href="#featured-product"
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
              href="/productpage"
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
                <Link
                  href="/"
                  className="text-[#636270] hover:text-[#007580] hover:underline transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#featured-product"
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

      {/* Header */}
      <div className="h-[850px] bg-[#F0F2F3] mx-auto lg:mx-[300px] flex flex-col lg:flex-row justify-between items-center px-5 sm:px-10 py-10">
        {/* Left Section */}
        <div className="text-center lg:text-left mb-10 lg:mb-0 max-w-full lg:max-w-[557px]">
          <h3 className="text-[#272343] font-normal text-[14px] sm:text-[16px] mb-2">
            Welcome to Chairy
          </h3>
          <h1 className="text-[#272343] font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] leading-tight mb-6">
            Best Furniture Collection For Your Interior.
          </h1>
          <div className="w-full lg:w-[177px] h-[52px] flex items-center justify-center lg:justify-start">
            <Link href="/productspage" passHref>
              <button
                className="bg-[#029FAE] w-full lg:w-[177px] h-[52px] rounded-[8px] text-[#ffffff] text-[16px] sm:text-[17.6px] font-medium flex items-center gap-2 justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#029FAE]"
                type="button"
              >
                Shop Now
                <Image src="/Line.png" alt="logo" width={24} height={24} />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-auto flex justify-center mt-10 lg:mt-0">
          <Image
            src="/Product Image.png"
            alt="Product"
            width={434}
            height={584}
            className="object-contain w-[70%] sm:w-[50%] md:w-[40%] lg:w-auto"
          />
        </div>
      </div>
      {/* Logos Section */}
      <div className="flex flex-wrap justify-between my-14 px-4 sm:px-8 md:px-16 lg:px-[300px]">
        {[
          { src: "/Logo (2).png", width: 85, height: 87 },
          { src: "/Logo (3).png", width: 107, height: 109 },
          { src: "/Logo (4).png", width: 135, height: 139 },
          { src: "/Logo (5).png", width: 63, height: 65 },
          { src: "/Logo (6).png", width: 98, height: 101 },
          { src: "/Logo (7).png", width: 113, height: 115 },
          { src: "/Logo (8).png", width: 84, height: 87 },
        ].map((logo, index) => (
          <div
            key={index}
            className="transition-transform transform hover:scale-110 hover:rotate-3 hover:shadow-lg hover:cursor-pointer mb-6 sm:mb-4 md:mb-6"
          >
            <Image
              src={logo.src}
              alt={`logo-${index + 1}`}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <h1
        id="featured-product"
        className="text-[#272343] relative text-2xl sm:text-3xl lg:text-[32px] font-semibold px-4 sm:px-7 text-center sm:text-left sm:left-[270px] mb-6"
      >
        Featured Products
      </h1>
      <div className="flex gap-10 justify-center px-7 sm:px-10 flex-wrap">
        {/* Product Card 1 */}
        <Link href="/firstpage" passHref>
          <div className="w-full sm:w-[312px] h-[377px] relative group">
            <Image
              src="/Image.png"
              alt="product 1"
              width={312}
              height={312}
              className="h-[312px] w-[312px] transition-all transform group-hover:scale-105"
            />
            <p className="w-[49px] h-[26px] rounded-[4px] bg-[#01AD5A] absolute top-4 left-4 text-center text-[#ffffff] font-medium">
              New
            </p>
            <p className="text-[#007580] mt-4 font-semibold text-lg group-hover:text-[#029FAE]">
              Library Stool Chair
            </p>
            <p className="font-medium text-xl mt-1">$20</p>
            <div className="w-[44px] h-[44px] bg-[#029FAE] rounded-[8px] flex items-center justify-center absolute bottom-[-8px] right-[5px] group-hover:bg-[#01AD5A] transition-all">
              <Image
                src="/Group (3).png"
                alt="cart icon"
                width={18.5}
                height={13.49}
                className="transition-transform transform group-hover:scale-110"
              />
            </div>
          </div>
        </Link>
        {/* Product Card 2 */}
        <Link href="/secondpage" passHref>
          <div className="w-full sm:w-[312px] h-[377px] relative group">
            <Image
              src="/Image (2).png"
              alt="product 2"
              width={312}
              height={312}
              className="transition-all transform group-hover:scale-105"
            />
            <p className="w-[49px] h-[26px] rounded-[4px] bg-[#F5813F] absolute top-4 left-4 text-center text-[#ffffff] font-medium">
              Sale
            </p>
            <p className="text-[#007580] mt-4 font-semibold text-lg group-hover:text-[#F5813F]">
              Library Stool Chair
            </p>
            <p className="font-medium text-xl mt-1">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-[8px] flex items-center justify-center absolute bottom-[-8px] right-[5px] group-hover:bg-[#F5813F] transition-all">
              <Image
                src="/Buy 3.png"
                alt="cart icon"
                width={22}
                height={22}
                className="transition-transform transform group-hover:scale-110"
              />
            </div>
          </div>
        </Link>
        {/* Product Card 3 */}
        <Link href="/thirdpage" passHref>
          <div className="w-full sm:w-[312px] h-[377px] relative group">
            <Image
              src="/Image (3).png"
              alt="product 3"
              width={312}
              height={312}
              className="transition-all transform group-hover:scale-105"
            />
            <p className="text-[#007580] mt-4 font-semibold text-lg group-hover:text-[#F5813F]">
              Library Stool Chair
            </p>
            <p className="font-medium text-xl mt-1">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-[8px] flex items-center justify-center absolute bottom-[-8px] right-4 group-hover:bg-[#F5813F] transition-all">
              <Image
                src="/Buy 3.png"
                alt="cart icon"
                width={22}
                height={22}
                className="transition-transform transform group-hover:scale-110"
              />
            </div>
          </div>
        </Link>
        {/* Product Card 4 */}
        <Link href="/fourthpage" passHref>
          <div className="w-full sm:w-[312px] h-[377px] relative group">
            <Image
              src="/Image (4).png"
              alt="product 3"
              width={312}
              height={312}
              className="transition-all transform group-hover:scale-105"
            />
            <p className="text-[#007580] mt-4 font-semibold text-lg group-hover:text-[#F5813F]">
              Library Stool Chair
            </p>
            <p className="font-medium text-xl mt-1">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-[8px] flex items-center justify-center absolute bottom-[-8px] right-4 group-hover:bg-[#F5813F] transition-all">
              <Image
                src="/Buy 3.png"
                alt="cart icon"
                width={22}
                height={22}
                className="transition-transform transform group-hover:scale-110"
              />
            </div>
          </div>
        </Link>
      </div>

      <h1 className="text-[#272343] text-2xl sm:text-3xl lg:text-[32px] font-semibold text-center sm:text-left p-4 sm:p-6 lg:p-[50px] relative sm:left-[270px] my-5">
        Top Categories
      </h1>
      <div className="flex sm:flex-row flex-col justify-center  items-center gap-6 sm:gap-8 px-4 sm:px-10 lg:px-[300px]">
        {/* Category 1 */}
        <div className="relative w-full sm:w-[300px] lg:w-[424px] group">
          <Image
            src="/Image (5).png"
            alt="Wing Chair"
            width={424}
            height={424}
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 w-0 bg-[#000000B2] p-4 sm:p-6 text-white group-hover:w-full transition-all duration-500 ease-in-out">
            <p className="text-lg sm:text-xl font-semibold leading-tight">
              Wing Chair
            </p>
            <p className="text-sm sm:text-base opacity-80">3,584 Products</p>
          </div>
        </div>
        {/* Category 2 */}
        <div className="relative w-full sm:w-[300px] lg:w-[424px] group">
          <Image
            src="/Image (6).png"
            alt="Wooden Chair"
            width={424}
            height={424}
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 w-0 bg-[#000000B2] p-4 sm:p-6 text-white group-hover:w-full transition-all duration-500 ease-in-out">
            <p className="text-lg sm:text-xl font-medium">Wooden Chair</p>
            <p className="text-sm sm:text-base opacity-80">157 Products</p>
          </div>
        </div>
        {/* Category 3 */}
        <div className="relative w-full sm:w-[300px] lg:w-[424px] group">
          <Image
            src="/Image (7).png"
            alt="Desk Chair"
            width={424}
            height={424}
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 w-0 bg-[#000000B2] p-4 sm:p-6 text-white group-hover:w-full transition-all duration-500 ease-in-out">
            <p className="text-lg sm:text-xl font-medium">Desk Chair</p>
            <p className="text-sm sm:text-base opacity-80">154 Products</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center p-[200px]">
        {/* Left Section */}
        <div className="w-[648px] relative">
          <Image
            src="/Image (3).png"
            alt="Main Image"
            width={648}
            height={648}
          />
          <p className="text-[30px] -rotate-90 relative bottom-[380px] right-[370px]">
            EXPLORE NEW AND POPULAR STYLES
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-[24px] ml-[24px] pb-12">
          <Image
            src="/Image (4).png"
            alt="Chair Image 1"
            width={312}
            height={312}
            className="w-[312px] h-[312px] rounded-lg"
          />
          <Image
            src="/Image.png"
            alt="Chair Image 2"
            width={312}
            height={312}
            className="w-[312px] h-[312px] rounded-lg"
          />
          <Image
            src="/card.png"
            alt="Chair Image 3"
            width={312}
            height={312}
            className="w-[312px] h-[312px] rounded-lg"
          />
          <Image
            src="/Image.png"
            alt="Chair Image 4"
            width={312}
            height={312}
            className="w-[312px] h-[312px] rounded-lg"
          />
        </div>
      </div>
      <h1 className="text-[#272343] text-[32px] font-semibold flex justify-center p-[50px]">
        Ours Products
      </h1>
      <div className="flex gap-10 justify-center px-7 sm:px-10 flex-wrap">
        {/* Product Card 1 */}
        <Link href="/firstpage" passHref>
          <div className="w-full sm:w-[312px] h-[377px] relative group">
            <Image
              src="/Image.png"
              alt="product 1"
              width={312}
              height={312}
              className="h-[312px] w-[312px] transition-all transform group-hover:scale-105"
            />
            <p className="w-[49px] h-[26px] rounded-[4px] bg-[#01AD5A] absolute top-4 left-4 text-center text-[#ffffff] font-medium">
              New
            </p>
            <p className="text-[#007580] mt-4 font-semibold text-lg group-hover:text-[#029FAE]">
              Library Stool Chair
            </p>
            <p className="font-medium text-xl mt-1">$20</p>
            <div className="w-[44px] h-[44px] bg-[#029FAE] rounded-[8px] flex items-center justify-center absolute bottom-[-8px] right-[5px] group-hover:bg-[#01AD5A] transition-all">
              <Image
                src="/Group (3).png"
                alt="cart icon"
                width={18.5}
                height={13.49}
                className="transition-transform transform group-hover:scale-110"
              />
            </div>
          </div>
        </Link>
        {/* Product Card 2 */}
        <Link href="/secondpage" passHref>
          <div className="w-full sm:w-[312px] h-[377px] relative group">
            <Image
              src="/Image (2).png"
              alt="product 2"
              width={312}
              height={312}
              className="transition-all transform group-hover:scale-105"
            />
            <p className="w-[49px] h-[26px] rounded-[4px] bg-[#F5813F] absolute top-4 left-4 text-center text-[#ffffff] font-medium">
              Sale
            </p>
            <p className="text-[#007580] mt-4 font-semibold text-lg group-hover:text-[#F5813F]">
              Library Stool Chair
            </p>
            <p className="font-medium text-xl mt-1">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-[8px] flex items-center justify-center absolute bottom-[-8px] right-[5px] group-hover:bg-[#F5813F] transition-all">
              <Image
                src="/Buy 3.png"
                alt="cart icon"
                width={22}
                height={22}
                className="transition-transform transform group-hover:scale-110"
              />
            </div>
          </div>
        </Link>
        {/* Product Card 3 */}
        <Link href="/thirdpage" passHref>
          <div className="w-full sm:w-[312px] h-[377px] relative group">
            <Image
              src="/Image (3).png"
              alt="product 3"
              width={312}
              height={312}
              className="transition-all transform group-hover:scale-105"
            />
            <p className="text-[#007580] mt-4 font-semibold text-lg group-hover:text-[#F5813F]">
              Library Stool Chair
            </p>
            <p className="font-medium text-xl mt-1">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-[8px] flex items-center justify-center absolute bottom-[-8px] right-4 group-hover:bg-[#F5813F] transition-all">
              <Image
                src="/Buy 3.png"
                alt="cart icon"
                width={22}
                height={22}
                className="transition-transform transform group-hover:scale-110"
              />
            </div>
          </div>
        </Link>
        {/* Product Card 4 */}
        <Link href="/fourthpage" passHref>
          <div className="w-full sm:w-[312px] h-[377px] relative group">
            <Image
              src="/Image (4).png"
              alt="product 3"
              width={312}
              height={312}
              className="transition-all transform group-hover:scale-105"
            />
            <p className="text-[#007580] mt-4 font-semibold text-lg group-hover:text-[#F5813F]">
              Library Stool Chair
            </p>
            <p className="font-medium text-xl mt-1">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-[8px] flex items-center justify-center absolute bottom-[-8px] right-4 group-hover:bg-[#F5813F] transition-all">
              <Image
                src="/Buy 3.png"
                alt="cart icon"
                width={22}
                height={22}
                className="transition-transform transform group-hover:scale-110"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex gap-10 justify-center px-7 sm:px-10 flex-wrap my-8">
        {/* Product Card 5 */}
        <Link href="/firstpage" passHref>
          <div className="w-full sm:w-[312px] h-[377px] relative group">
            <Image
              src="/Image.png"
              alt="product 1"
              width={312}
              height={312}
              className="h-[312px] w-[312px] transition-all transform group-hover:scale-105"
            />
            <p className="w-[49px] h-[26px] rounded-[4px] bg-[#01AD5A] absolute top-4 left-4 text-center text-[#ffffff] font-medium">
              New
            </p>
            <p className="text-[#007580] mt-4 font-semibold text-lg group-hover:text-[#029FAE]">
              Library Stool Chair
            </p>
            <p className="font-medium text-xl mt-1">$20</p>
            <div className="w-[44px] h-[44px] bg-[#029FAE] rounded-[8px] flex items-center justify-center absolute bottom-[-8px] right-[5px] group-hover:bg-[#01AD5A] transition-all">
              <Image
                src="/Group (3).png"
                alt="cart icon"
                width={18.5}
                height={13.49}
                className="transition-transform transform group-hover:scale-110"
              />
            </div>
          </div>
        </Link>
        {/* Product Card 6 */}
        <Link href="/secondpage" passHref>
          <div className="w-full sm:w-[312px] h-[377px] relative group">
            <Image
              src="/Image (2).png"
              alt="product 2"
              width={312}
              height={312}
              className="transition-all transform group-hover:scale-105"
            />
            <p className="w-[49px] h-[26px] rounded-[4px] bg-[#F5813F] absolute top-4 left-4 text-center text-[#ffffff] font-medium">
              Sale
            </p>
            <p className="text-[#007580] mt-4 font-semibold text-lg group-hover:text-[#F5813F]">
              Library Stool Chair
            </p>
            <p className="font-medium text-xl mt-1">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-[8px] flex items-center justify-center absolute bottom-[-8px] right-[5px] group-hover:bg-[#F5813F] transition-all">
              <Image
                src="/Buy 3.png"
                alt="cart icon"
                width={22}
                height={22}
                className="transition-transform transform group-hover:scale-110"
              />
            </div>
          </div>
        </Link>
        {/* Product Card 7 */}
        <Link href="/thirdpage" passHref>
          <div className="w-full sm:w-[312px] h-[377px] relative group">
            <Image
              src="/Image (3).png"
              alt="product 3"
              width={312}
              height={312}
              className="transition-all transform group-hover:scale-105"
            />
            <p className="text-[#007580] mt-4 font-semibold text-lg group-hover:text-[#F5813F]">
              Library Stool Chair
            </p>
            <p className="font-medium text-xl mt-1">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-[8px] flex items-center justify-center absolute bottom-[-8px] right-4 group-hover:bg-[#F5813F] transition-all">
              <Image
                src="/Buy 3.png"
                alt="cart icon"
                width={22}
                height={22}
                className="transition-transform transform group-hover:scale-110"
              />
            </div>
          </div>
        </Link>
        {/* Product Card 8 */}
        <Link href="/fourthpage" passHref>
          <div className="w-full sm:w-[312px] h-[377px] relative group">
            <Image
              src="/Image (4).png"
              alt="product 3"
              width={312}
              height={312}
              className="transition-all transform group-hover:scale-105"
            />
            <p className="text-[#007580] mt-4 font-semibold text-lg group-hover:text-[#F5813F]">
              Library Stool Chair
            </p>
            <p className="font-medium text-xl mt-1">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-[8px] flex items-center justify-center absolute bottom-[-8px] right-4 group-hover:bg-[#F5813F] transition-all">
              <Image
                src="/Buy 3.png"
                alt="cart icon"
                width={22}
                height={22}
                className="transition-transform transform group-hover:scale-110"
              />
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
