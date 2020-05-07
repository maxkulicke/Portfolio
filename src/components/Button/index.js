import React from "react";

export function Button(props) {
  return (
    <button {...props} style={{ marginBottom: 10 }} className="btn">
      {props.children}
    </button>
  );
}

export function Anchor(props) {
  return (
    <a {...props} style={{ marginBottom: 10 }} className="btn">
      {props.children}
    </a>
  );
}


export default Button;
