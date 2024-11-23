import React from "react";
import Card from "@molecules/Card";
import TopActionBar from "./TopActionBar";
import Preview from "./Preview";
import { VIRFICE_APP_PREFIX } from "@conf";

const LeftPanel = () => {
  return (
    <div style={{ width: 638 }}>
      <Card>
        <div
          className={`${VIRFICE_APP_PREFIX}-flex-col ${VIRFICE_APP_PREFIX}-w-100`}
        >
          <TopActionBar />
          <Preview />
        </div>
      </Card>
    </div>
  );
};

export default LeftPanel;
