import React, { useState } from "react";
import Card from "../Card";
import Button from "../Button/index"
import "./style.css"


function Project({ children }) {

  return (
    <Card className="project-card">{ children }</Card>
  );
}

export default Project;
