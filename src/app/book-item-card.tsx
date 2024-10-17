import React, { useCallback, useEffect, useState } from "react";
import { Col, Collapse, Container, Row, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ChevronDownIcon } from "../assets/icons/chevronDown";
import { ChevronUpIcon } from "../assets/icons/chevronUp";
import ExternalLink from "../assets/icons/external-link.png";
import { BookItem, ImproEvent } from "../assets/data/types";
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

export const BookItemCard = ({ bookItem, isFirst }: { bookItem: BookItem; isFirst: boolean }) => {
  const { t } = useTranslation();

  const { eventSlug: eventSlugParam } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = React.useRef<HTMLInputElement>(null);

  const bookItemId = bookItem.id;

  const scrollToTarget = () => {
    if (ref && ref.current) {
      const position = ref.current.getBoundingClientRect();
      window.scrollTo({ top: position.top, left: 0 });
    }
  };

  useEffect(() => {
    if (eventSlugParam === bookItemId) {
      setIsExpanded(true);
      scrollToTarget();
      return;
    }

    if (!eventSlugParam) {
      setIsExpanded(isFirst);
      // window.scrollTo(0, 0);
    }
  }, [eventSlugParam, bookItemId, setIsExpanded, isFirst]);

  // const handleExpandClick = useCallback(() => {
  //   if (!isExpanded) {
  //     sendAnalyticsEvent(AnalyticsEvents.ImproEventExpanded, { improEventSlug: bookItemSlug });
  //   } else {
  //     sendAnalyticsEvent(AnalyticsEvents.ImproEventCollapsed, { improEventSlug: bookItemSlug });
  //   }
  //   setIsExpanded(!isExpanded);
  // }, [bookItemSlug, isExpanded]);

  const handleEventLinkClick = useCallback(() => {
    sendAnalyticsEvent(AnalyticsEvents.BuyBookClicked, { improBookId: bookItemId });
  }, [bookItemId]);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: `${eventSlugParam === bookItemId ? "3px" : "1px"} solid ${
          eventSlugParam === bookItemId ? "#dd2822" : "#220101"
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
            <Col xs={12} sm={3} md={2}>
              <div style={{ margin: "auto", maxWidth: "170px" }}>
                <Image src={bookItem.image} thumbnail />
              </div>
            </Col>
            <Col xs={12} sm={{ span: 5, order: 1 }} md={{ span: 5, order: 1 }}>
              {/* BOOK NAME */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "Jockey One",
                      fontSize: "20px",
                      color: "#000000",
                    }}
                  >
                    {bookItem.title}
                  </span>
                </div>
                <h3
                  style={{
                    color: "#dd2822",
                    fontSize: "16px",
                  }}
                >
                  {bookItem.author}
                </h3>
              </div>
            </Col>
            <Col xs={12} sm={{ span: 1, order: 2 }} md={2}>
              {/* state */}

              <div
                style={{
                  display: "flex",
                  height: "100%",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "4px 8px",
                    // alignSelf: "center",
                    borderRadius: "4px",
                    // backgroundColor: `${getEventTypeColor(bookItem.businessType)}`,
                    backgroundColor: `#FFF7D9`,
                    fontSize: "12px",
                    // textAlign: "right",
                    // maxWidth: "81px",
                  }}
                >
                  {/* {useEventTypeLabel(bookItem.eventType)} */}
                  {/* {bookItem.inventoryState} */}
                  {bookItem.language === "cs"
                    ? t(`dataLabels.CsEventLanguage`)
                    : t(`dataLabels.EnEventLanguage`)}
                </div>
                {/* <div
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
                  <span>{bookItem.district}</span>
                </div> */}
              </div>
            </Col>
            <Col xs={12} sm={{ span: 3, order: 3 }}>
              {/* Cena */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <span
                    style={{
                      fontSize: "40px",
                      // color: isPastEvent ? "#aaa8a8" : undefined, //default color,
                    }}
                  >
                    {bookItem.priceCZK}
                  </span>
                  <span
                    style={{
                      marginLeft: "4px",
                      fontSize: "12",
                    }}
                  >
                    {t(`Kč`)}
                  </span>
                </div>

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
                      size="lg"
                      href="#contactform"
                      onClick={handleEventLinkClick}
                    >
                      {t("eshop.item.buy")}
                      {/* <Image
                        src={ExternalLink}
                        alt="External link icon."
                        style={{
                          marginLeft: "8px",
                          marginBottom: "4px",
                          maxWidth: "12px",
                          opacity: "0.4",
                        }}
                      /> */}
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            {/* <Col xs={12} sm={{ span: 12, order: 4 }} md={{ span: 1, order: 4 }}>
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
                <span style={{ fontSize: "small" }}>
                  {isExpanded ? t("text.lessInfo") : t("text.moreInfo")}
                </span>

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
            </Col> */}
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
                TODO
              </Col>
              <Col xs={12} sm={{ order: 3, span: 3 }} style={{ paddingTop: "12px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {/* <ShareButton eventLanguage={bookItem.language} slug={bookItemSlug} /> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Collapse>
    </div>
  );
};
