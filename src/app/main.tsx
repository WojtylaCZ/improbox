import { useEffect } from "react";
import { Image, Stack } from "react-bootstrap";
import { MonthCalendarSection } from "./month-calendar-section";
import Actors from "../assets/img/actors612.jpeg";

import { data } from "../assets/data/data-improbox";
import { useNavigate, useParams } from "react-router-dom";

import { useTranslation, Trans } from "react-i18next";
import { HeaderBar } from "./header-bar";
import { supportedLocales } from "./i18n";
import { FooterBar } from "./footer-bar";

export const Main = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { trailparkSlug, locale } = useParams();

  useEffect(() => {
    if (locale && !supportedLocales.includes(locale)) {
      navigate("/", { replace: true });
    }
    const slugs = data.flatMap((district) => district.events).map((t) => t.slug);
    if (trailparkSlug && !slugs.includes(trailparkSlug)) {
      navigate("/", { replace: true });
    }
  }, [navigate, trailparkSlug, locale]);

  const districtsList = data.map((district, id) => (
    <MonthCalendarSection
      key={id}
      name={district.monthName}
      improEvents={district.events}
      isFirst={id === 0}
    />
  ));

  return (
    <>
      <HeaderBar />
      <div
        style={{
          margin: "auto",
          maxWidth: "1400px",
          height: "800px",
          position: "relative",
          width: "100%",
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #FFFFFF 92.61%), url("https://www.theatre-impro.be/assets/img/backgrounds/1@2x.jpg")`,
          // "Tiia Monto, CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0, via Wikimedia Commons",
          backgroundSize: "cover",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontFamily: "Kaushan Script",
            zIndex: "10",
            position: "absolute",
            left: "0px",
            bottom: "50%",
            right: "0px",
            fontSize: "calc(1.975rem + 1.3vw)",
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
          marginBottom: "16px",
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
          <span>{t("text.introLine1")}</span>

          <span>{t("text.introLine2")}</span>
          <br />
          <span>{t("text.introLine3")}</span>
          <hr
            style={{
              width: "100px",
              color: "#c51515",
              border: 0,
              borderTop: "1px solid",
              opacity: "90%",
            }}
          />
        </div>

        <Stack gap={5}>{districtsList}</Stack>

        <Image
          src={Actors}
          style={{
            maxWidth: "300px",
            width: "100%",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Kaushan Script",
              color: "#c51515",
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
          <span>{t("text.footerLine1")}</span>
        </div>
        <div
          style={{
            color: "#0a3383",
            textAlign: "center",
          }}
        >
          <span>{t("text.footerLine2")}</span>
          <br />
          <a href={"https://www.facebook.com/WojtylaCZ/"} target="_blank" rel="noopener noreferrer">
            {t("text.footerLine3")}
          </a>
        </div>
      </Stack>
      <FooterBar />
    </>
  );
};
