import { useTranslation } from "react-i18next";

export const PageHeaderImage = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "1400px",
        height: "400px",
        position: "relative",
        width: "100%",
        backgroundImage: `url("/improbox2048.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        borderRadius: "0px 0px 12px 12px",
        boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.10)",
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
        {t("titles.mainH1")}
      </h1>
    </div>
  );
};
