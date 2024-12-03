"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState("TRONG NƯỚC");

  const categories = ["GẠO", "MÌ", "GIA VỊ", "NHẬP KHẨU"];

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
  ];

  return (
    <div className="bg-[#FBECD7] w-full">
      <div className="max-w-7xl mx-auto px-4 py-12 z-0">
        <h2 className="text-4xl font-bold text-center text-[#816365] mb-8">
          SẢN PHẨM
        </h2>

        {/* Tab switching */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full border border-[#dd363e] overflow-hidden">
            {["TRONG NƯỚC", "XUẤT KHẨU"].map((tab) => (
              <button
                key={tab}
                className={`px-8 py-2 ${
                  activeTab === tab
                    ? "bg-[#dd363e] text-white"
                    : "bg-white text-[#dd363e]"
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
              className="text-xl font-bold hover:text-[#dd363e] transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link href={product.link} key={product.name} className="group">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-4 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-center text-[#dd363e] group-hover:font-bold">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="px-8 py-3 border-2 border-[#dd363e] text-[#dd363e] rounded-full hover:bg-[#dd363e] hover:text-white transition-colors">
            Xem tất cả
          </button>
          <button className="px-8 py-3 bg-[#dd363e] text-white rounded-full hover:bg-[#c62e35] transition-colors">
            Cửa hàng online
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
