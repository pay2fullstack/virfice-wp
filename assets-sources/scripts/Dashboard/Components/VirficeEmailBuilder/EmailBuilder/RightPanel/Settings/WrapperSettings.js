import React from "react";
import { VIRFICE_APP_PREFIX } from "@conf";
import ChildList from "./Components/ChildList";
import Divider from "@molecules/Divider";
import Reusable from "./Reusable";

const WrapperSettings = ({ element }) => {
  return (
    <div className={`${VIRFICE_APP_PREFIX}-form-group`}>
      <ChildList element={element} />
      <Divider style={{ marginLeft: -20 }} extraWidth={"40px"} />
      <Reusable element={element} type="background" />
      <Reusable element={element} type="padding" />
    </div>
  );
};

export default WrapperSettings;
