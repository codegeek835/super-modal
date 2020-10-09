import * as React from "react";
import "./assets/scss/styles.scss";
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
    minizeable?: boolean;
    closeOnDimmerClick?: boolean;
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
declare class SuperModal extends React.PureComponent<IProps, any> {
    static defaultProps: Partial<IProps>;
    static Header: (props: any) => JSX.Element;
    static Description: (props: any) => JSX.Element;
    static Content: (props: any) => JSX.Element;
    static Footer: (props: any) => JSX.Element;
    static Dimmer: (props: any) => JSX.Element;
    constructor(props: any);
    elem: any;
    document: any;
    mounted: boolean;
    windowWidth: number;
    windowHeight: number;
    width: number;
    height: number;
    isResized: any;
    rnd: any;
    dimmerRef: any;
    HeaderRef: any;
    FooterRef: any;
    ContentRef: any;
    DescriptionRef: any;
    lastPosition: {
        x: number;
        y: number;
        width: number;
        height: number;
        minHeight: number;
        minWidth: number;
        maxWidth: number;
        maxHeight: number;
    };
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
    onResize: (e: any, direction: any, ref: {
        style: {
            width: any;
            height: any;
        };
    }, delta: any, position: any) => void;
    onDragStop: (d: {
        x: any;
        y: any;
    }) => void;
    minimizeModal: () => void;
    fullscreenModal: () => void;
    stackModal: () => void;
    renderRndModal: () => JSX.Element;
    render(): JSX.Element;
}
export default SuperModal;
