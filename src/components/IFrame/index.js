import React from "react";

function IFrame(props) {
  return (
    <div>
            <iframe {...props}></iframe>

      {/* <iframe {props.src} {props.width} {props.height} {prop.sframeborder} {props.allow} {props.allowfullscreen}></iframe> */}
    </div>
  );
}


export default IFrame;
