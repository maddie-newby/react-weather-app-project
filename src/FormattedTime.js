import React from "react";

export default function FormattedTime(timestamp, timezone) {
  let time = new Date(timestamp + timezone * 1000);
  let hours =
    time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
  let minutes =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;

  if (hours > 23) {
    hours -= 24;
  } else if (hours < 0) {
    hours += 24;
  }

  return `${hours}:${minutes}`;
}
