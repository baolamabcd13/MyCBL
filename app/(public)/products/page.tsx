"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("TRONG NƯỚC");
  const [currentPage, setCurrentPage] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState(0);

  const categories = ["GẠO", "MÌ", "GIA VỊ", "NHẬP KHẨU"];
  const productsPerColumn = 2; // 2 rows
  const visibleColumns = 4; // 4 columns

  const products = [
    {
      name: "Mì Xào Spaghetti",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/mi-xao-spaghetti",
    },
    {
      name: "Mì Trộn Tôm Chua Cay Thái",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/mi-tron-tom",
    },
    {
      name: "Phở Gà 65g",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pho-ga",
    },
    {
      name: "Phở Chay Rau Nấm 65g",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pho-chay",
    },
    {
      name: "Mì Trộn Pad Thai Khay",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pad-thai",
    },
    {
      name: "Phở Bò 65g",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pho-bo",
    },
    {
      name: "Hoàng Gia Phở Thịt Bò",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pho-hoang-gia",
    },
    {
      name: "Phở Gà 65g",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pho-ga",
    },
    {
      name: "Phở Chay Rau Nấm 65g",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pho-chay",
    },
    {
      name: "Mì Trộn Pad Thai Khay",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pad-thai",
    },
    {
      name: "Phở Bò 65g",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pho-bo",
    },
    {
      name: "Hoàng Gia Phở Thịt Bò",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pho-hoang-gia",
    },
    {
      name: "Phở Gà 65g",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pho-ga",
    },
    {
      name: "Phở Chay Rau Nấm 65g",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pho-chay",
    },
    {
      name: "Mì Trộn Pad Thai Khay",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pad-thai",
    },
    {
      name: "Phở Bò 65g",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pho-bo",
    },
    {
      name: "Hoàng Gia Phở Thịt Bò",
      image: "/images/products/bun_bo_hue.png",
      link: "/products/pho-hoang-gia",
    },
  ];

  const normalizeProducts = () => {
    // Đảm bảo số sản phẩm chia hết cho số sản phẩm trong 1 cột
    const remainder = products.length % productsPerColumn;
    if (remainder === 0) return products;

    const padding = productsPerColumn - remainder;
    return [...products, ...Array(padding).fill(products[0])];
  };

  const normalizedProducts = normalizeProducts();
  const totalColumns = Math.ceil(normalizedProducts.length / productsPerColumn);

  const getVisibleProducts = (startColumn: number) => {
    const result = [];
    for (let i = 0; i < visibleColumns; i++) {
      const columnIndex = (startColumn + i + totalColumns) % totalColumns;
      const start = columnIndex * productsPerColumn;
      const columnProducts = normalizedProducts.slice(
        start,
        start + productsPerColumn
      );
      result.push(...columnProducts);
    }
    return result;
  };

  const handleNext = () => {
    if (!transitioning) {
      setTransitioning(true);
      setSlideDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalColumns);
      setTimeout(() => {
        setTransitioning(false);
        setSlideDirection(0);
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (!transitioning) {
      setTransitioning(true);
      setSlideDirection(-1);
      setCurrentPage((prev) => (prev - 1 + totalColumns) % totalColumns);
      setTimeout(() => {
        setTransitioning(false);
        setSlideDirection(0);
      }, 500);
    }
  };

  const currentProducts = getVisibleProducts(currentPage);
  const previousProducts = getVisibleProducts(
    currentPage + (slideDirection > 0 ? -1 : 1)
  );

  return (
    <>
      <style jsx>{`
        @keyframes slideLeft {
          from {
            transform: translateX(25%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-25%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-25%);
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(25%);
          }
        }
      `}</style>

      <div className="bg-[#FBECD7] w-full">
        <div className="max-w-6xl mx-auto px-4 py-12 z-0">
          <h2 className="text-6xl font-bold text-center text-[--primary-green] mb-8 pt-12">
            SẢN PHẨM
          </h2>

          {/* Tab switching */}
          <div className="flex justify-center mb-8">
            <div className="text-2xl inline-flex rounded-2xl border-2 border-[--primary-green] overflow-hidden">
              {["TRONG NƯỚC", "XUẤT KHẨU"].map((tab) => (
                <button
                  key={tab}
                  className={`px-12 py-2 ${
                    activeTab === tab
                      ? "bg-[--primary-green] text-white"
                      : "bg-white text-[--primary-green]"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="flex justify-center gap-12 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="text-4xl font-bold text-[#333333] hover:text-[--primary-green] transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products grid with navigation */}
          <div className="relative max-w-6xl mx-auto px-8">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-[--primary-green] flex items-center justify-center group hover:bg-[--primary-green] transition-colors z-10"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="group-hover:fill-white fill-[--primary-green]"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            {/* Products Grid */}
            <div className="relative overflow-hidden">
              <div
                className="grid grid-rows-2 grid-cols-4 gap-x-6 gap-y-8"
                style={{
                  animation: transitioning
                    ? slideDirection > 0
                      ? "slideLeft 0.5s ease-in-out"
                      : "slideRight 0.5s ease-in-out"
                    : "none",
                }}
              >
                {currentProducts.map((product, index) => (
                  <Link
                    href={product.link}
                    key={`${product.name}-${index}`}
                    className="group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="relative w-full h-40 mb-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-center text-[--primary-green] text-lg group-hover:font-bold">
                        {product.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>

              {transitioning && (
                <div
                  className="grid grid-rows-2 grid-cols-4 gap-x-6 gap-y-8 absolute top-0 left-0 w-full"
                  style={{
                    animation:
                      slideDirection > 0
                        ? "slideOutLeft 0.5s ease-in-out"
                        : "slideOutRight 0.5s ease-in-out",
                  }}
                >
                  {previousProducts.map((product, index) => (
                    <Link
                      href={product.link}
                      key={`${product.name}-prev-${index}`}
                      className="group"
                    >
                      <div className="flex flex-col items-center">
                        <div className="relative w-full h-40 mb-4">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-center text-[--primary-green] text-lg group-hover:font-bold">
                          {product.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-[--primary-green] flex items-center justify-center group hover:bg-[--primary-green] transition-colors z-10"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="group-hover:fill-white fill-[--primary-green]"
              >
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button className="text-2xl px-12 py-2 border-2 border-[--primary-green] text-[--primary-green] rounded-2xl hover:bg-[--primary-green] hover:text-white transition-colors">
              Xem tất cả
            </button>
            <button className="text-2xl px-12 py-2 bg-[--primary-green] text-white rounded-2xl hover:bg-black transition-colors">
              Cửa hàng online
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
