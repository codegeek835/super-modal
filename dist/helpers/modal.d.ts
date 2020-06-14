import * as React from "react";
import "../assets/scss/styles.scss";
interface IProps {
    showModal: boolean;
    dimmer?: boolean;
    className?: string;
    boundWith?: string;
    dragHandleClassName?: string;
    disableDragging?: boolean;
    autoResizeOnload?: boolean;
    alignVertical?: string;
    alignHorizontal?: string;
    enable?: {
        bottom?: boolean;
        bottomLeft?: boolean;
        bottomRight?: boolean;
        left?: boolean;
        right?: boolean;
        top?: boolean;
        topLeft?: boolean;
        topRight?: boolean;
    };
    popUpPosition?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        minHeight?: number;
        minWidth?: number;
        maxWidth?: number;
        maxHeight?: number;
    };
}
export declare class Modal extends React.Component<IProps, any> {
    constructor(props: any);
    static defaultProps: {
        className: string;
        showModal: boolean;
        dimmer: boolean;
        boundWith: string;
        dragHandleClassName: string;
        disableDragging: boolean;
        autoResizeOnload: boolean;
        alignVertical: string;
        alignHorizontal: string;
        popUpPosition: {
            x: number;
            y: number;
            width: number;
            height: number;
            minHeight: number;
            minWidth: number;
            maxWidth: number;
            maxHeight: number;
        };
        enable: {
            bottom: boolean;
            bottomLeft: boolean;
            bottomRight: boolean;
            left: boolean;
            right: boolean;
            top: boolean;
            topLeft: boolean;
            topRight: boolean;
        };
    };
    static Header: (props: any) => JSX.Element;
    static Description: (props: any) => JSX.Element;
    static Content: (props: any) => JSX.Element;
    static Footer: (props: any) => JSX.Element;
    static Dimmer: (props: any) => JSX.Element;
    is_mounted: boolean;
    window_width: number;
    width: number;
    height: number;
    is_resized: any;
    rnd: any;
    componentDidMount: () => void;
    componentDidUpdate: (previousProps: {
        showModal: boolean;
    }, previousState: {
        showModal: boolean;
    }) => void;
    componentWillUnmount: () => void;
    initilalPopSizePosition: () => void;
    setAutoPosition: (width: number, height: number) => {
        width: number;
        height: number;
    };
    setHorizontalPosition: (popX: number) => number;
    setVerticalPosition: (popY: number) => number;
    render_rnd_modal: () => JSX.Element;
    render(): JSX.Element;
}
export default Modal;
