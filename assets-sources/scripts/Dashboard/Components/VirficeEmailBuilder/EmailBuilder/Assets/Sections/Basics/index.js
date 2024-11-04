import React from "react";
import {
  ColumnIcon,
  DividerIcon,
  HandTapIcon,
  ImageIcon,
  MonitorPlayIcon,
  TextIcon,
  TextOutdentIcon,
} from "../../../../../../icons";
import {
  VIRFICE_APP_PREFIX,
  VIRFICE_PLUGIN_BASE,
} from "../../../../../../../conf";
import {
  getButtonString,
  getImageString,
  getSingleColTable,
  getTextString,
  getVideoString,
} from "../core-ele";

const Text = {
  title: "Text",
  icon: <TextIcon />,
  template: getSingleColTable(
    getTextString({
      title: "Text",
      content:
        "Add your text here. Edit to add dynamic values like name, email and more.",
    }),
    { title: "Text", paddingTop: "16px", paddingBottom: "16px" }
  ),
};
const Image = {
  title: "Image",
  icon: <ImageIcon />,
  template: getSingleColTable(getImageString({ title: "Image" }), {
    title: "Image",
  }),
};

const Video = {
  title: "Video",
  icon: <MonitorPlayIcon />,
  template: getSingleColTable(getVideoString({ title: "Video" }), {
    title: "Video",
  }),
};

const Button = {
  title: "Button",
  icon: <HandTapIcon />,
  template: getSingleColTable(
    getButtonString({
      title: "Button",
      content: "Button",
    }),
    {
      title: "Button",
      paddingTop: "16px",
      paddingBottom: "16px",
    }
  ),
};

const ImageWithText = {
  title: "Image with Text",
  icon: <TextOutdentIcon />,
  template: `<table ${VIRFICE_APP_PREFIX}-title="Image with Text" ${VIRFICE_APP_PREFIX}-ele_type="section">
    <tbody>
        <tr ${VIRFICE_APP_PREFIX}-title="Row 1" ${VIRFICE_APP_PREFIX}-ele_type="row">
            <td ${VIRFICE_APP_PREFIX}-title="Column 1" ${VIRFICE_APP_PREFIX}-ele_type="column">
                ${getImageString({ title: "Image" })}
            </td>
            <td ${VIRFICE_APP_PREFIX}-title="Column 2" ${VIRFICE_APP_PREFIX}-ele_type="column" style="padding: 16px;">
                ${getTextString({
                  title: "Text",
                  content: "This is a text field. Add and edit content here.",
                })}
                ${getButtonString({ title: "Button", content: "Sign up" })}
            </td>
        </tr>
    </tbody>
</table>`,
};

const Column = {
  title: "Column",
  icon: <ColumnIcon />,
  template: `<table ${VIRFICE_APP_PREFIX}-title="Column" ${VIRFICE_APP_PREFIX}-ele_type="section">
    <tbody>
        <tr ${VIRFICE_APP_PREFIX}-title="Row 1" ${VIRFICE_APP_PREFIX}-ele_type="row">
            <td ${VIRFICE_APP_PREFIX}-title="Column 1" ${VIRFICE_APP_PREFIX}-ele_type="column" style="padding-bottom: 16px;">
                ${getImageString({ title: "Image" })}
                ${getTextString({
                  title: "Text",
                  content: "This is a text field. Add and edit content here.",
                })}
                ${getButtonString({ title: "Button", content: "Button" })}
            </td>
            <td ${VIRFICE_APP_PREFIX}-title="Column 2" ${VIRFICE_APP_PREFIX}-ele_type="column" style="padding-bottom: 16px;">
                ${getImageString({ title: "Image" })}
                ${getTextString({
                  title: "Text",
                  content: "This is a text field. Add and edit content here.",
                })}
                ${getButtonString({ title: "Button", content: "Button" })}
            </td>
        </tr>
    </tbody>
</table>`,
};

const Divider = {
  title: "Divider",
  icon: <DividerIcon />,
  template: getSingleColTable(
    `<div  ${VIRFICE_APP_PREFIX}-title="Divider" ${VIRFICE_APP_PREFIX}-ele_type="divider" style="background:#161A05; width: 100%;height: 1px;"></div>`,
    { title: "Divider", paddingTop: "16px", paddingBottom: "16px" }
  ),
};

export default [Column, Text, Button, Image, Video, ImageWithText, Divider];
