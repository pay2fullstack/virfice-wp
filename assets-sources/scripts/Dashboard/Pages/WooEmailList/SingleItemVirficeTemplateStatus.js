import React from "react";
import CheckboxField from "@molecules/CheckboxField";
import { useDispatch } from "react-redux";
import { updateVirficeTemplateStatus } from "./wooEmailListSlice";

const SingleItemVirficeTemplateStatus = ({
  email,
  setVirfice_template_status,
}) => {
  const dispatch = useDispatch();
  const handleStatusChange = (v) => {
    dispatch(updateVirficeTemplateStatus(email.id, v));
    setVirfice_template_status(v);
  };
  return (
    <CheckboxField
      value={email.virfice_template_status || false}
      onChange={handleStatusChange}
      type="toggle"
    />
  );
};

export default SingleItemVirficeTemplateStatus;
