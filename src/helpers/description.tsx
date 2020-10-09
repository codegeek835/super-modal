import * as React from 'react';
const Description = (props: any) => {
  return (
    <div className={`description ${props.className || ''}`} id={props.id || ''} ref={props.reference}>
      {props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children}
    </div>
  );
};
export default Description;
