import React from "react";
import propTypes from "prop-types";
import IconStar from "src/icons/Star";

export default function Star({ className, value, width, height }) {
  const star = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{ left: index * width, height: height, width: width }}
      />
    );
  }

  const starPlaceHolder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceHolder.push(
      <div
        className="star placeholder"
        key={`starPlaceHolder-${index}`}
        style={{ left: index * width, height: height, width: width }}
      />
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceHolder}
        {star}
      </div>
      <IconStar></IconStar>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
};
