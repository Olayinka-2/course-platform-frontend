"use client";

import React, { useState } from "react";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"
import {
  format,         // format a date → "Sep 27, 2025"
  startOfMonth,   // first day of the current month
  endOfMonth,     // last day of the current month
  startOfWeek,    // start of the week (Sunday/Monday)
  endOfWeek,      // end of the week
  addMonths,      // move to next/previous month
  subMonths,
  addDays,        // add days (for looping weeks)
  isSameMonth,    // check if two dates are in the same month
  isToday,
  Month        // check if a date is today
} from "date-fns";


const calender = () => {

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthName = ['January', 'Febuary', "March", "April", 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startWeek = startOfWeek(monthStart, {weekStartsOn: 0});
  const endWeek = endOfWeek(monthStart, {weekStartsOn: 0});

  const rows: React.ReactNode[] = [];   // each row = array of 7 day cells
  let day: Date = startWeek;
  let count = 0;

  while (day <= monthEnd) {
    count++;
    let days: React.ReactNode[] = [];

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={day.toString()} className={`text-center p-2 ${format(day, "M") !== format(currentMonth, "M") ? 'text-gray-400' : ''} ${format(currentMonth, "d") == format(day, "d") ? 'bg-indigo-500 rounded-full': ''} text-sm`}>
          {format(day, "d")}
        </div>
      );
      day = addDays(day, 1);
    }
    if(count == 3 ) {
      break;
    }


    rows.push(<div key={day.toString()} className="flex justify-between items-center mb-1 gap-2">
    {days}
  </div>);
  }



  return (
    <div className="rounded-2xl p-5 flex-1 bg-white self-start">
      <div className="flex justify-between items-center font-semibold mb-4">
        <FaArrowLeft />
        <p>{format(currentMonth, "MMMM yyyy")}</p>
        <FaArrowRight />
      </div>

    <div className="" >
      <div className="flex justify-between items-center text-xs font-bold mb-5">
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thurs</p>
        <p>Fri</p>
        <p>Sat</p>
      </div>
      {
        rows
      }
    </div>
    </div>
  )
}

export default calender
