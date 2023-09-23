/**
 * Copyright (c) ProductBoard, Inc.
 * All rights reserved.
 */
import { createContext, useContext } from "react";

export type ToastInterface = {
  showToast: () => void;
};

type ContextNotProvided = undefined;

export const ToastContext = createContext<ToastInterface | ContextNotProvided>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context)
    throw new Error("ToastContext is undefined. Have you used it within ToastContextProvider?");

  return context;
};
