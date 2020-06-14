import * as React from "react";
const Header = (props: any) => {
  return (
    <div className={`header ${props.className}`} id={props.id} style={props.styles || {}}>
      <i
        aria-hidden='true'
        className='close icon'
        tabIndex={0}
        id='account_notes_model_close_button'
        onClick={props.onRequestClose}
      ></i>
      {props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children}
    </div>
  );
};
// Header.displayName = "Header"
export default Header;
