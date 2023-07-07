import React from "react";

export default function FormattedTime(props) {
  let time = props.time;
  let hours = time.getHours() - 1;
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours > 23) {
    hours -= 24;
  } else if (hours < 0) {
    hours += 24;
  }

  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}
