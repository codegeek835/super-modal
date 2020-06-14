import * as React from "react";
const Description = (props: any) => {
  return (
    <div className={`footer ${props.className}`} id={props.id ? props.id : ""}>
      {props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children}
    </div>
  );
};
// Footer.displayName = "Footer"
export default Description;
