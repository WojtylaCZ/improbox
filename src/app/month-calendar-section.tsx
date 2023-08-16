import React from "react";
import { Stack } from "react-bootstrap";
import { ImproEventCard } from "./improevent";
import { ImproEvent } from "../assets/data/data-improbox";
import { useTranslation } from "react-i18next";

export type District = {
  name: string;
  improEvents: Array<ImproEvent>;
};

export const MonthCalendarSection = ({
  name,
  improEvents,
  isFirst,
}: District & { isFirst: boolean }) => {
  const { t } = useTranslation();

  const date = Date.now();

  const upcomingEvents = improEvents.filter((improEvent) => {
    const eventDate = Date.parse(improEvent.playDate);
    return eventDate >= date;
  });

  const pastEvents = improEvents.filter((improEvent) => {
    const eventDate = Date.parse(improEvent.playDate);
    return eventDate < date;
  });

  const upcomingEventsList = upcomingEvents.map((improEvent, id) => (
    <ImproEventCard key={id} improEvent={improEvent} isFirst={isFirst && id < 4} />
  ));

  const pastEventsList = pastEvents.map((improEvent, id) => (
    <ImproEventCard key={id} improEvent={improEvent} isFirst={isFirst && id < 4} />
  ));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontFamily: "Kaushan Script",
            color: "#c51515",
            marginBottom: "24px",
            fontSize: "calc(1.775rem + 1.1vw)",
          }}
        >
          {name}
        </h2>
        {Boolean(upcomingEventsList.length) && (
          <>
            {t("section.futureEvents")}
            <Stack gap={4}>{upcomingEventsList}</Stack>
            <br />
            <br />
          </>
        )}
        {Boolean(pastEventsList.length) && (
          <>
            {t("section.pastEvents")}
            <Stack gap={4}>{pastEventsList}</Stack>
            <br />
            <br />
          </>
        )}
      </div>
    </>
  );
};
