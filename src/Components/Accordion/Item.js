import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import ArrowDown from "src/icons/ArrowDown";

export default function Item({ name, id, child, active, toggle, children }) {
  return (
    <div className="bg-white border border-gray-300 overflow-hidden">
      <div className="meta pl-4 py-2 relative flex justify-between items-center">
        <span className="text-gray-600">{name}</span>
      </div>
    </div>
  );
}
