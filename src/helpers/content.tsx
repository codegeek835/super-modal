import * as React from "react";
const Content = (props: any) => {
  return (
    <div className={`content ${props.className}`} id={props.id ? props.id : ""} style={props.styles || {}}>
      {props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children}
    </div>
  );
};
// Footer.displayName = "Footer"
export default Content;
