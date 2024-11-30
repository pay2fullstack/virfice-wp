import React, { useEffect, useState } from "react";
import { VIRFICE_APP_PREFIX } from "@conf";
import Card from "@molecules/Card";
import { useSelector } from "react-redux";
import Loading from "@molecules/Loading";
import { getVirficeElementFromId } from "../utils";
import Heading from "./Heading";
import Divider from "@molecules/Divider";
import Settings from "./Settings";
import ReadyBlocks from "./ReadyBlocks";
import EmailBGSettings from "./EmailBGSettings";

const RightPanel = () => {
  const selectedElementId = useSelector(
    (state) => state.builder?.selectedElementId
  );
  const showReadyBlocks = useSelector(
    (state) => state.builder?.showReadyBlocks
  );
  const [element, setElement] = useState(false);

  useEffect(() => {
    if (selectedElementId) {
      setElement(getVirficeElementFromId(selectedElementId));
    } else {
      setElement(false);
    }
  }, [selectedElementId]);

  return (
    <div className={`${VIRFICE_APP_PREFIX}-builder-right-panel-wrapper`}>
      {/* {!selectedElementId && <Loading />} */}

      <div
        className={`${VIRFICE_APP_PREFIX}-flex-col ${VIRFICE_APP_PREFIX}-gap-20`}
      >
        <Card className={`${VIRFICE_APP_PREFIX}-flex-col`} style={{ gap: 0 }}>
          {showReadyBlocks && <ReadyBlocks category="*" />}
          {!showReadyBlocks && (
            <>
              {!selectedElementId && (
                <>
                  <EmailBGSettings />
                </>
              )}
              {element && (
                <>
                  <Heading element={element} />
                  <Divider style={{ marginLeft: -20 }} extraWidth={"40px"} />
                  <Settings element={element} />
                </>
              )}
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default RightPanel;
