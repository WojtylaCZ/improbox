import { useTranslation } from "react-i18next";
import { PageLayout } from "./page-structure/page-layout";
import { Stack } from "react-bootstrap";

export const ForOrganisersPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <h2
        style={{
          fontFamily: "Jockey One",
        }}
      >
        {t("pages.forOrganisers.title")}
      </h2>
      <Stack>
        <span style={{ textAlign: "center" }}>{t("pages.forOrganisers.1")}</span>
        <br />
        <span style={{ textAlign: "center" }}>{t("pages.forOrganisers.2")}</span>
        <br />
        <span style={{ textAlign: "center" }}>{t("pages.forOrganisers.3")}</span>
        <br />
        <span style={{ textAlign: "center" }}>{t("pages.forOrganisers.4")}</span>
        <iframe
          title="Feedback"
          src="https://docs.google.com/forms/d/e/1FAIpQLSejGG8NV6FbXSAO-sjIrWoqX29FY1CmNx2cuHbe-aMoSS2veg/viewform?embedded=true"
          width={"100%"}
          height={700}
        >
          Načítání…
        </iframe>
      </Stack>
    </PageLayout>
  );
};
