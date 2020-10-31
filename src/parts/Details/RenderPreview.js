import React from "react";
import YouTube from "react-youtube";
import Accordion, { IconLock, IconPlay, Item } from "src/Components/Accordion";
import Modal from "src/Components/Modal";

export default function RenderPreview({ previews }) {
  return (
    <div className="accordion">
      <Accordion>
        {(Active, toggle) => {
          return previews?.map((item, index) => {
            return <Item id={item.id}></Item>;
          });
        }}
      </Accordion>
    </div>
  );
}
