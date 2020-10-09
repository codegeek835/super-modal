import * as React from 'react';
const Header = (props: any) => {
  return (
    <div
      className={`header ${props.className || ''}`}
      id={props.id || ''}
      style={props.styles || {}}
      ref={props.reference}
    >
      {props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children}
      <span className='icon-area'>
        {props.minizeable && (
          <React.Fragment>
            {!props.minimized && (
              <i className='super-window-minimize' tabIndex={0} id='minimizeButton' onClick={props.onRequestMinimize} />
            )}
            {props.fullScreen && (
              <i className='super-window-fullscreen' tabIndex={0} id='stackedButton' onClick={props.onRequestStack} />
            )}
            {props.stacked && (
              <i
                className='super-window-default'
                tabIndex={0}
                id='fullscreenButton'
                onClick={props.onRequestFullscreen}
              />
            )}
          </React.Fragment>
        )}
        <i
          className='super-close'
          tabIndex={0}
          id='closeButton'
          onClick={props.onRequestClose}
          style={props.minizeable ? {} : { marginLeft: 'auto' }}
        />
      </span>
    </div>
  );
};
export default Header;
