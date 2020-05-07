import React, { useState } from "react";
import Card from "../Card";
import Button from "../Button/index"



function Project({ children }) {

  return (
    <Card>{ children }</Card>
  );
}

export default Project;
