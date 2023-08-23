import React, { useCallback, useEffect, useState } from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { ChevronDownIcon } from "../assets/icons/chevronDown";
import { ChevronUpIcon } from "../assets/icons/chevronUp";
import { useTranslation } from "react-i18next";
import { ImproEvent } from "../assets/data/data-improbox";
import ReactGA from "react-ga4";

ReactGA.initialize("G-0BFJTSYSSM");

export const ImproEventCard = ({
  improEvent,
  isFirst,
}: {
  improEvent: ImproEvent;
  isFirst: boolean;
}) => {
  const { t } = useTranslation();

  const { eventSlug } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = React.useRef<HTMLInputElement>(null);

  const scrollToTarget = () => {
    if (ref && ref.current) {
      const position = ref.current.getBoundingClientRect();
      window.scrollTo({ top: position.top, left: 0 });
    }
  };

  useEffect(() => {
    if (eventSlug === improEvent.slug) {
      setIsExpanded(true);
      scrollToTarget();
      return;
    }

    if (!eventSlug) {
      setIsExpanded(isFirst);
      window.scrollTo(0, 0);
    }
  }, [eventSlug, improEvent.slug, setIsExpanded, isFirst]);

  const handleClick = useCallback(() => {
    if (!isExpanded) {
      ReactGA.event({
        // action becomes the event name
        action: `improevent-expanded-${improEvent.slug}`,
        //  "event_category" becomes a custom parameter
        category: `${improEvent.slug}`,
      });
    }
    setIsExpanded(!isExpanded);
  }, [improEvent.slug, isExpanded]);

  const eventPlay = Date.parse(improEvent.playDate);
  const eventPlayDate = new Date(eventPlay);
  const todayDate = Date.now();

  // past event is 24 hours old
  const isPastEvent = eventPlay < todayDate - 86400000;

  const dayNames = [
    t("dataLabels.sunday"),
    t("dataLabels.monday"),
    t("dataLabels.tuesday"),
    t("dataLabels.wednesday"),
    t("dataLabels.thursday"),
    t("dataLabels.friday"),
    t("dataLabels.saturday"),
  ];

  const monthNames = [
    t("dataLabels.januaryShort"),
    t("dataLabels.februaryShort"),
    t("dataLabels.marchShort"),
    t("dataLabels.aprilShort"),
    t("dataLabels.mayShort"),
    t("dataLabels.juneShort"),
    t("dataLabels.julyShort"),
    t("dataLabels.augustShort"),
    t("dataLabels.septemberShort"),
    t("dataLabels.octoberShort"),
    t("dataLabels.novemberShort"),
    t("dataLabels.decemberShort"),
  ];

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #220101",
        borderRadius: "8px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
      }}
      aria-controls="event-description-collapse"
      aria-expanded={isExpanded}
      ref={ref}
    >
      <style type="text/css">
        {`
          .eventHeader:hover {
            background-color: #F8F8F8;
            border-radius: 8px;

          }
        
          `}
      </style>
      <div className="eventHeader" style={{ padding: "12px 8px" }}>
        <Container
          onClick={handleClick}
          style={{
            cursor: "pointer",
          }}
          fluid
        >
          <Row>
            <Col xs={8} sm={3}>
              {/* DATE */}
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    marginRight: "6px",
                    marginTop: "12px",
                    fontSize: "12px",
                    color: isPastEvent ? "#aaa8a8" : undefined, //default color,
                  }}
                >
                  {dayNames[eventPlayDate.getDay()]}
                </span>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <span
                    style={{
                      fontSize: "40px",
                      color: isPastEvent ? "#aaa8a8" : undefined, //default color,
                    }}
                  >
                    {eventPlayDate.getDate()}
                  </span>
                  <span
                    style={{
                      marginLeft: "4px",
                      fontSize: "12",
                      color: isPastEvent ? "#aaa8a8" : undefined, //default color
                    }}
                  >
                    {monthNames[eventPlayDate.getMonth()]}
                  </span>
                </div>
              </div>
            </Col>

            <Col xs={4} sm={{ span: 3, order: 2 }}>
              {/* MISC */}

              <div
                style={{
                  display: "flex",
                  height: "100%",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "4px 8px",
                    alignSelf: "flex-end",
                    borderRadius: "4px",
                    backgroundColor: `${improEvent.eventType === "play" ? "#FFF7D9" : "#FFD9E7"}`,
                    fontSize: "12px",
                    maxWidth: "81px",
                  }}
                >
                  {improEvent.eventType === "play"
                    ? t("dataLabels.play")
                    : t("dataLabels.workshop")}
                </div>
                <div
                  style={{
                    marginTop: "6px",

                    display: "flex",
                    paddingRight: "8px",
                    alignSelf: "flex-end",
                    color: "#000000",
                    fontSize: "12px",
                  }}
                >
                  <span>{improEvent.district}</span>
                </div>
              </div>
            </Col>

            <Col xs={11} sm={{ span: 5, order: 1 }}>
              {/* EVENT NAME */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <a
                    href={improEvent.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "Jockey One",
                      fontSize: "20px",
                      color: isPastEvent ? "#878787" : "#000000",
                    }}
                  >
                    {improEvent.name}
                  </a>
                </div>
                <h3
                  style={{
                    color: "#dd2822",
                    fontSize: "16px",
                  }}
                >
                  {improEvent.organizer.id === "unknown"
                    ? improEvent.name
                    : improEvent.organizer.name}
                </h3>
              </div>
            </Col>

            <Col xs={1} sm={{ span: 1, order: 3 }}>
              {/* CHEVRON */}

              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  marginRight: "8px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    alignSelf: "center",
                  }}
                >
                  {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Collapse in={isExpanded}>
        <div id="event-description-collapse">
          <hr style={{ marginTop: "0px", marginBottom: "0px" }} />

          <Container>
            <Row>
              <span style={{ margin: "12px", fontSize: "12px" }}>
                {t("event.groupWebsite")}

                <a
                  href={"http://" + improEvent.organizer.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#000000" }}
                >
                  {improEvent.organizer.websiteUrl}
                </a>
              </span>
            </Row>
          </Container>
        </div>
      </Collapse>
    </div>
  );
};
