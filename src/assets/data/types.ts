import { Districts } from "./data-locations";

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

export type BusinessType = "buy" | "rent";

export type BookItem = {
  id: string;
  slugExtra: string;
  title: string;
  subtitle: string;
  author: string;
  inventoryState: "Skladem" | "Na cestě";
  image: string;
  businessType: BusinessType;
  websiteUrl: string;
  language: "cs" | "en";
  recommends: Array<string>;
  priceCZK: number;
};
