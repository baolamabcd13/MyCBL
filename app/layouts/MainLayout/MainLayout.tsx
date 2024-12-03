"use client";

import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Top background */}
      <div
        className="absolute top-0 left-0 right-0 h-[500px] bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/images/top.png")' }}
      />

      {/* Bottom background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[500px] bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/images/bottom.png")' }}
      />

      {/* Main content */}
      <div className="relative z-10 pt-[120px]">{children}</div>
    </div>
  );
};

export default MainLayout;
