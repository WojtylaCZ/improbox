import React, { useCallback, useEffect, useState } from "react";
import { Col, Collapse, Container, Row, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ImproEvent } from "../assets/data/data-improbox";
import { ChevronDownIcon } from "../assets/icons/chevronDown";
import { ChevronUpIcon } from "../assets/icons/chevronUp";
import ExternalLink from "../assets/icons/external-link.png";
import ShareIcon from "../assets/icons/share.png";

import { AnalyticsEvents, sendAnalyticsEvent } from "./analytics";
import { getEventTypeColor, useEventTypeLabel } from "./event-type";
import { useToast } from "./toast";

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
  const { showToast } = useToast();

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
      // window.scrollTo(0, 0);
    }
  }, [eventSlug, improEvent.slug, setIsExpanded, isFirst]);

  const handleExpandClick = useCallback(() => {
    if (!isExpanded) {
      sendAnalyticsEvent(AnalyticsEvents.ImproEventExpanded, `${improEvent.slug}`);
    }
    setIsExpanded(!isExpanded);
  }, [improEvent.slug, isExpanded]);

  const handleEventLinkClick = useCallback(() => {
    sendAnalyticsEvent(AnalyticsEvents.ImproEventLinkOpened, `${improEvent.slug}`);
  }, [improEvent.slug]);

  const handleOrganiseWebLinkClick = useCallback(() => {
    sendAnalyticsEvent(AnalyticsEvents.OrganiserWebsiteOpened, `${improEvent.organizers?.[0].id}`);
  }, [improEvent.organizers]);

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
        border: `${eventSlug === improEvent.slug ? "3px" : "1px"} solid ${
          eventSlug === improEvent.slug ? "#dd2822" : "#220101"
        }`,
        borderRadius: "8px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
      }}
      aria-controls="event-description-collapse"
      aria-expanded={isExpanded}
      ref={ref}
    >
      <div style={{ padding: "12px 8px" }}>
        <Container fluid>
          <Row>
            <Col xs={8} sm={3}>
              {/* DATE */}

              <a
                href={improEvent.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                onClick={handleEventLinkClick}
              >
                <div style={{ display: "flex", cursor: "pointer" }}>
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
              </a>
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
                    backgroundColor: `${getEventTypeColor(improEvent.eventType)}`,
                    fontSize: "12px",
                    textAlign: "right",
                    // maxWidth: "81px",
                  }}
                >
                  {useEventTypeLabel(improEvent.eventType)}
                </div>
                <div
                  style={{
                    marginTop: "6px",
                    display: "flex",
                    paddingRight: "8px",
                    alignSelf: "flex-end",
                    color: "#000000",
                    fontSize: "12px",
                    textAlign: "right",
                  }}
                >
                  <span>{improEvent.district}</span>
                </div>
              </div>
            </Col>

            <Col xs={10} sm={{ span: 6, order: 1 }}>
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
                    onClick={handleEventLinkClick}
                  >
                    {improEvent.name}
                    <Image
                      src={ExternalLink}
                      alt="External link icon."
                      style={{
                        marginLeft: "8px",
                        marginBottom: "4px",
                        maxWidth: "12px",
                        opacity: "0.4",
                      }}
                    />
                  </a>
                </div>
                <h3
                  style={{
                    color: "#dd2822",
                    fontSize: "16px",
                  }}
                >
                  {improEvent.organizers && improEvent.organizers.length > 0
                    ? improEvent.organizers.map((org) => org.name).join(" + ")
                    : improEvent.name}
                </h3>
              </div>
            </Col>

            <Col xs={2} sm={{ span: 1, order: 3 }}>
              {/* CHEVRON */}

              <div
                onClick={handleExpandClick}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    alignSelf: "center",
                    marginRight: "2px",
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

          <Container fluid style={{ padding: "0px 20px 12px 20px" }}>
            <Row>
              <Col xs={12} sm={{ order: 2, span: 3 }} style={{ paddingTop: "12px" }}>
                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `https://www.improbox.cz/event/${improEvent.slug}`
                    );
                    showToast();
                  }}
                  style={{
                    width: "100%",
                  }}
                >
                  {t("event.shareEvent")}
                  <Image
                    src={ShareIcon}
                    alt="Share this event."
                    style={{
                      width: "12px",
                      height: "12px",
                      opacity: "0.4",
                      marginLeft: "8px",
                    }}
                  />
                </Button>
              </Col>
              <Col
                xs={12}
                sm={{ order: 1, span: 9 }}
                style={{ paddingTop: "12px", display: "flex", alignItems: "center" }}
              >
                <span style={{ fontSize: "smaller" }}>
                  {improEvent.organizers && improEvent.organizers.length > 1
                    ? t("event.groupsWebsites")
                    : t("event.groupWebsite")}

                  {improEvent.organizers && improEvent.organizers?.length === 1 && (
                    <a
                      href={"http://" + improEvent.organizers[0].websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#000000" }}
                      onClick={handleOrganiseWebLinkClick}
                    >
                      {improEvent.organizers[0].websiteUrl}
                    </a>
                  )}

                  {improEvent.organizers && improEvent.organizers?.length > 1 && (
                    <>
                      {improEvent.organizers.map((org, index) => {
                        return (
                          <span key={index.toString()}>
                            <a
                              href={"http://" + org.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "#000000" }}
                              onClick={handleOrganiseWebLinkClick}
                            >
                              {org.websiteUrl}
                            </a>
                            {index < improEvent.organizers!.length - 1 && <>&nbsp; + &nbsp;</>}
                          </span>
                        );
                      })}
                    </>
                  )}
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </Collapse>
    </div>
  );
};
