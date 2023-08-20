import { Container, Image, Navbar, Stack } from "react-bootstrap";
import Actors from "../assets/img/actors612.jpeg";
import { useTranslation } from "react-i18next";

export const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <style type="text/css">
        {`
        .navbar-custom {
          background-color: #000000;
        }
        `}
      </style>

      <Navbar variant="custom">
        <Container
          style={{
            maxWidth: "1080px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <h3
              style={{
                fontFamily: "Jockey One",
                color: "#dd2822",
                fontSize: "64px",
                margin: "0px",
              }}
            >
              IMPROBOX.CZ
            </h3>
          </div>

          {/* <SelectLocaleDropdown /> */}
        </Container>
      </Navbar>

      <div
        style={{
          margin: "auto",
          maxWidth: "1400px",
          height: "500px",
          position: "relative",
          width: "100%",
          backgroundImage: `url("https://uploads-ssl.webflow.com/6449ba271e8d58c3c47c1dce/64764a32d875dac6c84b98f6_desktop-hero-img.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontFamily: "Jockey One",
            zIndex: "10",
            position: "absolute",
            left: "0px",
            bottom: "8%",
            right: "0px",
            fontSize: "calc(0.975rem + 1.2vw)",
          }}
        >
          Oops!
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
        <span>{t("titles.error")}</span>
        <hr
          style={{
            width: "120px",
            color: "#dd2822",
            border: 0,
            borderTop: "1px solid",
            opacity: "90%",
          }}
        />

        <a
          style={{
            color: "#dd2822",
          }}
          href="/"
        >
          {t("titles.jumpHome")}
        </a>

        <Image
          src={Actors}
          style={{
            maxWidth: "60%",
            width: "100%",
            opacity: "60%",
          }}
        />
      </Stack>
    </>
  );
};
