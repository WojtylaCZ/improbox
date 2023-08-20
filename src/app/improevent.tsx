import React, { useCallback, useEffect, useState } from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { ChevronDownIcon } from "../assets/icons/chevronDown";
import { ChevronUpIcon } from "../assets/icons/chevronUp";
// import FacebookIcon from "../assets/icons/facebook.svg";
// import ReactGA from "react-ga4";
import { useTranslation } from "react-i18next";
import { ImproEvent } from "../assets/data/data-improbox";

// ReactGA.initialize("G-TJGECJ2MHV");

export const ImproEventCard = ({
  improEvent,
  isFirst,
}: {
  improEvent: ImproEvent;
  isFirst: boolean;
}) => {
  const { t } = useTranslation();

  const { trailparkSlug } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = React.useRef<HTMLInputElement>(null);

  const scrollToTarget = () => {
    if (ref && ref.current) {
      const position = ref.current.getBoundingClientRect();
      window.scrollTo({ top: position.top, left: 0 });
    }
  };

  useEffect(() => {
    if (trailparkSlug === improEvent.slug) {
      setIsExpanded(true);
      scrollToTarget();
      return;
    }

    if (!trailparkSlug) {
      setIsExpanded(isFirst);
      window.scrollTo(0, 0);
    }
  }, [trailparkSlug, improEvent.slug, setIsExpanded, isFirst]);

  const handleClick = useCallback(() => {
    if (!isExpanded) {
      // ReactGA.event("trailparkcard_expanded", {
      //   trailparkId: trailpark.id,
      // });
      // ReactGA.event({
      //   // action becomes the event name
      //   action: `trailparkcardexpanded2_${trailpark.id}`,
      //   //  "event_category" becomes a custom parameter
      //   category: `${trailpark.id}`,
      // });
    }
    setIsExpanded(!isExpanded);
  }, [improEvent.id, isExpanded]);

  const eventPlay = Date.parse(improEvent.playDate);
  const eventPlayDate = new Date(eventPlay);
  const todayDate = Date.now();

  const isPastEvent = eventPlay < todayDate;

  const dayNames = ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"];

  const monthNames = [
    "led.",
    "Úno.",
    "Bře.",
    "Dub.",
    "Kvě.",
    "Čvn.",
    "Čvc.",
    "Srp.",
    "Zář.",
    "Říj.",
    "Lis.",
    "Pro.",
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
          .trailparkHeader:hover {
            background-color: #F8F8F8;
            border-radius: 8px;

          }
        
          `}
      </style>
      <div className="trailparkHeader" style={{ padding: "14px" }}>
        <Container
          onClick={handleClick}
          style={{
            cursor: "pointer",
          }}
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

            <Col xs={4} sm={{ span: 2, order: 2 }}>
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
                  {improEvent.eventType === "play" ? "Představení" : "Workshop"}
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

            <Col xs={11} sm={{ span: 6, order: 1 }}>
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
        {/* </div> */}
      </div>
      <Collapse in={isExpanded}>
        <div id="event-description-collapse">
          <hr style={{ marginTop: "0px", marginBottom: "0px" }} />

          <Container>
            <Row>
              <span style={{ margin: "12px", fontSize: "12px" }}>
                {t("trailpark.lastUpdatedAt")}

                <a
                  href={improEvent.websiteUrl}
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
