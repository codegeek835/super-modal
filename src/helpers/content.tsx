import * as React from 'react';
const Content = (props: any) => {
  return (
    <div
      className={`content ${props.className || ''}`}
      id={props.id || ''}
      style={props.styles || {}}
      ref={props.reference}
    >
      {props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children}
    </div>
  );
};
export default Content;
