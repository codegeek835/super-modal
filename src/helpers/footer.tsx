import * as React from 'react';
const Footer = (props: any) => {
  return (
    <div className={`footer ${props.className || ''}`} id={props.id || ''} ref={props.reference}>
      {props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children}
    </div>
  );
};
export default Footer;
