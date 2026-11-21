import { useSyncExternalStore } from "react";

import { profile } from "@/content/profile";

const { place, timeZone } = profile.location;
const format = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" });

export function localHour(date = new Date()) {
  const [hour, minute] = format.format(date).split(":").map(Number);

  return hour + minute / 60;
}

function subscribe(onChange: () => void) {
  const interval = setInterval(onChange, 10_000);

  return () => clearInterval(interval);
}

export function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => format.format(Date.now()),
    () => null,
  );

  return <span>{time ? `${time} in ${place}` : place}</span>;
}
