import { ReactNode } from "react";

import { FooterBar } from "./footer-bar";
import { HeaderBar } from "./header-bar";
import { PageContent } from "./page-content";
import { PageHeaderImage } from "./page-header-image";

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderBar />
      <PageHeaderImage />
      <PageContent>{children}</PageContent>
      <FooterBar />
    </>
  );
};
