import React from "react";
import { Stack } from "react-bootstrap";
import { ImproEventCard } from "./improevent";
import { MonthEventsCalendar } from "../assets/data/data-improbox";
import Travolta from "../assets/img/travolta.gif";
import { Image } from "react-bootstrap";

export type District = {
  monthSection: MonthEventsCalendar;
  isForUpcomingEvents: boolean;
};

export const MonthCalendarSection = ({
  monthSection,
  isFirst,
  isForUpcomingEvents,
}: District & { isFirst: boolean }) => {
  const todayDate = Date.now();

  const monthDate = Date.parse(monthSection.monthDate);

  if (
    isForUpcomingEvents &&
    monthDate < todayDate &&
    new Date(monthDate).getMonth() !== new Date(todayDate).getMonth()
  ) {
    return null;
  }
  if (!isForUpcomingEvents && Date.parse(monthSection.monthDate) > todayDate) {
    return null;
  }

  const events = monthSection.events
    .filter((improEvent) => {
      const eventDate = Date.parse(improEvent.playDate);
      return isForUpcomingEvents ? eventDate >= todayDate : eventDate <= todayDate;
    })
    .map((improEvent, id) => (
      <ImproEventCard key={id} improEvent={improEvent} isFirst={isFirst && id < 2} />
    ));

  return (
    <div>
      <h2
        style={{
          fontFamily: "Jockey One",
          fontSize: "calc(1.075rem + 1.1vw)",
        }}
      >
        {monthSection.monthName}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {Boolean(events.length) && <Stack gap={4}>{events}</Stack>}
        {!Boolean(events.length) && (
          <>
            Zatím o žádné akci v tomto měsíci nevíme.
            <Image
              src={Travolta}
              alt="No events. Confused Travolta meme."
              style={{
                maxWidth: "300px",
                width: "100%",
                marginTop: "32px",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};
