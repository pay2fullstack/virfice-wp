import React from "react";
import Tab from "../../../../Tab";
import TabHeader from "../../../../Tab/TabHeader";
import TabContent from "../../../../Tab/TabContent";
import TabHead from "../../../../Tab/TabHead";
import Divider from "@molecules/Divider";
import { VIRFICE_APP_PREFIX } from "@conf";
import PaintField from "@molecules/Paintfield";
import TextField from "@molecules/TextField";
import ToggleButton from "@molecules/ToggleButton";
import { getElementComputedStyle } from "./utils";
import Reusable from "./Reusable";
import DisabledParentSettings from "./DisabledParentSettings";
import {
  getAllElementsUsingSelector,
  getElementUsingMySelector,
} from "../../utils";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "@svg-icons";

const OrderTableSettings = ({ element }) => {
  const order_table = getAllElementsUsingSelector(element, "order_table");
  const order_table_headers = getAllElementsUsingSelector(
    element,
    "order_table_header"
  );
  const order_details_title = getAllElementsUsingSelector(
    element,
    "order_details_title"
  );

  const order_table_thead = getAllElementsUsingSelector(
    element,
    "order_table_thead"
  );

  const order_table_summary = getAllElementsUsingSelector(
    element,
    "order_table_summary"
  );
  return (
    <>
      <Tab>
        <TabHead>
          <TabHeader index={0}>Content</TabHeader>
          <TabHeader index={1}>Design</TabHeader>
        </TabHead>
        <Divider style={{ marginLeft: -20 }} extraWidth={"40px"} />
        <TabContent index={0}>
          <div className={`${VIRFICE_APP_PREFIX}-form-group`}>
            {order_details_title.length > 0 && (
              <>
                <div className="title__medium">Order title</div>
                <Reusable
                  element={order_details_title[0]}
                  type="font-and-size"
                  eleArr={order_details_title}
                />

                <TextField
                  label={"Order title"}
                  value={order_details_title[0].innerText}
                  onChange={(v) => {
                    order_details_title[0].innerText = v;
                  }}
                />
                <ToggleButton
                  label={"Alignment"}
                  value={getElementComputedStyle(
                    order_details_title[0],
                    "text-align"
                  )}
                  options={[
                    { value: "left", component: <AlignLeftIcon /> },
                    { value: "center", component: <AlignCenterIcon /> },
                    { value: "right", component: <AlignRightIcon /> },
                  ]}
                  onChange={(v) => {
                    order_details_title[0].style.textAlign = v;
                  }}
                />
              </>
            )}

            {order_table_headers.length > 0 && (
              <>
                <div className="title__medium">Table header</div>
                <Reusable
                  element={order_table_headers[0]}
                  type="font-and-size"
                  eleArr={order_table_headers}
                />

                <TextField
                  label={"Product title"}
                  value={
                    getElementUsingMySelector(
                      element,
                      "order_table_header_product"
                    ).innerText
                  }
                  onChange={(v) => {
                    getElementUsingMySelector(
                      element,
                      "order_table_header_product"
                    ).innerText = v;
                  }}
                />

                <TextField
                  label={"Quantity title"}
                  value={
                    getElementUsingMySelector(
                      element,
                      "order_table_header_quantity"
                    ).innerText
                  }
                  onChange={(v) => {
                    getElementUsingMySelector(
                      element,
                      "order_table_header_quantity"
                    ).innerText = v;
                  }}
                />

                <TextField
                  label={"Price title"}
                  value={
                    getElementUsingMySelector(
                      element,
                      "order_table_header_price"
                    ).innerText
                  }
                  onChange={(v) => {
                    getElementUsingMySelector(
                      element,
                      "order_table_header_price"
                    ).innerText = v;
                  }}
                />
              </>
            )}

            <div className="title__medium">Table data</div>
            <Reusable element={element} type="font-and-size" />

            {order_table_summary.length > 0 && (
              <>
                <div className="title__medium">Order summary</div>
                <Reusable
                  element={order_table_summary[0]}
                  type="font-and-size"
                  eleArr={order_table_summary}
                />

                <TextField
                  label={"Subtotal title"}
                  value={
                    getElementUsingMySelector(
                      element,
                      "order_table_summary_subtotal"
                    ).innerText
                  }
                  onChange={(v) => {
                    getElementUsingMySelector(
                      element,
                      "order_table_summary_subtotal"
                    ).innerText = v;
                  }}
                />

                <TextField
                  label={"Shipping title"}
                  value={
                    getElementUsingMySelector(
                      element,
                      "order_table_summary_shipping"
                    ).innerText
                  }
                  onChange={(v) => {
                    getElementUsingMySelector(
                      element,
                      "order_table_summary_shipping"
                    ).innerText = v;
                  }}
                />

                <TextField
                  label={"Payment title"}
                  value={
                    getElementUsingMySelector(
                      element,
                      "order_table_summary_payment_method"
                    ).innerText
                  }
                  onChange={(v) => {
                    getElementUsingMySelector(
                      element,
                      "order_table_summary_payment_method"
                    ).innerText = v;
                  }}
                />
                <TextField
                  label={"Total title"}
                  value={
                    getElementUsingMySelector(
                      element,
                      "order_table_summary_total"
                    ).innerText
                  }
                  onChange={(v) => {
                    getElementUsingMySelector(
                      element,
                      "order_table_summary_total"
                    ).innerText = v;
                  }}
                />
              </>
            )}

            <div className="title__medium">Layout</div>
            {order_table.length > 0 && (
              <>
                <ToggleButton
                  label={"Alignment"}
                  value={getElementComputedStyle(order_table[0], "text-align")}
                  options={[
                    { value: "left", component: <AlignLeftIcon /> },
                    { value: "center", component: <AlignCenterIcon /> },
                    { value: "right", component: <AlignRightIcon /> },
                  ]}
                  onChange={(v) => {
                    order_table[0].style.textAlign = v;
                  }}
                />
              </>
            )}
          </div>
        </TabContent>
        <TabContent index={1}>
          <div className={`${VIRFICE_APP_PREFIX}-form-group`}>
            <PaintField
              label={"Background color"}
              value={getElementComputedStyle(element, "background-color")}
              onChange={(v) => {
                element.style.backgroundColor = v;
              }}
            />

            {order_details_title.length > 0 && (
              <PaintField
                label={"Order table title"}
                value={getElementComputedStyle(order_details_title[0], "color")}
                onChange={(v) => {
                  order_details_title.forEach((ele) => {
                    ele.style.color = v;
                  });
                }}
              />
            )}

            <PaintField
              label={"Order table item color"}
              value={getElementComputedStyle(element, "color")}
              onChange={(v) => {
                element.style.color = v;
              }}
            />

            {order_table_thead.length > 0 && (
              <PaintField
                label={"Table headers background color"}
                value={getElementComputedStyle(
                  order_table_thead[0],
                  "background-color"
                )}
                onChange={(v) => {
                  order_table_thead.forEach((ele) => {
                    ele.style.backgroundColor = v;
                  });
                }}
              />
            )}

            {order_table_headers.length > 0 && (
              <PaintField
                label={"Table headers font color"}
                value={getElementComputedStyle(order_table_headers[0], "color")}
                onChange={(v) => {
                  order_table_headers.forEach((ele) => {
                    ele.style.color = v;
                  });
                }}
              />
            )}

            <Reusable element={element} type="border-radius" />
            <Reusable element={element} type="padding" />

            <DisabledParentSettings element={element} />
          </div>
        </TabContent>
      </Tab>
    </>
  );
};

export default OrderTableSettings;
