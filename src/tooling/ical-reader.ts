import ical, { CalendarComponent } from "node-ical";
import { VEvent } from "node-ical";
import { EventType, ImproEvent } from "../assets/data/types";
import { LocationDistrictMapping, organizersTable } from "../assets/data/data-improbox";

function instanceOfVEvent(object: CalendarComponent): object is VEvent {
  return object.type === "VEVENT";
}

function getEventType(name: string, description: string): EventType {
  if (
    name.toLowerCase().indexOf("workshop") > 0 ||
    name.toLowerCase().indexOf("seminář") > 0 ||
    description.toLowerCase().indexOf("workshop") > 0 ||
    description.toLowerCase().indexOf("seminář") > 0 ||
    description.toLowerCase().indexOf("trénink") > 0
  ) {
    return "workshop";
  }

  if (name.toLowerCase().indexOf("jam") > 0 || description.toLowerCase().indexOf("jam") > 0) {
    return "jam";
  }

  return "play";
}

const start = async () => {
  const webEvents = await ical.async.fromURL(
    "https://www.facebook.com/events/ical/upcoming/?uid=61550443238678&key=3hQqHGCWAxbX2nBh"
  );

  const events: Array<ImproEvent> = [];

  Object.entries(webEvents).forEach(([key, value]) => {
    if (instanceOfVEvent(value)) {
      if (!LocationDistrictMapping.get(value.location)) {
        console.log(value.location, value);
      }

      const organizer = organizersTable.find(
        // @ts-ignore
        (o) => o.facebookCalendarId === value.organizer.params!.CN
      );

      if (!organizer) {
        console.log(value);
      }

      let eventName = value.summary;
      if (organizer && eventName.indexOf(`${organizer.name}: `) >= 0) {
        eventName = eventName.split(`${organizer.name}: `)[1];
      }
      if (organizer && eventName.indexOf(`${organizer.name} present `) >= 0) {
        eventName = eventName.split(`${organizer.name} present `)[1];
      }

      if (organizer && organizer.language === "en") {
        eventName = eventName.concat(" (EN)");
      }

      events.push({
        id: value.uid,
        slugExtra: "",
        name: eventName,
        eventType: getEventType(value.summary, value.description),
        websiteUrl: value.url,
        organizerIds: organizer ? [organizer.id] : [],
        playDate: value.start.toISOString().split("T")[0],
        // @ts-ignore
        district: LocationDistrictMapping.get(value.location) ?? "?",
        language: organizer ? organizer.language : "cs",
      });
    }
  });

  events.sort((a, b) => Date.parse(a.playDate) - Date.parse(b.playDate));
  console.log(events);

  const value = webEvents["e1326994691323483@facebook.com"];
  if (instanceOfVEvent(value)) {
    const event = {
      id: value.uid,
      slugExtra: "",
      name: value.summary,
      eventType: "?",
      websiteUrl: value.url,
      organizers: [],
      playDate: value.start.toISOString().split("T")[0],
      district: LocationDistrictMapping.get(value.location) ?? "?",
      language: "de",
    };

    // console.log(value);
    // console.log(event);
  }
};

start();
