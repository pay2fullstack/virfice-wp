import React from "react";
import Container from "@molecules/Container";

const PageHeadingAndSubheading = ({ heading, subHeading }) => {
  return (
    <Container>
      <h1>{heading}</h1>
      <p>{subHeading}</p>
    </Container>
  );
};

export default PageHeadingAndSubheading;
