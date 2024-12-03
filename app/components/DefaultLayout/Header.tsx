"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-[120px] w-full">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <div
              className="flex items-center cursor-pointer absolute left-6"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  className="w-8 h-8 text-[#dd363e]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 text-[#dd363e]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
              <span className="text-[#dd363e] font-bold text-2xl ml-2">
                MENU
              </span>
            </div>
          </div>
          <div className="logo absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image
                src="@/public/vnt_upload/weblink/logo-tiengviet-chutdo.svg"
                alt="VIFON Logo"
                className="h-20"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <div className="cursor-pointer">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="cursor-pointer">
              <Image
                src="/images/en-flag.png"
                alt="English"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Menu overlay - positioned below header */}
      <div
        className={`fixed inset-0 z-40 pt-[73px] transition-transform duration-500 ease-out-cubic transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-[560px] h-auto bg-[#dd363e] relative">
          {/* Menu items */}
          <ul className="flex flex-col text-2xl font-bold text-white pt-[10px]">
            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200">
              <Link href="/vn/trang-chu.html" className="block">
                TRANG CHỦ
              </Link>
            </li>
            <li className="flex justify-between items-center px-[30px] py-2 hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200">
              <span>VỀ VIFON</span>
              <span className="text-3xl">&gt;</span>
            </li>
            <li className="flex justify-between items-center px-[30px] py-2 hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200">
              <span>SẢN PHẨM</span>
              <span className="text-3xl">&gt;</span>
            </li>
            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200">
              <span>CỬA HÀNG VIFONMART</span>
            </li>
            <li className="flex justify-between items-center px-[30px] py-2 hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200">
              <span>TRUYỀN THÔNG & KHUYẾN MÃI</span>
              <span className="text-3xl">&gt;</span>
            </li>
            <li className="flex justify-between items-center px-[30px] py-2 hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200">
              <span>BẾP VIFON</span>
              <span className="text-3xl">&gt;</span>
            </li>
            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200">
              <span>THƯ VIỆN VIFON</span>
            </li>
            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200">
              <span>NGHỀ NGHIỆP</span>
            </li>
            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200">
              <span>AN TOÀN THỰC PHẨM</span>
            </li>
            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200">
              <span>LIÊN HỆ</span>
            </li>
          </ul>

          {/* Social media icons */}
          <div className="flex justify-center space-x-6 mt-12">
            <div className="bg-[#ffeb3b] p-2 rounded">
              <Image
                src="/images/facebook-icon.png"
                alt="Facebook"
                className="w-10 h-10"
              />
            </div>
            <div className="bg-[#ffeb3b] p-2 rounded">
              <Image
                src="/images/youtube-icon.png"
                alt="YouTube"
                className="w-10 h-10"
              />
            </div>
          </div>

          {/* URL display */}
          <div className="absolute bottom-4 left-[30px] bg-black bg-opacity-50 px-4 py-2 rounded">
            <span className="text-sm text-white">
              vifon.com.vn/vn/trang-chu.html
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .ease-out-cubic {
          transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </>
  );
};

export default Header;
