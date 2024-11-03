import { createSlice } from "@reduxjs/toolkit";
import { VIRFICE_APP_PREFIX } from "../../../conf";
import axios from "axios";
import { showNotificationBell } from "../componentsSlice";

const initialState = {
  html: ``,
  selectedElementId: false,
  selectedSectionId: false,
  post: {},
};

export const builderSlice = createSlice({
  name: VIRFICE_APP_PREFIX,
  initialState,
  reducers: {
    setBuilderData: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const getSingleTemplate = (template_id) => (dispatch) => {
  let d = null;
  let apiSlug = "virfice/v1/virfice-template/single";

  axios
    .get(`${virfice.restBase}${apiSlug}`, {
      headers: {
        "X-WP-Nonce": virfice.nonce,
      },
      params: { id: template_id },
    })
    .then((res) => {
      d = res.data;
      dispatch(
        setBuilderData({
          key: "html",
          value: d.post_content,
        })
      );

      dispatch(
        setBuilderData({
          key: "post",
          value: d,
        })
      );
      console.log(d);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const saveSingleTemplate =
  (template_id, { post_content }) =>
  (dispatch) => {
    let d = null;
    let apiSlug = "virfice/v1/virfice-template/save";
    const formData = new FormData();
    formData.append("template_id", template_id);
    formData.append("post_content", post_content);

    axios
      .post(`${virfice.restBase}${apiSlug}`, formData, {
        headers: {
          // 'Content-Type': 'multipart/form-data',
          "X-WP-Nonce": virfice.nonce,
        },
      })
      .then((res) => {
        d = res.data;
        console.log(d);
        dispatch(showNotificationBell({ title: "Template saved" }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          showNotificationBell({
            title: "Template saved failed",
            type: "danger",
          })
        );
      });
  };

export const onSelectElement = (elementId) => (dispatch) => {
  dispatch(
    setBuilderData({
      key: "selectedElementId",
      value: elementId,
    })
  );
};

export const onSelectSection = (elementId) => (dispatch) => {
  dispatch(
    setBuilderData({
      key: "selectedSectionId",
      value: elementId,
    })
  );
};

// Action creators are generated for each case reducer function
export const { setBuilderData } = builderSlice.actions;

export default builderSlice.reducer;