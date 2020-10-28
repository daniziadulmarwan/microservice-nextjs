import React from "react";
import Link from "next/link";

export default function RenderItem({ item }) {
  return (
    <div className="w-1/6 px-4">
      <div className="item relative">
        <figure className="item-image">
          <img src="/images/icon-play.svg" alt="icon-play" />
          <img
            src={item?.thumbnail ?? ""}
            alt={item?.name ?? "some information"}
          />
        </figure>
        <div className="item-meta mt-2">
          <h4 className="text-lg text-gray-900">
            {item?.name ?? "Course name"}
          </h4>
          <h5 className="text-sm text-gray-600">
            {item?.level ?? "Course level"}
          </h5>
        </div>
        <Link href={`/course/[slug]`} as={`/course/${item.id}`}>
          <a className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  );
}
