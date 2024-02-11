import React from "react";
import { Stack } from "react-bootstrap";
import { ImproEventCard, getImproEventSlug } from "./improevent";
import { Districts, LocationFilter } from "../assets/data/data-locations";
import Travolta from "../assets/img/travolta.gif";
import { Image } from "react-bootstrap";
import { EventTypeFilters, LanguageEventFilters, LocationFilters } from "./main";
import { MonthEventsCalendar } from "../assets/data/types";
import { useTranslation } from "react-i18next";
import { SupportedLocales } from "./i18n";

type Props = {
  monthSection: MonthEventsCalendar;
  isFirst: boolean;
  isForUpcomingEvents: boolean;
  filters: {
    showEventTypes: EventTypeFilters;
    showLocations: LocationFilters;
    showLanguages: LanguageEventFilters;
  };
};

export const MonthCalendarSection = ({
  monthSection,
  isFirst,
  isForUpcomingEvents,
  filters,
}: Props) => {
  const { t } = useTranslation();

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
      if (!filters.showLanguages.cs && improEvent.language === SupportedLocales.cs) return false;
      if (!filters.showLanguages.en && improEvent.language === SupportedLocales.en) return false;

      if (!filters.showEventTypes.play && improEvent.eventType === "play") return false;
      if (!filters.showEventTypes.workshop && improEvent.eventType === "workshop") return false;
      if (!filters.showEventTypes.jam && improEvent.eventType === "jam") return false;
      if (!filters.showEventTypes.coursework && improEvent.eventType === "coursework") return false;

      if (!filters.showLocations.Praha && improEvent.district === LocationFilter.Praha)
        return false;
      if (
        !filters.showLocations.CechyBezPrahy &&
        Districts[improEvent.district] === LocationFilter.CechyBezPrahy
      )
        return false;
      if (
        !filters.showLocations.MoravaASlezsko &&
        Districts[improEvent.district] === LocationFilter.MoravaASlezsko
      )
        return false;
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
      <ImproEventCard
        key={getImproEventSlug(improEvent)}
        improEvent={improEvent}
        isFirst={isFirst && id < 2}
      />
    ));

  // for past events, reverse the order to show the most recent first
  if (!isForUpcomingEvents) {
    events.reverse();
  }

  return (
    <div>
      <h2
        style={{
          fontFamily: "Jockey One",
          fontSize: "calc(1.075rem + 1.1vw)",
        }}
      >
        {t(`dataLabels.months.${new Date(monthDate).getMonth() + 1}.longName`)}
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
            {isFirst && t(`titles.noMoreEvents`)}
            {!isFirst && t(`titles.noEventsThisMonth`)}

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
