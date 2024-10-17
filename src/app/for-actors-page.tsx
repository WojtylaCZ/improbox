import { useTranslation } from "react-i18next";
import { PageLayout } from "./page-structure/page-layout";
import { Stack } from "react-bootstrap";
import { BookItemCard } from "./book-item-card";
import { bookItemsTable } from "../assets/data/data-bookitems";

export const ForActorsPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <div style={{ width: "90%" }}>
        <h2
          style={{
            fontFamily: "Jockey One",
            textAlign: "center",
          }}
        >
          {t("pages.forActors.title")}
        </h2>
        <br />
        <span style={{ textAlign: "center" }}>{t("pages.forActors.1")}</span>
        <br />
        <br />
        <span style={{ textAlign: "center" }}>{t("pages.forActors.2")}</span>
        <br />
        <br />
        <div style={{ paddingBottom: "24px" }}>
          <h2
            style={{
              fontFamily: "Jockey One",
              fontSize: "calc(1.075rem + 1.1vw)",
            }}
          >
            {t(`Knihy`)}
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Stack gap={4}>
              {bookItemsTable.map((item, index) => (
                <BookItemCard key={index} bookItem={item} isFirst={false} />
              ))}
            </Stack>
          </div>
        </div>

        <iframe
          id="contactform"
          title="Book order contact form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdvy8FnJG-hLzFfiQjA3cTkZra824tmVx13UvUry3zyFxyxtQ/viewform?embedded=true"
          width="100%"
          height="1200px"
        >
          Načítání…
        </iframe>
      </div>
    </PageLayout>
  );
};
