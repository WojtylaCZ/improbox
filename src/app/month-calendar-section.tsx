import React from "react";
import { Stack } from "react-bootstrap";
import { ImproEventCard } from "./improevent";
import { MonthEventsCalendar } from "../assets/data/data-improbox";
import Travolta from "../assets/img/travolta.gif";
import { Image } from "react-bootstrap";

export type District = {
  monthSection: MonthEventsCalendar;
  isForUpcomingEvents: boolean;
  filters: { showPlays: boolean; showWorkshops: boolean };
};

export const MonthCalendarSection = ({
  monthSection,
  isFirst,
  isForUpcomingEvents,
  filters,
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
      if (!filters.showPlays && improEvent.eventType === "play") return false;
      if (!filters.showWorkshops && improEvent.eventType === "workshop") return false;
      return true;
    })
    .filter((improEvent) => {
      const eventDate = Date.parse(improEvent.playDate);
      // past event is 24 hours old
      return isForUpcomingEvents
        ? eventDate >= todayDate - 86400000
        : eventDate < todayDate - 86400000;
    })
    .map((improEvent, id) => (
      <ImproEventCard key={improEvent.slug} improEvent={improEvent} isFirst={isFirst && id < 2} />
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
            {isFirst && <>O žádné akci do konce tohoto měsíce už nevíme. Koukni na další měsíc.</>}
            {!isFirst && (
              <>Zatím o žádné akci v tomto měsíci nevíme. Zkus to znova za nějakou dobu.</>
            )}

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
