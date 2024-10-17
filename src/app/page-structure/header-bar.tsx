import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

import { sendAnalyticsEvent, AnalyticsEvents } from "../analytics";
import { SelectLocaleDropdown } from "./select-locale-dropdown";

import FbIcon from "./../../assets/img/fb.png";
import IgIcon from "./../../assets/img/ig.png";

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
      <Container style={{ maxWidth: "1080px" }}>
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
            <Nav.Link
              className="mx-2 text-light text-nowrap"
              href={`/${localeParam ? localeParam.concat("/pro-hrace") : "pro-hrace"}`}
              onClick={() => sendAnalyticsEvent(AnalyticsEvents.MenuForActorsClicked, {})}
            >
              {t("menu.forActors")}
            </Nav.Link>
            <Nav.Link
              className="mx-2 text-light text-nowrap"
              href={`/${localeParam ? localeParam.concat("/pro-poradatele") : "pro-poradatele"}`}
              onClick={() => sendAnalyticsEvent(AnalyticsEvents.MenuForOrganisersClicked, {})}
            >
              {t("menu.forOrganisers")}
            </Nav.Link>
            <Nav.Link
              className="mx-2 text-light text-nowrap"
              href={`/${localeParam ? localeParam.concat("/o-webu") : "o-webu"}`}
              onClick={() => sendAnalyticsEvent(AnalyticsEvents.MenuAboutClicked, {})}
            >
              {t("menu.about")}
            </Nav.Link>
            <Nav.Item className="mx-2 d-flex justify-content-center align-items-center">
              <div
                className="d-flex justify-content-center align-items-center pb-1"
                style={{ height: "40px" }}
              >
                <a href={"https://www.facebook.com/improbox.cz"}>
                  <Image
                    src={FbIcon}
                    alt="Facebook"
                    width="20px"
                    height="22px"
                    style={{ marginRight: "10px" }}
                  />
                </a>
                <a href={"https://www.instagram.com/improbox.cz"}>
                  <Image src={IgIcon} alt="Instagram" width="20px" height="22px" />
                </a>
              </div>
            </Nav.Item>
            <Nav.Item className="mx-2 d-flex justify-content-center align-items-center">
              <SelectLocaleDropdown />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
