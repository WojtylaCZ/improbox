import React, { useCallback } from "react";
import { Image, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useToast } from "../improventlink-toast";
import ShareIcon from "../../assets/icons/share.png";
import { AnalyticsEvents, sendAnalyticsEvent } from "../analytics";

export const ShareButton = ({ eventLanguage, slug }: { eventLanguage: string; slug: string }) => {
  const { t } = useTranslation();
  const { showToast } = useToast();

  const link = `https://improbox.cz/${eventLanguage === "en" ? "en/" : ""}event/${slug}`;

  const handleShareButtonClick = useCallback(async () => {
    sendAnalyticsEvent(AnalyticsEvents.ShareButtonClicked, `${slug}`);

    if (window.isSecureContext) {
      await navigator.clipboard.writeText(link);
      showToast();
    } else {
      const textarea = document.createElement("textarea");
      textarea.readOnly = true;
      textarea.value = link;

      // Move the textarea outside the viewport to make it invisible
      textarea.style.position = "absolute";
      textarea.style.left = "-99999999px";

      document.body.appendChild(textarea);

      // highlight the content of the textarea element
      textarea.select();

      try {
        document.execCommand("copy");
        showToast();
      } catch (err) {
        console.log(err);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }, [slug, link, showToast]);

  return (
    <Button
      variant="outline-dark"
      size="sm"
      onClick={handleShareButtonClick}
      style={{
        width: "100%",
      }}
    >
      {t("event.shareEvent")}
      <Image
        src={ShareIcon}
        alt="Share this event."
        style={{
          width: "12px",
          height: "12px",
          opacity: "0.4",
          marginLeft: "8px",
        }}
      />
    </Button>
  );
};
