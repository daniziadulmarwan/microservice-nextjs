import React from "react";
import Link from "next/link";

export default function RenderItem({ item }) {
  return (
    <div className="w-1/4 px-4">
      <div className="item">
        <figure className="item-image">
          <img src="/images/icon.play.svg" alt="icon-play" />
          <img
            src={item?.thumbnail ?? ""}
            alt={item?.name ?? "some information"}
          />
        </figure>
      </div>
    </div>
  );
}
