import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Button, Col, Collapse, Container, Form, Image, Row, Stack } from "react-bootstrap";
import { MonthCalendarSection } from "./month-calendar-section";
import MailIcon from "../assets/img/mail.png";

import { LocationFilter } from "../assets/data/data-locations";
import { EventType } from "../assets/data/types";
import { improEventsTable } from "../assets/data/data-improevents";

import { useNavigate, useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { HeaderBar } from "./header-bar";
import { supportedLocales } from "./i18n";
import { FooterBar } from "./footer-bar";
import { ChevronUpIcon } from "../assets/icons/chevronUp";
import { ChevronDownIcon } from "../assets/icons/chevronDown";
import { AnalyticsEvents, sendAnalyticsEvent } from "./analytics";
import { ImproeventLinkToastProvider } from "./improventlink-toast";
import { getImproEventSlug } from "./improevent";
import { PageContent } from "./page-content";
import { PageHeaderImage } from "./page-header-image";
import { LineSeparator } from "./line-separator";

export type LocationFilters = {
  [LocationFilter.Praha]: boolean;
  [LocationFilter.CechyBezPrahy]: boolean;
  [LocationFilter.MoravaASlezsko]: boolean;
};

export type EventTypeFilters = Record<EventType, boolean>;

export const Main = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { eventSlug, locale } = useParams();

  useEffect(() => {
    if (locale && !supportedLocales.includes(locale)) {
      navigate("/", { replace: true });
    }
    const slugs = improEventsTable
      .flatMap((district) => district.events)
      .map((improEvent) => getImproEventSlug(improEvent));

    if (eventSlug && !slugs.includes(eventSlug)) {
      navigate("/", { replace: true });
    }
  }, [navigate, eventSlug, locale]);

  const [isMailFormExpanded, setIsMailFormExpanded] = useState(false);

  const handleMailFormClick = useCallback(() => {
    sendAnalyticsEvent(
      isMailFormExpanded
        ? AnalyticsEvents.EmailSubscribeFormCollapsed
        : AnalyticsEvents.EmailSubscribeFormExpanded,
      {}
    );
    setIsMailFormExpanded(!isMailFormExpanded);
  }, [isMailFormExpanded]);

  const [isPastEventsSectionExpanded, setIsPastEventsSectionExpanded] = useState(false);

  const handlePastEventsSectionClick = useCallback(() => {
    sendAnalyticsEvent(
      isPastEventsSectionExpanded
        ? AnalyticsEvents.PastEventsCollapsed
        : AnalyticsEvents.PastEventsExpanded,
      {}
    );
    setIsPastEventsSectionExpanded(!isPastEventsSectionExpanded);
  }, [isPastEventsSectionExpanded]);

  const [showEventTypeFilters, setShowEventTypeFilters] = useState<EventTypeFilters>({
    play: true,
    workshop: true,
    coursework: true,
    jam: true,
    unknown: true,
  });

  const handleShowPlaysFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowEventTypeFilters({ ...showEventTypeFilters, play: event.target.checked });
    sendAnalyticsEvent(
      Boolean(event.target.checked)
        ? AnalyticsEvents.PlaysSwitchedOnFilter
        : AnalyticsEvents.PlaysSwitchedOffFilter,
      { targetFilterChecked: String(event.target.checked) }
    );
  };

  const handleShowWorkshopsFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowEventTypeFilters({ ...showEventTypeFilters, workshop: event.target.checked });
    sendAnalyticsEvent(
      Boolean(event.target.checked)
        ? AnalyticsEvents.WorkshopsSwitchedOnFilter
        : AnalyticsEvents.WorkshopsSwitchedOffFilter,
      { targetFilterChecked: String(event.target.checked) }
    );
  };

  const handleShowJamsFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowEventTypeFilters({ ...showEventTypeFilters, jam: event.target.checked });
    sendAnalyticsEvent(
      Boolean(event.target.checked)
        ? AnalyticsEvents.JamsSwitchedOnFilter
        : AnalyticsEvents.JamsSwitchedOffFilter,
      { targetFilterChecked: String(event.target.checked) }
    );
  };

  const handleShowCourseworkFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowEventTypeFilters({ ...showEventTypeFilters, coursework: event.target.checked });
    sendAnalyticsEvent(
      Boolean(event.target.checked)
        ? AnalyticsEvents.CourseworksSwitchedOnFilter
        : AnalyticsEvents.CourseworksSwitchedOffFilter,
      { targetFilterChecked: String(event.target.checked) }
    );
  };

  const [showLocationFilters, setShowLocationFilters] = useState<LocationFilters>({
    [LocationFilter.CechyBezPrahy]: true,
    [LocationFilter.Praha]: true,
    [LocationFilter.MoravaASlezsko]: true,
  });

  const handlePragueLocationFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowLocationFilters({
      ...showLocationFilters,
      [LocationFilter.Praha]: event.target.checked,
    });
    sendAnalyticsEvent(
      Boolean(event.target.checked)
        ? AnalyticsEvents.PragueLocationSwitchedOnFilter
        : AnalyticsEvents.PragueLocationSwitchedOffFilter,
      { targetFilterChecked: String(event.target.checked) }
    );
  };

  const handleBohemiaLocationFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowLocationFilters({
      ...showLocationFilters,
      [LocationFilter.CechyBezPrahy]: event.target.checked,
    });
    sendAnalyticsEvent(
      Boolean(event.target.checked)
        ? AnalyticsEvents.BohemiaLocationSwitchedOnFilter
        : AnalyticsEvents.BohemiaLocationSwitchedOffFilter,
      { targetFilterChecked: String(event.target.checked) }
    );
  };

  const handleMoraviaAndSilesiaLocationFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowLocationFilters({
      ...showLocationFilters,
      [LocationFilter.MoravaASlezsko]: event.target.checked,
    });
    sendAnalyticsEvent(
      Boolean(event.target.checked)
        ? AnalyticsEvents.MoraviaAndSilesiaLocationSwitchedOnFilter
        : AnalyticsEvents.MoraviaAndSilesiaLocationSwitchedOffFilter,
      { targetFilterChecked: String(event.target.checked) }
    );
  };

  const todayDate = Date.now();

  const upcomingEvents = improEventsTable.filter((month) => {
    return (
      new Date(month.monthDate).getFullYear() >= new Date(todayDate).getFullYear() &&
      (Date.parse(month.monthDate) > todayDate ||
        new Date(month.monthDate).getMonth() === new Date(todayDate).getMonth())
    );
  });

  upcomingEvents.sort((a, b) => {
    return Date.parse(a.monthDate) - Date.parse(b.monthDate);
  });

  const pastEvents = improEventsTable.filter((month) => {
    return (
      new Date(month.monthDate).getFullYear() <= new Date(todayDate).getFullYear() &&
      (Date.parse(month.monthDate) < todayDate ||
        new Date(month.monthDate).getMonth() === new Date(todayDate).getMonth())
    );
  });

  pastEvents.sort((a, b) => {
    return Date.parse(b.monthDate) - Date.parse(a.monthDate);
  });

  const upcomingMonthSections = upcomingEvents.map((monthSection, id) => (
    <MonthCalendarSection
      key={monthSection.monthName}
      monthSection={monthSection}
      isFirst={id === 0}
      isForUpcomingEvents={true}
      filters={{
        showEventTypes: showEventTypeFilters,
        showLocations: showLocationFilters,
      }}
    />
  ));

  const pastMonthSections = pastEvents.map((monthSection, id) => (
    <MonthCalendarSection
      key={monthSection.monthName}
      monthSection={monthSection}
      isFirst={false}
      isForUpcomingEvents={false}
      filters={{
        showEventTypes: showEventTypeFilters,
        showLocations: showLocationFilters,
      }}
    />
  ));

  return (
    <>
      <HeaderBar />
      <PageHeaderImage />

      <PageContent>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span
              style={{
                marginTop: "4px",
                marginBottom: "12px",
              }}
            >
              {t("text.introLine1")}
            </span>

            <Button
              variant="danger"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "8px",
                fontFamily: "Jockey One",
                fontSize: "calc(0.9rem + 0.3vw)",
              }}
              onClick={handleMailFormClick}
              aria-controls="email-subscription-collapse"
              aria-expanded={isMailFormExpanded}
            >
              <Image
                src={MailIcon}
                alt="Email icon."
                style={{
                  maxWidth: "24px",
                  marginRight: "8px",
                }}
              />
              {t("text.mailButton")}
            </Button>
            <Collapse in={isMailFormExpanded}>
              <iframe
                title="improbox"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfTwRDWECT_qKbiv0jGmzSXw5QgXqIqK3P0blyFqOwLucoBEw/viewform?embedded=true&usp=pp_url&entry.1183490725=Praha&entry.1183490725=%C4%8Cechy+bez+Prahy&entry.1183490725=Morava+a+Slezsko&entry.1820203816=P%C5%99edstaven%C3%AD&entry.1820203816=Workshopy&entry.1820203816=Kurzy"
                width={400}
                height={750}
                id="email-subscription-collapse"
              >
                Načítání…
              </iframe>
            </Collapse>
            <LineSeparator />
          </div>
          <Container fluid>
            <Row> {t("text.filters")}</Row>
            <Row>
              <Col xs={4} sm={3}>
                <div style={{ display: "flex", justifyContent: "start" }}>
                  {t("text.eventTypeFilters")}
                </div>
              </Col>
              <Col xs={8} sm={9}>
                <div style={{ display: "flex", justifyContent: "start", flexWrap: "wrap" }}>
                  <Form.Switch
                    checked={showEventTypeFilters.play}
                    inline
                    id="plays"
                    label={t("dataLabels.plays")}
                    onChange={handleShowPlaysFilterChange}
                  />
                  <Form.Switch
                    checked={showEventTypeFilters.workshop}
                    inline
                    id="workshops"
                    label={t("dataLabels.workshops")}
                    onChange={handleShowWorkshopsFilterChange}
                  />
                  <Form.Switch
                    checked={showEventTypeFilters.coursework}
                    inline
                    id="courseworks"
                    label={t("dataLabels.courseworks")}
                    onChange={handleShowCourseworkFilterChange}
                  />
                  <Form.Switch
                    checked={showEventTypeFilters.jam}
                    inline
                    id="jams"
                    label={t("dataLabels.jams")}
                    onChange={handleShowJamsFilterChange}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={3}>
                <div style={{ display: "flex", justifyContent: "start", marginTop: "8px" }}>
                  {t("text.eventLocationFilters")}
                </div>
              </Col>
              <Col xs={8} sm={9}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: "wrap",
                    marginTop: "8px",
                  }}
                >
                  <Form.Switch
                    checked={showLocationFilters.Praha}
                    inline
                    id="prague"
                    label={t("dataLabels.Prague")}
                    onChange={handlePragueLocationFilterChange}
                  />
                  <Form.Switch
                    checked={showLocationFilters.CechyBezPrahy}
                    inline
                    id="bohemia"
                    label={t("dataLabels.Bohemia")}
                    onChange={handleBohemiaLocationFilterChange}
                  />
                  <Form.Switch
                    checked={showLocationFilters.MoravaASlezsko}
                    inline
                    id="moraviaAndSilesia"
                    label={t("dataLabels.MoraviaAndSilesia")}
                    onChange={handleMoraviaAndSilesiaLocationFilterChange}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <ImproeventLinkToastProvider>
          <Stack gap={5}>{upcomingMonthSections}</Stack>

          <hr
            style={{
              width: "110px",
              color: "#dd2822",
              border: 0,
              borderTop: "1px solid",
              opacity: "90%",
              marginTop: "32px",
              marginBottom: "8px",
            }}
          />

          <iframe
            title="Feedback"
            src="https://docs.google.com/forms/d/e/1FAIpQLSejGG8NV6FbXSAO-sjIrWoqX29FY1CmNx2cuHbe-aMoSS2veg/viewform?embedded=true"
            width={"100%"}
            height={500}
          >
            Načítání…
          </iframe>

          <hr
            style={{
              width: "110px",
              color: "#dd2822",
              border: 0,
              borderTop: "1px solid",
              opacity: "90%",
              marginTop: "1px",
              marginBottom: "16px",
            }}
          />

          <Button
            variant="danger"
            onClick={handlePastEventsSectionClick}
            aria-controls="past-events-collapse"
            aria-expanded={isPastEventsSectionExpanded}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffffff",
                fontFamily: "Jockey One",
                fontSize: "calc(0.9rem + 0.3vw)",
              }}
            >
              {isPastEventsSectionExpanded
                ? t("titles.hidePastEvents")
                : t("titles.showPastEvents")}

              <div style={{ width: "10px", marginLeft: "8px", marginBottom: "8px" }}>
                {isPastEventsSectionExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </div>
            </div>
          </Button>

          <Collapse in={isPastEventsSectionExpanded}>
            <div id="past-events-collapse">
              <Container>
                <Stack gap={5}>{pastMonthSections}</Stack>
              </Container>
            </div>
          </Collapse>
        </ImproeventLinkToastProvider>

        <LineSeparator />
      </PageContent>
      <FooterBar />
    </>
  );
};
