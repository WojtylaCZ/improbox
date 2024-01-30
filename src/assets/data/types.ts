import { Districts } from "./data-improbox";

export type District = keyof typeof Districts;

export type EventType = "play" | "workshop" | "coursework" | "jam" | "unknown";

export type Organizer = {
  id: string;
  name: string;
  websiteUrl: string;
  facebookCalendarId: string;
  language: "cs" | "en";
};

export type ImproEvent = {
  id: string;
  slugExtra: string;
  name: string;
  eventType: EventType;
  websiteUrl: string;
  organizerIds: Array<string> | [];
  playDate: string;
  district: District;
  language: "cs" | "en";
};

export type MonthEventsCalendar = {
  monthName: string;
  monthDate: string;
  events: Array<ImproEvent>;
};
