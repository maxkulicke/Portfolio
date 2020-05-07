import React from "react";
import Card from "../Card"


const Container = ({ children }, props) => {

  return (
    <div className={ "Container " + props.className} id={props.id}>
      {children}
    </div>
  );
}

export default Container;
