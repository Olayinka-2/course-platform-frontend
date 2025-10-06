"use client";

import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaPlus } from "react-icons/fa";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  addDays,
} from "date-fns";
import CalenderSchedule from "./calenderSchedule";

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startWeek = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endWeek = endOfWeek(monthStart, { weekStartsOn: 0 });

  const rows: React.ReactNode[] = [];
  let day: Date = startWeek;
  let count = 3;

  while (day <= monthEnd) {
    const days: React.ReactNode[] = [];

    for (let i = 0; i < 7; i++) {
      const isOtherMonth = format(day, "M") !== format(currentMonth, "M");
      const isToday = format(today, "yyyy-MM-dd") === format(day, "yyyy-MM-dd");

      days.push(
        <div
          key={day.toString()}
          className={`text-center p-2 text-sm
            ${isOtherMonth ? "text-gray-400" : ""}
            ${isToday ? "bg-indigo-500 text-white rounded-full" : ""}
          `}
        >
          {format(day, "d")}
        </div>
      );

      day = addDays(day, 1);
    }
    count--;
    if (count == 0) {
      break;
    }

    rows.push(
      <div
        key={day.toString()}
        className="flex justify-between items-center mb-1 gap-2"
      >
        {days}
      </div>
    );
  }

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="flex-1 h-104 flex flex-col  min-h-0">

      <div className="rounded-2xl p-5 bg-white self-start w-full h-[40%]">

        <div className="flex justify-between items-center font-semibold mb-3 text-sm">
          <FaArrowLeft onClick={prevMonth} className="cursor-pointer" />
          <p>{format(currentMonth, "MMMM yyyy")}</p>
          <FaArrowRight onClick={nextMonth} className="cursor-pointer" />
        </div>

        <div className="flex justify-between text-xs font-bold mb-3">
          {daysOfWeek.map((day) => (
            <p key={day}>{day}</p>
          ))}
        </div>

        {rows}
      </div>

      <div className="mt-4 p-4 rounded-2xl flex-1 flex flex-col bg-white">
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-sm">Schedule</p>
          <FaPlus className="p-1 bg-indigo-500 rounded-full text-white text-lg cursor-pointer" />
        </div>
        <div className="flex-1 overflow-y-auto max-h-[280px] scrollbar-hide">
          <CalenderSchedule />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
