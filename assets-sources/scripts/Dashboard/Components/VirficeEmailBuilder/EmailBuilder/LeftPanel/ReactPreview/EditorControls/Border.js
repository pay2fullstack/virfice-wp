import React, { useEffect, useRef } from "react";
import { VIRFICE_APP_PREFIX } from "@conf";
import RightControl from "./RightControls";
import AddSectionButton from "./AddSectionButton";
import useElementPositionTracker from "./useElementPositionTracker";

const Border = ({ element }) => {
  const borderDiv = useRef(null);

  const position = useElementPositionTracker(element);

  useEffect(() => {
    updatePosition();
  }, [position]);
  const updatePosition = () => {
    if (!borderDiv.current) return;
    // Set the borderDiv's position, width, and height to match the target element
    borderDiv.current.style.left = position.left + "px";
    borderDiv.current.style.top = position.top + "px";
    borderDiv.current.style.width = position.width + "px";
    borderDiv.current.style.height = position.height + "px";
    borderDiv.current.style.position = "fixed"; // Use `absolute` or `fixed` based on your requirement
  };

  if (!element) return null;
  return (
    <div className={VIRFICE_APP_PREFIX + "-element-border"} ref={borderDiv}>
      <RightControl element={element} />
    </div>
  );
};

export default Border;
