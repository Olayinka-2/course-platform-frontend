"use client";

import React, { useState } from "react";
import { FaSearch, FaEnvelope, FaBell } from "react-icons/fa";
import ModalNotification from "@/components/dashboard/modalNotification";

interface headerItem {
  title: string,
  description?: string;
}

const Header: React.FC<headerItem> = ({title, description}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-white flex items-center justify-between p-5 rounded-lg">
      <div>
        <p className="font-bold text-2xl">{title}</p>
        <p className="text-xs font-light text-gray-400">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-6">
        <FaSearch className="w-5 h-5 cursor-pointer font-light" />
        <FaEnvelope className="w-5 h-5 cursor-pointer font-light" />
        <div className={`relative p-2 cursor-pointer transition ${isOpen ? "bg-white shadow-md" : "bg-transparent"}`}
        onClick={() => setIsOpen(true)}>
          <FaBell
            className={`w-5 h-5`}

          />
          {isOpen && <ModalNotification />}
        </div>
        <img
          src="/assets/profile.png"
          alt="Profile photo"
          className="w-10 h-10 cursor-pointer"
        />
      </div>
      {isOpen && (
        <div
          className="fixed bg-black opacity-60 z-40 inset-0"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;
