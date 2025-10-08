import React from "react";
import Calender from "./calender";

interface HeroHeight {
  availableHeight: number;
}

const HeroSection: React.FC<HeroHeight> = ({ availableHeight }) => {

   availableHeight = availableHeight - 35;

  return (
    <div className="mt-3 flex gap-4 overflow-hidden" style={{ height: availableHeight }}>
      <div className="w-[43rem] h-full flex flex-col gap-3">
        <div className="h-[150px]">
          <img
            src="/assets/Banner.png"
            alt="hero banner"
            className="h-full w-full rounded-md"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs my-1">
            <p className="font-semibold">My Course</p>
            <p className="font-medium">See all</p>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="bg-white p-5 rounded-md flex flex-col gap-2 flex-1">
              <img
                src="/assets/logos_envato.png"
                alt="envato logo"
                className="self-start h-[18px] w-auto"
              />
              <p className="font-medium text-xs w-5/6 text-nowrap overflow-ellipsis">
                Envato Mastery: Build a passive income from...
              </p>
              <div className="text-[10px]">
                <span>3.2 hours taken </span>
                <span>/ 10 hours</span>
              </div>
              <div className="h-[2px] bg-gray-300 relative">
                <div className="absolute left-0 top-0 w-1/2 bg-red-600 h-full"></div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-md flex flex-col gap-2 flex-1">
              <img
                src="/assets/logos_google.png"
                alt="google logo"
                className="self-start h-[18px] w-auto"
              />
              <p className="font-medium text-xs w-5/6 text-nowrap overflow-ellipsis capitalize">
                Mastering git and vercel app become pro...
              </p>
              <div className="text-[10px]">
                <span>3.2 hours taken </span>
                <span>/ 10 hours</span>
              </div>
              <div className="h-[2px] bg-gray-300 relative">
                <div className="absolute left-0 top-0 w-1/2 bg-red-600 h-full"></div>
              </div>
            </div>
          </div>
        </div>

          <div className="flex items-center justify-between text-xs my-2">
            <p className="font-semibold">Today's Task</p>
            <p className="font-medium">See all</p>
          </div>
        <div className="flex-1 flex flex-col overflow-y-auto scrollbar-hide">

          <div className="flex flex-col gap-3 pt-2">
            {[
              "Envato Mastery",
              "Mastering Figma",
              "Mastering git and vercel",
            ].map((course, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-2.5 border border-indigo-400 rounded-xl"
              >
                <div className="p-2 bg-gray-200 rounded-full flex items-center justify-center">
                  <img
                    src="/assets/book-open.png"
                    alt="book open"
                    className="h-4 w-4"
                  />
                </div>
                <div className="text-[11px] flex flex-col gap-1">
                  <p className="font-bold">Learn a new parts</p>
                  <div className="flex items-center gap-3 text-gray-400">
                    <p>{course}</p>
                    <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                    <p>Mr. Reynold</p>
                    <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                    <p>Theory</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="accent-indigo-500 border-indigo-500 h-3 w-3"
                  />
                  <p className="text-[11px]">Done</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Calender />
    </div>
  );
};

export default HeroSection;
