import ReactGA from "react-ga4";

export const initAnalytics = () => {
  ReactGA.initialize("G-0BFJTSYSSM");
};

export const enum AnalyticsEvents {
  MenuBrandClicked = "MenuBrandClicked",
  MenuEventsClicked = "MenuEventsClicked",
  MenuForOrganisersClicked = "MenuForOrganisersClicked",
  MenuForActorsClicked = "MenuForActorsClicked",
  MenuAboutClicked = "MenuAboutClicked",

  LanguageChanged = "LanguageChanged",

  PlaysSwitchedOnFilter = "PlaysSwitchedOnFilter",
  PlaysSwitchedOffFilter = "PlaysSwitchedOffFilter",

  WorkshopsSwitchedOnFilter = "WorkshopsSwitchedOnFilter",
  WorkshopsSwitchedOffFilter = "WorkshopsSwitchedOffFilter",

  JamsSwitchedOnFilter = "JamsSwitchedOnFilter",
  JamsSwitchedOffFilter = "JamsSwitchedOffFilter",

  CourseworksSwitchedOnFilter = "CourseworksSwitchedOnFilter",
  CourseworksSwitchedOffFilter = "CourseworksSwitchedOffFilter",

  PragueLocationSwitchedOnFilter = "PragueSwitchedOnFilter",
  PragueLocationSwitchedOffFilter = "PragueSwitchedOffFilter",

  BohemiaLocationSwitchedOnFilter = "BohemiaLocationSwitchedOnFilter",
  BohemiaLocationSwitchedOffFilter = "BohemiaLocationSwitchedOffFilter",

  MoraviaAndSilesiaLocationSwitchedOnFilter = "MoraviaAndSilesiaLocationSwitchedOnFilter",
  MoraviaAndSilesiaLocationSwitchedOffFilter = "MoraviaAndSilesiaLocationSwitchedOffFilter",

  CsLocaleSwitchedOnFilter = "CsLocaleSwitchedOnFilter",
  CsLocaleSwitchedOffFilter = "CsLocaleSwitchedOffFilter",

  EnLocaleSwitchedOnFilter = "EnLocaleSwitchedOnFilter",
  EnLocaleSwitchedOffFilter = "EnLocaleSwitchedOffFilter",

  ImproEventExpanded = "ImproEventExpanded",
  ImproEventCollapsed = "ImproEventCollapsed",

  ImproEventLinkOpened = "ImproEventLinkOpened",
  OrganiserWebsiteOpened = "OrganiserWebsiteOpened",
  ShareButtonClicked = "ShareButtonClicked",

  EmailSubscribeFormExpanded = "EmailSubscribeFormExpanded",
  EmailSubscribeFormCollapsed = "EmailSubscribeFormCollapsed",

  PastEventsExpanded = "PastEventsExpanded",
  PastEventsCollapsed = "PastEventsCollapsed",

  BuyBookClicked = "BuyBookClicked",
}

export const sendAnalyticsEvent = (
  eventName: AnalyticsEvents,
  eventPayload: { [eventParamName: string]: string | number }
) => {
  ReactGA.event(eventName, {
    ...eventPayload,
  });
};
