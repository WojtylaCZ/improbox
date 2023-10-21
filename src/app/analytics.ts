import ReactGA from "react-ga4";

export const initAnalytics = () => {
  ReactGA.initialize("G-0BFJTSYSSM");
};

export const enum AnalyticsEvents {
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

  ImproEventExpanded = "ImproEventExpanded",
  ImproEventLinkOpened = "ImproEventLinkOpened",
  OrganiserWebsiteOpened = "OrganiserWebsiteOpened",
  ShareButtonClicked = "ShareButtonClicked",

  EmailSubscribeFormExpanded = "EmailSubscribeFormExpanded",
  EmailSubscribeFormCollapsed = "EmailSubscribeFormCollapsed",

  PastEventsExpanded = "PastEventsExpanded",
  PastEventsCollapsed = "PastEventsCollapsed",
}

export const sendAnalyticsEvent = (eventName: AnalyticsEvents, eventParam: string) => {
  ReactGA.event({
    // action becomes the event name
    action: eventName,
    //  "event_category" becomes a custom parameter
    category: eventParam,
  });
};
