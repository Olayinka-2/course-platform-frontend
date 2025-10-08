"use client";

import React, { useLayoutEffect, useRef, useState } from "react";

import Header from "@/layouts/header";
import HeroSection from "@/components/dashboard/heroSection";

const Dashboard = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerItems = {
    title: 'Welcome back, Peter',
    description: "Let's boots your knowledge today and learn a new thing",
  }

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col">
      <div ref={headerRef}>
        <Header {...headerItems} />
      </div>
      <div className="flex-1">
        <HeroSection availableHeight = {window.innerHeight - headerHeight} />
      </div>
    </div>
  );
};

export default Dashboard;
