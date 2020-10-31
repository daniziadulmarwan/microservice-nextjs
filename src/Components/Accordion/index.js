import React, { useState } from "react";

export { default as Item } from "./Item";
export { default as IconPlay } from "src/icons/IconPlay";
export { default as IconLock } from "src/icons/IconLock";

export default function Accordion({ children }) {
  const [Active, setActive] = useState(() => null);

  function toggle(id) {
    setActive((prev) => (prev === id ? null : id));
  }
  return <div className="accordion">{children(Active, toggle)}</div>;
}
