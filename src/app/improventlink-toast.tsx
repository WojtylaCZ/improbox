/**
 * Copyright (c) ProductBoard, Inc.
 * All rights reserved.
 */
import { ReactNode, createContext, useContext, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useTranslation } from "react-i18next";

type ToastInterface = {
  showToast: () => void;
};

type ContextNotProvided = undefined;

const ToastContext = createContext<ToastInterface | ContextNotProvided>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context)
    throw new Error("ToastContext is undefined. Have you used it within ToastContextProvider?");

  return context;
};

export const ImproeventLinkToastProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation();

  const [showToast, setShowToast] = useState(false);

  const triggerShowToast = () => setShowToast(true);

  return (
    <ToastContext.Provider value={{ showToast: triggerShowToast }}>
      <ToastContainer position="top-center" className="position-fixed">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          onClick={() => setShowToast(false)}
          bg="primary"
          delay={2500}
          autohide
          style={{ width: "200px" }}
        >
          {/* <Toast.Header>{t("alerts.linkCopied")}</Toast.Header> */}
          <Toast.Body className="text-white">{t("alerts.linkCopied")}</Toast.Body>
        </Toast>
      </ToastContainer>
      {children}
    </ToastContext.Provider>
  );
};
