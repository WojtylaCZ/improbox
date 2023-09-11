import { useCallback, useEffect, useState } from "react";
import { Collapse, Container, Image, Stack } from "react-bootstrap";
import { MonthCalendarSection } from "./month-calendar-section";
import Actors from "../assets/img/actors612.jpeg";
import MailIcon from "../assets/img/mail.png";

import { data } from "../assets/data/data-improbox";

import { useNavigate, useParams } from "react-router-dom";

import { useTranslation, Trans } from "react-i18next";
import { HeaderBar } from "./header-bar";
import { supportedLocales } from "./i18n";
import { FooterBar } from "./footer-bar";
import { ChevronUpIcon } from "../assets/icons/chevronUp";
import { ChevronDownIcon } from "../assets/icons/chevronDown";

export const Main = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { eventSlug, locale } = useParams();

  useEffect(() => {
    if (locale && !supportedLocales.includes(locale)) {
      navigate("/", { replace: true });
    }
    const slugs = data.flatMap((district) => district.events).map((t) => t.slug);
    if (eventSlug && !slugs.includes(eventSlug)) {
      navigate("/", { replace: true });
    }
  }, [navigate, eventSlug, locale]);

  const todayDate = Date.now();

  const upcomingEvents = data.filter((district) => {
    return (
      Date.parse(district.monthDate) > todayDate ||
      new Date(district.monthDate).getMonth() === new Date(todayDate).getMonth()
    );
  });

  upcomingEvents.sort((a, b) => {
    return Date.parse(a.monthDate) - Date.parse(b.monthDate);
  });

  const pastEvents = data.filter((district) => {
    return (
      Date.parse(district.monthDate) < todayDate ||
      new Date(district.monthDate).getMonth() === new Date(todayDate).getMonth()
    );
  });

  pastEvents.sort((a, b) => {
    return Date.parse(b.monthDate) - Date.parse(a.monthDate);
  });

  const upcomingMonthSections = upcomingEvents.map((monthSection, id) => (
    <MonthCalendarSection
      key={id}
      monthSection={monthSection}
      isFirst={id === 0}
      isForUpcomingEvents={true}
    />
  ));

  const pastMonthSections = pastEvents.map((monthSection, id) => (
    <MonthCalendarSection
      key={id}
      monthSection={monthSection}
      isFirst={false}
      isForUpcomingEvents={false}
    />
  ));

  const [isMailFormExpanded, setIsMailFormExpanded] = useState(false);

  const handleMailFormClick = useCallback(() => {
    setIsMailFormExpanded(!isMailFormExpanded);
  }, [isMailFormExpanded]);

  const [isPastEventsSectionExpanded, setIsPastEventsSectionExpanded] = useState(true);

  const handlePastEventsSectionClick = useCallback(() => {
    setIsPastEventsSectionExpanded(!isPastEventsSectionExpanded);
  }, [isPastEventsSectionExpanded]);

  return (
    <>
      <HeaderBar />
      <div
        style={{
          margin: "auto",
          maxWidth: "1400px",
          height: "500px",
          position: "relative",
          width: "100%",
          backgroundImage: `url("https://uploads-ssl.webflow.com/6449ba271e8d58c3c47c1dce/64764a32d875dac6c84b98f6_desktop-hero-img.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontFamily: "Jockey One",
            zIndex: "10",
            position: "absolute",
            left: "0px",
            bottom: "8%",
            right: "0px",
            fontSize: "calc(0.975rem + 1.2vw)",
          }}
        >
          {t("titles.mainH1")}
        </h1>
      </div>

      <Stack
        gap={4}
        style={{
          alignItems: "center",
          width: "95%",
          margin: "auto",
          maxWidth: "690px",
          marginBottom: "44px",
          marginTop: "16px",
        }}
      >
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
              fontSize: "12px",
              marginTop: "4px",
              marginBottom: "12px",
            }}
          >
            {t("text.introLine1")}
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "8px",
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
            <span
              style={{
                fontFamily: "Jockey One",
                fontSize: "20px",
                color: "#dd2822",
                textDecoration: "underline",
              }}
            >
              {t("text.introLine2")}
            </span>
          </div>
          <Collapse in={isMailFormExpanded}>
            <iframe
              title="improbox"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfTwRDWECT_qKbiv0jGmzSXw5QgXqIqK3P0blyFqOwLucoBEw/viewform?embedded=true"
              width={400}
              height={500}
              id="email-subscription-collapse"
            >
              Načítání…
            </iframe>
          </Collapse>

          <hr
            style={{
              width: "110px",
              color: "#dd2822",
              border: 0,
              borderTop: "1px solid",
              opacity: "90%",
            }}
          />
        </div>

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

        <Container
          onClick={handlePastEventsSectionClick}
          style={{
            cursor: "pointer",
          }}
          aria-controls="past-events-collapse"
          aria-expanded={isPastEventsSectionExpanded}
        >
          <div
            className="detailDropdown"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                paddingRight: "0.6em",
                fontFamily: "Jockey One",
              }}
            >
              {isPastEventsSectionExpanded
                ? t("titles.hidePastEvents")
                : t("titles.showPastEvents")}
            </h2>

            <div style={{ width: "10px", marginBottom: "8px" }}>
              {isPastEventsSectionExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
          </div>
        </Container>

        <Collapse in={isPastEventsSectionExpanded}>
          <div id="past-events-collapse">
            <Container>
              <Stack gap={5}>{pastMonthSections}</Stack>
            </Container>
          </div>
        </Collapse>

        <hr
          style={{
            width: "110px",
            color: "#dd2822",
            border: 0,
            borderTop: "1px solid",
            opacity: "90%",
            marginTop: "64px",
            marginBottom: "16px",
          }}
        />

        <Image
          src={Actors}
          alt="Theather actors siluetes."
          style={{
            maxWidth: "300px",
            width: "100%",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontFamily: "Jockey One",
              color: "#dd2822",
              marginBottom: "24px",
              fontSize: "calc(1.775rem + 1.1vw)",
            }}
          >
            {t("titles.contactH2")}
          </h2>
          <span>
            <Trans i18nKey="text.madeBy">
              before
              <a
                href={"https://www.facebook.com/WojtylaCZ/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Vojtěch Uhlíř
              </a>
              after
            </Trans>
          </span>
          <br />
          <span>
            <Trans i18nKey="text.alsoMade">
              before
              <a href={"https://www.prispevkynabezky.cz"} target="_blank" rel="noopener noreferrer">
                Vojtěch Uhlíř
              </a>
              after
            </Trans>
          </span>
        </div>
      </Stack>
      <FooterBar />
    </>
  );
};
