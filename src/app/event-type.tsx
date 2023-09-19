import { useTranslation } from "react-i18next";
import { EventType } from "../assets/data/data-improbox";

export const getEventTypeColor = (eventType: EventType) => {
  switch (eventType) {
    case "play":
      return "#FFF7D9";
    case "workshop":
      return "#FFD9E7";
    case "coursework":
      return "#d3eff0";
    case "unknown":
      return "#FFFFFF";
  }
};

export const useEventTypeLabel = (eventType: EventType) => {
  const { t } = useTranslation();

  switch (eventType) {
    case "play":
      return t("dataLabels.play");
    case "workshop":
      return t("dataLabels.workshop");
    case "coursework":
      return t("dataLabels.coursework");
    case "unknown":
      return "?";
  }
};
