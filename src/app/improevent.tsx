import React, { useCallback, useEffect, useState } from "react";
import { Col, Collapse, Container, Row, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ChevronDownIcon } from "../assets/icons/chevronDown";
import { ChevronUpIcon } from "../assets/icons/chevronUp";
import ExternalLink from "../assets/icons/external-link.png";
import { ImproEvent } from "../assets/data/types";
import { organizersTable } from "../assets/data/data-organizers";

import { AnalyticsEvents, sendAnalyticsEvent } from "./analytics";
import { getEventTypeColor, useEventTypeLabel } from "./event-type";
import { ShareButton } from "./improevent/sharebutton";

export const getImproEventSlug = (improEvent: ImproEvent) => {
  return improEvent.playDate
    .concat("-")
    .concat(
      improEvent.organizerIds.length ? improEvent.organizerIds.join("-") : improEvent.eventType
    )
    .concat(improEvent.slugExtra ? `-${improEvent.slugExtra}` : "");
};

export const ImproEventCard = ({
  improEvent,
  isFirst,
}: {
  improEvent: ImproEvent;
  isFirst: boolean;
}) => {
  const { t } = useTranslation();

  const { eventSlug: eventSlugParam } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = React.useRef<HTMLInputElement>(null);

  const improEventSlug = getImproEventSlug(improEvent);
  const improEventOrganizers = improEvent.organizerIds.map((oId) => {
    return organizersTable.find((o) => o.id === oId)!;
  });

  const scrollToTarget = () => {
    if (ref && ref.current) {
      const position = ref.current.getBoundingClientRect();
      window.scrollTo({ top: position.top, left: 0 });
    }
  };

  useEffect(() => {
    if (eventSlugParam === improEventSlug) {
      setIsExpanded(true);
      scrollToTarget();
      return;
    }

    if (!eventSlugParam) {
      // setIsExpanded(isFirst);
      // window.scrollTo(0, 0);
    }
  }, [eventSlugParam, improEventSlug, setIsExpanded, isFirst]);

  const handleExpandClick = useCallback(() => {
    if (!isExpanded) {
      sendAnalyticsEvent(AnalyticsEvents.ImproEventExpanded, { improEventSlug: improEventSlug });
    } else {
      sendAnalyticsEvent(AnalyticsEvents.ImproEventCollapsed, { improEventSlug: improEventSlug });
    }
    setIsExpanded(!isExpanded);
  }, [improEventSlug, isExpanded]);

  const handleEventLinkClick = useCallback(() => {
    sendAnalyticsEvent(AnalyticsEvents.ImproEventLinkOpened, { improEventSlug: improEventSlug });
  }, [improEventSlug]);

  const handleOrganiseWebLinkClick = useCallback(() => {
    sendAnalyticsEvent(AnalyticsEvents.OrganiserWebsiteOpened, { improEventSlug: improEventSlug });
  }, [improEventSlug]);

  const eventPlay = Date.parse(improEvent.playDate);
  const eventPlayDate = new Date(eventPlay);
  const todayDate = Date.now();

  // past event is 24 hours old
  const isPastEvent = eventPlay < todayDate - 86400000;

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: `${eventSlugParam === improEventSlug ? "3px" : "1px"} solid ${
          eventSlugParam === improEventSlug ? "#dd2822" : "#220101"
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
            <Col xs={8} sm={3} md={2}>
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
                  {t(`dataLabels.weekDays.${new Date(eventPlayDate).getDay()}.shortName`)}
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
                    {t(`dataLabels.months.${eventPlayDate.getMonth() + 1}.shortName`)}
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
                    alignSelf: "center",
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
                    alignSelf: "center",
                    color: "#000000",
                    fontSize: "12px",
                    textAlign: "right",
                  }}
                >
                  <span>{improEvent.district}</span>
                </div>
              </div>
            </Col>

            <Col xs={8} sm={{ span: 4, order: 1 }} md={{ span: 5, order: 1 }}>
              {/* EVENT NAME */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
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
                  </a>
                </div>
                <h3
                  style={{
                    color: "#dd2822",
                    fontSize: "16px",
                  }}
                >
                  {improEventOrganizers.length > 0 &&
                    improEventOrganizers.map((org) => org.name).join(" + ")}
                </h3>
              </div>
            </Col>

            <Col xs={4} sm={{ span: 3, order: 3 }}>
              {/* CHEVRON */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="outline-dark"
                    size="sm"
                    href={improEvent.websiteUrl}
                    onClick={handleEventLinkClick}
                  >
                    {t("event.openEventLink")}
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
                  </Button>
                  <div
                    onClick={handleExpandClick}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "8px",
                      height: "100%",
                    }}
                  >
                    <span style={{ fontSize: "small" }}> {t("event.more")}</span>

                    <div
                      style={{
                        display: "flex",
                        width: "10px",
                        height: "1em",
                        marginLeft: "8px",
                      }}
                    >
                      {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </div>
                  </div>
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
              <Col xs={0} sm={{ order: 1, span: 3 }} md={{ order: 1, span: 2 }}></Col>
              <Col
                xs={12}
                sm={{ order: 2, span: 6 }}
                md={{ order: 2, span: 7 }}
                style={{ paddingTop: "12px", display: "flex", alignItems: "center" }}
              >
                <span style={{ fontSize: "smaller" }}>
                  {improEventOrganizers.length > 1
                    ? t("event.groupsWebsites")
                    : t("event.groupWebsite")}

                  {improEventOrganizers.length > 0 && improEventOrganizers.length === 1 && (
                    <a
                      href={"http://" + improEventOrganizers[0].websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#000000" }}
                      onClick={handleOrganiseWebLinkClick}
                    >
                      {improEventOrganizers[0].websiteUrl}
                    </a>
                  )}

                  {improEventOrganizers.length > 0 && improEventOrganizers.length > 1 && (
                    <>
                      {improEventOrganizers.map((org, index) => {
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
                            {index < improEventOrganizers.length - 1 && <>&nbsp; + &nbsp;</>}
                          </span>
                        );
                      })}
                    </>
                  )}
                </span>
              </Col>
              <Col xs={12} sm={{ order: 3, span: 3 }} style={{ paddingTop: "12px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <ShareButton eventLanguage={improEvent.language} slug={improEventSlug} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Collapse>
    </div>
  );
};
