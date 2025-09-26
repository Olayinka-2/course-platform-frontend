"use client";

import React from "react";
// import FullCalendar from "@fullcalendar/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calender = () => {
  return (
    <div className="p-6">
    <h2 className="text-xl font-bold mb-4">School Calendar</h2>
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth" // Default: Month view
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      selectable={true} // allow selecting dates
      editable={true}   // allow drag/drop
      events={[
        {
          title: "Math Class",
          start: "2025-09-24T09:00:00",
          end: "2025-09-24T10:30:00",
        },
        {
          title: "Midterm Exam",
          start: "2025-10-10",
          end: "2025-10-14",
          allDay: true,
        },
        {
          title: "PTA Meeting",
          start: "2025-09-28T14:00:00",
          end: "2025-09-28T16:00:00",
        },
      ]}
      height="auto"
    />
  </div>
  )
}

export default Calender
