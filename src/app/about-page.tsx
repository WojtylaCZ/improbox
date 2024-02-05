import { Trans, useTranslation } from "react-i18next";

import { FooterBar } from "./footer-bar";
import { HeaderBar } from "./header-bar";
import { PageContent } from "./page-content";
import { PageHeaderImage } from "./page-header-image";
import { LineSeparator } from "./line-separator";

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderBar />
      <PageHeaderImage />
      <PageContent>
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
              fontFamily: "Jockey One",
              marginBottom: "24px",
              fontSize: "calc(1.775rem + 1.1vw)",
            }}
          >
            {t("titles.aboutH2")}
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
              <a href={"https://www.improbox.cz"} target="_blank" rel="noopener noreferrer">
                Vojtěch Uhlíř
              </a>
              after
            </Trans>
          </span>
        </div>

        <LineSeparator />
        <div
          style={{
            color: "#0a3383",
            textAlign: "center",
          }}
        >
          <span>{t("text.footerLine2")}</span>
          <br />
          <a
            href={"https://www.facebook.com/improbox.cz"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("text.footerLine3")}
          </a>
        </div>
      </PageContent>
      <FooterBar />
    </>
  );
};
