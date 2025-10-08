"use client";

import React from "react";
import {
  FaTachometerAlt,
  FaRegCalendarAlt,
  FaRegCommentDots,
  FaCreditCard,
  FaBookOpen,
  FaCompass,
  FaLifeRing,
  FaCog,
  FaBars,
  FaStar,
} from "react-icons/fa";
import { IconType } from "react-icons";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface sidebarIcon {
  icon: IconType;
  label: string;
  path: string;
  active?: boolean;
}

interface sidebarSection {
  title: string;
  items: sidebarIcon[];
}

const SidebarIcon: React.FC<sidebarIcon> = ({
  icon: Icon,
  label,
  path
}) => {

  const pathName = usePathname();
  const isActive = pathName == path;
  return (
    <>
      <Link
      href={path}
        className={`flex gap-2 items-center px-6 py-2 rounded-md my-1 font-medium cursor-pointer ${
          isActive ? "bg-gray-200 text-indigo-500" : "text-gray-500 hover:bg-gray-200 hover:text-indigo-500"
        }`}
      >
        <Icon className="w-5 h-5" />
        <p>{label}</p>
      </Link>
    </>
  );
};

const SideBar = () => {

  const sidebarSections: sidebarSection[] = [
    {
      title: "GENERAL",
      items: [
        { icon: FaTachometerAlt, label: "Dashboard", path: "/" },
        { icon: FaRegCalendarAlt, label: "Schedule", path: "/schedule" },
        { icon: FaRegCommentDots, label: "Message", path: "/message" },
        { icon: FaCreditCard, label: "Payment", path: "/payment" },
      ],
    },
    {
      title: "MY COURSES",
      items: [
        { icon: FaBookOpen, label: "My Course", path: "/courses" },
        { icon: FaCompass, label: "Discover", path: "/discover" },
      ],
    },
    {
      title: "OTHERS",
      items: [
        { icon: FaLifeRing, label: "Setting", path: "/setting" },
        { icon: FaCog, label: "Finance", path: "/finance" },
      ],
    },
  ];

  return (
    <div className="px-6 flex flex-col justify-evenly lg:h-[calc(100vh)]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 mx-auto">
          <img src="/assets/logo.png" alt="logo" className="w-5 h-6" />
          <h1 className="font-bold text-lg">Courses</h1>
        </div>
        <button className="lg:hidden">
          <FaBars />
        </button>
      </div>
      <div className="text-xs">
        {sidebarSections.map((section, idx) => (
          <div key={idx} className="mb-2">
            <h2 className="font-semibold text-gray-400 my-1.5">
              {section.title}
            </h2>
            {section.items.map((item, idx) => (
              <SidebarIcon key={idx} {...item} />
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto w-38 bg-indigo-500 p-5 rounded-2xl">
        <div className="text-xs font-medium flex flex-col items-center text-center gap-2">
          <p>24/7 Access to your personal dashbaord</p>
          <div className="flex items-center justify-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, idx) => (
                <FaStar key={idx} className="text-white" />
              ))}
          </div>
          <button className="bg-white text-indigo-500 rounded-md py-2 px-4 font-bold">
            Get Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
