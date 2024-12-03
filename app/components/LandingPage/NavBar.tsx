"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./NavBar.animation.css"; // Import file CSS

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (menuName: string) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-[120px] w-full">
        <div className="container mx-auto flex items-center justify-between px-0 py-9">
          <div className="flex items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  className="w-14 h-14 text-[#8BC34A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-14 h-14 text-[#8BC34A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
              <span className="text-[#8BC34A] font-bold text-4xl ml-2">
                MENU
              </span>
            </div>
          </div>
          <div className="logo absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <div className="w-20 h-20 bg-primary-green"></div>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <div className="cursor-pointer">
              <svg
                className="w-11 h-11 text-black"
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
                className="w-11 h-11 text-black"
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
                src="/images/vie-flag.png"
                alt="Vietnam"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Menu overlay - positioned below header */}
      <div
        className={`fixed inset-0 z-40 pt-[9vw] ${
          isOpen ? "animate-slideDown" : "animate-slideUp"
        }`}
      >
        <div
          className={`w-[560px] h-[calc(100vh-120px)] bg-primary-green relative overflow-auto scrollbar ${
            isOpen ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        >
          <ul
            className={`flex flex-col text-3xl font-bold text-white ${
              isOpen ? "animate-slideInFromLeft" : "animate-slideOutToLeft"
            }`}
          >
            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200">
              <Link href="/vn/trang-chu.html">TRANG CHỦ</Link>
            </li>

            {/* VỀ VIFON */}
            <li>
              <div
                className={`flex justify-between items-center px-[30px] py-2 transition-colors duration-200 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] ${
                  hoveredSubmenu === "about" ? "bg-[rgba(255,255,255,0.3)]" : ""
                }`}
                onClick={() => toggleSubmenu("about")}
              >
                <span>VỀ VIFON</span>
                <span
                  className={`text-4xl transition-transform duration-300 ${
                    activeSubmenu === "about" ? "rotate-90" : ""
                  }`}
                >
                  &gt;
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSubmenu === "about" ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <ul className="text-3xl font-bold text-gray-700">
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("about")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/gioi-thieu">Giới Thiệu</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("about")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/lich-su">Lịch Sử</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("about")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/thanh-tuu">Thành Tựu</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("about")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/cong-dong">Cộng Đồng</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* SẢN PHẨM */}
            <li>
              <div
                className={`flex justify-between items-center px-[30px] py-2 transition-colors duration-200 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] ${
                  hoveredSubmenu === "products"
                    ? "bg-[rgba(255,255,255,0.3)]"
                    : ""
                }`}
                onClick={() => toggleSubmenu("products")}
              >
                <span>SẢN PHẨM</span>
                <span
                  className={`text-4xl transition-transform duration-300 ${
                    activeSubmenu === "products" ? "rotate-90" : ""
                  }`}
                >
                  &gt;
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSubmenu === "products" ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <ul className="text-3xl font-bold text-gray-700">
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("products")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/san-pham/gao">Gạo</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("products")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/san-pham/mi">Mì</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("products")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/san-pham/gia-vi">Gia Vị</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("products")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/san-pham/nhap-khau">Nhập Khẩu</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200">
              <Link href="/cua-hang-vifonmart">CỬA HÀNG VIFONMART</Link>
            </li>

            {/* TRUYỀN THÔNG & KHUYẾN MÃI */}
            <li>
              <div
                className={`flex justify-between items-center px-[30px] py-2 transition-colors duration-200 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] ${
                  hoveredSubmenu === "media" ? "bg-[rgba(255,255,255,0.3)]" : ""
                }`}
                onClick={() => toggleSubmenu("media")}
              >
                <span>TRUYỀN THÔNG & KHUYẾN MÃI</span>
                <span
                  className={`text-4xl transition-transform duration-300 ${
                    activeSubmenu === "media" ? "rotate-90" : ""
                  }`}
                >
                  &gt;
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSubmenu === "media" ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <ul className="text-3xl font-bold text-gray-700">
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("media")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/tin-tuc-su-kien">Tin Tức & Sự Kiện</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("media")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/khuyen-mai">Khuyến Mãi</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("media")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/tin-tuc-co-dong">Tin Tức Cổ Đông</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("media")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/them-gia-vi">Thêm Gia Vị Vào Cuộc Sống</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* BẾP VIFON */}
            <li>
              <div
                className={`flex justify-between items-center px-[30px] py-2 transition-colors duration-200 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] ${
                  hoveredSubmenu === "kitchen"
                    ? "bg-[rgba(255,255,255,0.3)]"
                    : ""
                }`}
                onClick={() => toggleSubmenu("kitchen")}
              >
                <span>BẾP VIFON</span>
                <span
                  className={`text-4xl transition-transform duration-300 ${
                    activeSubmenu === "kitchen" ? "rotate-90" : ""
                  }`}
                >
                  &gt;
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSubmenu === "kitchen" ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <ul className="text-3xl font-bold text-gray-700">
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("kitchen")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/gia-vi-yeu-thuong">Gia Vị Yêu Thương</Link>
                  </li>
                  <li
                    className="px-[45px] py-2 hover:text-[--submenu-hover] transition-all duration-200"
                    onMouseEnter={() => setHoveredSubmenu("kitchen")}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                  >
                    <Link href="/mon-ngon-cung-vifon">Món Ngon Cùng VIFON</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200">
              <Link href="/thu-vien-vifon">THƯ VIỆN VIFON</Link>
            </li>

            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200">
              <Link href="/nghe-nghiep">NGHỀ NGHIỆP</Link>
            </li>

            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200">
              <Link href="/an-toan-thuc-pham">AN TOÀN THỰC PHẨM</Link>
            </li>

            <li className="px-[30px] py-2 hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200">
              <Link href="/lien-he">LIÊN HỆ</Link>
            </li>
            {/* Social media icons */}
            <div className="flex justify-center space-x-6 mt-12 pb-[30px]">
              <div>
                <Image
                  src="/images/Facebook_Icon.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <Image
                  src="/images/YouTube_Icon.svg"
                  alt="YouTube"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
