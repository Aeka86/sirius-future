import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { addEvent, toggleEventCompletion } from "../../Redux/calendarSlice";
import clsx from "clsx";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isToday,
  startOfMonth,
} from "date-fns";
import { v4 as uuidv4 } from "uuid";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface Event {
  id: string;
  date: string;
  title: string;
  time: string;
  completed: boolean;
}

interface EventCalendarProps {
  events: Event[];
}

const EventCalendar = ({ events }: EventCalendarProps) => {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);

  const [newEventTitles, setNewEventTitles] = useState<{ [key: string]: string }>({});

  const eventsByDate = useMemo(() => {
    return events.reduce((acc: { [key: string]: Event[] }, event) => {
      const dateKey = format(new Date(event.date), "yyyy-MM-dd");
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(event);
      return acc;
    }, {});
  }, [events]);

  const handleAddEvent = (date: Date) => {
    const dateKey = format(date, "yyyy-MM-dd");
    if (newEventTitles[dateKey]) {
      const newEvent: Event = {
        id: uuidv4(),
        date: dateKey,
        title: newEventTitles[dateKey],
        time: "",
        completed: false,
      };
      dispatch(addEvent(newEvent));
      setNewEventTitles((prev) => ({ ...prev, [dateKey]: "" }));
    }
  };

  const handleToggleEventCompletion = (eventId: string) => {
    dispatch(toggleEventCompletion(eventId));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-center">{format(currentDate, "MMMM yyyy")}</h2>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {WEEKDAYS.map((day) => (
          <div key={day} className="font-bold text-center">
            {day}
          </div>
        ))}
        {Array.from({ length: startingDayIndex }).map((_, index) => (
          <div key={`empty-${index}`} className="border rounded-md p-2 text-center" />
        ))}
        {daysInMonth.map((day, index) => {
          const dateKey = format(day, "yyyy-MM-dd");
          const todaysEvents = eventsByDate[dateKey] || [];
          return (
            <div
              key={index}
              className={clsx("border rounded-md p-2 text-right relative", {
                "bg-gray-200": isToday(day),
                "text-gray-900": isToday(day),
              })}
            >
              <div className="day-number">{format(day, "d")}</div>
              {todaysEvents.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className={clsx("event-item", {
                    "bg-green-500": event.completed,
                  })}
                  onClick={() => handleToggleEventCompletion(event.id)}
                >
                  {event.title}
                </div>
              ))}
              <input
                type="text"
                value={newEventTitles[dateKey] || ""}
                onChange={(e) =>
                  setNewEventTitles((prev) => ({ ...prev, [dateKey]: e.target.value }))
                }
                placeholder="Add Task"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAddEvent(day);
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
