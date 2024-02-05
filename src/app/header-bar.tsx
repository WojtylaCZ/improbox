import { Navbar, Container, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

import { sendAnalyticsEvent, AnalyticsEvents } from "./analytics";
import { SelectLocaleDropdown } from "./select-locale-dropdown";

export const HeaderBar = () => {
  const { t } = useTranslation();

  const { locale: localeParam } = useParams();

  return (
    <Navbar
      sticky="top"
      variant="dark"
      expand="sm"
      collapseOnSelect
      style={{ backgroundColor: "#000000" }}
    >
      <Container style={{ maxWidth: "850px" }}>
        <Navbar.Brand
          className="pt-3"
          href={`/${localeParam ? localeParam : ""}`}
          onClick={() => sendAnalyticsEvent(AnalyticsEvents.MenuBrandClicked, {})}
        >
          <span
            style={{
              fontFamily: "Jockey One",
              color: "#dd2822",
              fontSize: "larger",
              alignSelf: "end",
            }}
          >
            IMPROBOX.CZ
          </span>
        </Navbar.Brand>

        <Navbar.Toggle className="border-secondary" aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" justify>
            {/* bootstrap 5: margin-start: auto */}
            <Nav.Link
              className="mx-2 text-light text-nowrap"
              href={`/${localeParam ? localeParam.concat("/#akce") : "#akce"}`}
              onClick={() => sendAnalyticsEvent(AnalyticsEvents.MenuEventsClicked, {})}
            >
              {t("menu.events")}
            </Nav.Link>
            {/* <Nav.Link
              className="mx-2 text-light text-nowrap"
              // href={`/${localeParam ? localeParam.concat("/jak-prispet") : "jak-prispet"}`}
              // onClick={() => sendAnalyticsEvent(AnalyticsEvents.MenuDonateClicked, {})}
            >
              {t("menu.donate")}
            </Nav.Link> */}
            <Nav.Link
              className="mx-2 text-light text-nowrap"
              href={`/${localeParam ? localeParam.concat("/o-webu") : "o-webu"}`}
              onClick={() => sendAnalyticsEvent(AnalyticsEvents.MenuAboutClicked, {})}
            >
              {t("menu.about")}
            </Nav.Link>
            <Nav.Item style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SelectLocaleDropdown />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
