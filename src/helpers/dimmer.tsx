import * as React from 'react';
const Dimmer = (props: any) => {
    return (
        <div className="super-dimmer">
            {props.children}
        </div>
    )
}
export default Dimmer;