"use client";
import { format, addHours, startOfDay } from "date-fns";
import React from "react";

interface CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

type dayView = {
  date: Date;
  Events: CalendarEvent[];
};

const events = [
  {
    id: "1",
    title: "Morning Jog",
    start: new Date(2025, 8, 29, 6, 30), // Sept 29, 2025 06:30
    end: new Date(2025, 8, 29, 7, 30),
  },
  {
    id: "2",
    title: "Team Standup",
    start: new Date(2025, 8, 29, 9, 0), // 09:00
    end: new Date(2025, 8, 29, 9, 30),
  },
  {
    id: "3",
    title: "Client Meeting",
    start: new Date(2025, 8, 29, 11, 0),
    end: new Date(2025, 8, 29, 12, 0),
  },
  {
    id: "4",
    title: "Lunch Break",
    start: new Date(2025, 9, 30, 13, 0),
    end: new Date(2025, 9, 30, 14, 0),
  },
  {
    id: "5",
    title: "Project Review",
    start: new Date(2025, 9, 29, 15, 30),
    end: new Date(2025, 9, 29, 17, 0),
  },
];

const CalenderSchedule = () => {
  const hours: Date[] = [];
  let start = startOfDay(new Date());
  for (let i = 0; i < 24; i++) {
    hours.push(addHours(start, i));
  }


  return (
    <div className="relative rounded-lg h-auto overflow-y-auto">
      {hours.map((hour) => {
        const event = events.find((item) => {
          return (
            item.start.getHours() === hour.getHours() &&
            item.start.getDate() === hour.getDate()
          );
        });
        return (
          <>
            <div
              className="flex items-center justify-start gap-3 p-2"
              key={hour.toISOString()}
            >
              <p className="self-start text-gray-500 text-xs">
                {format(hour, "h:mm a")}
              </p>
              <div className="flex-1 h-20 bg-violet-200 flex rounded-lg overflow-hidden">
                {event ? (
                  <p className="justify-self-start text-xs w-full h-full p-2">
                    {event.title}
                  </p>
                ) : (
                  <p className="flex-1 flex justify-center items-center bg-gray-100 text-indigo-500 font-bold w-full h-full">
                    +
                  </p>
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CalenderSchedule;
