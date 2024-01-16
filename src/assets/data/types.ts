import { Districts, EventType } from "./data-improbox";

type District = keyof typeof Districts;

export type Organizer = {
  id: string;
  name: string;
  websiteUrl: string;
};

export type ImproEvent = {
  id: string;
  slugExtra: string;
  name: string;
  eventType: EventType;
  websiteUrl: string;
  organizers: Array<Organizer> | [];
  playDate: string;
  district: District;
  language: "cs" | "en";
};

export type MonthEventsCalendar = {
  monthName: string;
  monthDate: string;
  events: Array<ImproEvent>;
};
