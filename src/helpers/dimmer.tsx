import * as React from 'react';
const Dimmer = (props: any) => {
  return (
    <div className='super-dimmer' ref={props.reference}>
      {props.children}
    </div>
  );
};
export default Dimmer;
