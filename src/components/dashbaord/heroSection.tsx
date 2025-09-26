import React from "react";
import Calender from "./calender";

const HeroSection = () => {
  return (
    <div className="mt-3">
      <div className="w-[43rem]">
        <div className="h-[200px]">
          <img
            src="/assets/Banner.png"
            alt="hero banner"
            className="h-full w-full"
          />
        </div>
        <div>
          <div className="flex items-center justify-between text-sm my-2">
            <p className="font-semibold">My Course</p>
            <p className="font-medium">See all</p>
          </div>
          <div className="flex gap-2">
            <div className="bg-white p-5 rounded-md flex flex-col gap-2.5 flex-1">
              <img
                src="/assets/logos_envato.png"
                alt="envato logo"
                className="self-start h-[20px] w-auto"
              />
              <p className="font-medium text-sm w-5/6">
                Envato Mastery: Build a passive income from...
              </p>
              <div className="text-xs">
                <span>3.2 hours taken </span>
                <span>/ 10 hours</span>
              </div>
              <div className="h-[2px] bg-gray-400 relative shadow-md">
                <div className="absolute left-0 top-0 w-1/2 bg-red-600 h-full"></div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-md flex flex-col gap-2.5 flex-1">
              <img
                src="/assets/logos_google.png"
                alt="google logo"
                className="self-start h-[20px] w-auto"
              />
              <p className="font-medium text-sm w-5/6 capitalize">
                Mastering git and vercel app become pro...
              </p>
              <div className="text-xs">
                <span>3.2 hours taken </span>
                <span>/ 10 hours</span>
              </div>
              <div className="h-[2px] bg-gray-400 relative shadow-md">
                <div className="absolute left-0 top-0 w-1/2 bg-red-600 h-full"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm my-2">
              <p className="font-semibold">Today's Task</p>
              <p className="font-medium">See all</p>
            </div>
            <div className="flex flex-col gap-4 pt-3">
              <div className="flex items-center gap-5 bg-white p-3 border border-indigo-500 rounded-2xl">
                <div className="p-3 bg-gray-200 rounded-full flex items-center justify-center">
                  <img src="/assets/book-open.png" alt="book open" />
                </div>
                <div className="text-xs flex flex-col gap-1">
                  <p className="font-bold">Learn a new parts</p>
                  <div className="flex items-center gap-4 text-gray-400">
                    <p>Envato Mastery</p>
                    <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                    <p>Mr. Reynold</p>
                    <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                    <p>Theory</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-indigo-500 border-indigo-500"
                  />
                  <p className="text-xs">Done</p>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-white p-3 border border-indigo-500 rounded-2xl">
                <div className="p-3 bg-gray-200 rounded-full flex items-center justify-center">
                  <img src="/assets/book-open.png" alt="book open" />
                </div>
                <div className="text-xs flex flex-col gap-1">
                  <p className="font-bold">Learn a new parts</p>
                  <div className="flex items-center gap-4 text-gray-400">
                    <p> Mastering Figma</p>
                    <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                    <p>Mr. Reynold</p>
                    <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                    <p>Theory</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-indigo-500 border-indigo-500"
                  />
                  <p className="text-xs">Done</p>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-white p-3 border border-indigo-500 rounded-2xl">
                <div className="p-3 bg-gray-200 rounded-full flex items-center justify-center">
                  <img src="/assets/book-open.png" alt="book open" />
                </div>
                <div className="text-xs flex flex-col gap-1">
                  <p className="font-bold">Learn a new parts</p>
                  <div className="flex items-center gap-4 text-gray-400">
                    <p>Mastering git and vercel</p>
                    <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                    <p>Mr. Reynold</p>
                    <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                    <p>Theory</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-indigo-500 border-indigo-500"
                  />
                  <p className="text-xs">Done</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default HeroSection;
