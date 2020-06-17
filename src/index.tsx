import * as React from "react";
import * as ReactDOM from "react-dom";
import { Rnd } from "react-rnd";
import "./assets/scss/styles.scss";
import Content from "./helpers/content";
import Description from "./helpers/description";
import Dimmer from "./helpers/dimmer";
import Footer from "./helpers/footer";
import Header from "./helpers/header";

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

class SuperModal extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      popUpPosition: { ...this.props.popUpPosition },
    };
  }
  static defaultProps = {
    className: "super-modal",
    showModal: false,
    dimmer: true,
    boundWith: "window",
    dragHandleClassName: "daragble-header",
    disableDragging: false,
    autoResizeOnload: true,
    alignVertical: "center",
    alignHorizontal: "center",
    popUpPosition: {
      x: 300,
      y: 65,
      width: 200,
      height: 200,
      minHeight: 100,
      minWidth: 100,
      maxWidth: 1600,
      maxHeight: 900,
    },
    enable: {
      bottom: false,
      bottomLeft: false,
      bottomRight: false,
      left: false,
      right: false,
      top: false,
      topLeft: false,
      topRight: false,
    },
  };
  static Header = Header;
  static Description = Description;
  static Content = Content;
  static Footer = Footer;
  static Dimmer = Dimmer;

  is_mounted = false;
  window_width: number = window.innerWidth;
  width!: number;
  height!: number;
  is_resized: any;
  rnd: any;

  // function call on componentwillmount for getting account note code for selected patient
  componentDidMount = () => {
    this.is_mounted = true;
    this.initilalPopSizePosition();
  };

  componentDidUpdate = (
    previousProps: { showModal: boolean },
    previousState: { showModal: boolean }
  ) => {
    if (previousState.showModal != this.state.showModal) {
      if (this.is_mounted) {
        this.setState({
          showModal: this.state.showModal,
        });
      }
    }
    if (previousProps.showModal !== this.props.showModal) {
      if (this.is_mounted) {
        this.setState({
          showModal: this.props.showModal,
        });
      }
    }
  };

  componentWillUnmount = () => {
    this.is_mounted = false;
  };

  // Set Modal size and position when modal open
  initilalPopSizePosition = () => {
    this.width = this.state.popUpPosition.width;
    this.height = this.state.popUpPosition.height;
    let popX: number = 0;
    let popY: number = 0;
    if (this.props.autoResizeOnload) {
      let autoWidthheight = this.setAutoPosition(this.width, this.height);
      this.width = autoWidthheight.width;
      this.height = autoWidthheight.height;
    }
    popX = this.setHorizontalPosition(popX);
    popY = this.setVerticalPosition(popY);
    if (this.is_mounted) {
      this.setState({
        showModal: this.props.showModal,
        popUpPosition: {
          ...this.state.popUpPosition,
          width: this.width,
          height: this.height,
          x: Math.round(popX),
          y: Math.round(popY),
        },
        loading: false,
      });
    }
  };

  // Set width of modal according to the screen size
  setAutoPosition = (width: number, height: number) => {
    if (this.props.autoResizeOnload) {
      if (window.matchMedia("(min-width: 1920px)").matches) {
        width = 1300;
        height = 850;
      } else if (window.matchMedia("(min-width: 1200px)").matches) {
        width = 900;
        height = 515;
      } else if (window.matchMedia("(min-width: 992px)").matches) {
        width = 850;
        height = 515;
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        width = 699;
        height = 515;
      }
    }
    return { width, height };
  };

  // Set postion of modal horizontally
  setHorizontalPosition = (popX: number) => {
    if (this.props.alignHorizontal !== "") {
      switch (this.props.alignHorizontal) {
        case "left":
          popX = 0;
          break;
        case "right":
          popX = window.innerWidth - this.width;
          break;
        case "center":
          popX = (window.innerWidth - this.width) / 2;
          break;
        default:
          popX = this.state.popUpPosition.x;
          break;
      }
    } else {
      popX = this.state.popUpPosition.x;
    }
    return popX;
  };

  // Set postion of modal vertically
  setVerticalPosition = (popY: number) => {
    if (this.props.alignVertical !== "") {
      switch (this.props.alignVertical) {
        case "top":
          popY = 0;
          break;
        case "bottom":
          popY = window.innerHeight - this.height;
          break;
        case "center":
          popY = (window.innerHeight - this.height) / 2;
          break;
        default:
          popY = this.state.popUpPosition.y;
          break;
      }
    } else {
      popY = this.state.popUpPosition.y;
    }
    return popY;
  };

  render_rnd_modal = () => {
    return (
      <Rnd
        // Rnd properties
        className={
          this.props.className
            ? `super-modal ${this.props.className}`
            : "super-modal"
        }
        default={this.state.popUpPosition}
        minWidth={this.state.popUpPosition.minWidth}
        minHeight={this.state.popUpPosition.minHeight}
        maxWidth={this.state.popUpPosition.maxWidth}
        maxHeight={this.state.popUpPosition.maxHeight}
        onResize={(_e, _direction, ref, _delta, _position) => {
          this.is_resized = true;
          if (this.is_mounted) {
            this.setState({
              popUpPosition: {
                ...this.state.popUpPosition,
                width: ref.style.width,
                height: ref.style.height,
              },
            });
          }
        }}
        size={{
          width: this.state.popUpPosition.width,
          height: this.state.popUpPosition.height,
        }}
        bounds={this.props.boundWith}
        dragHandleClassName={this.props.dragHandleClassName}
        resizeHandleClasses={{
          topLeft: "resize_top_left",
          bottomRight: "resize_bottom_right",
          bottomLeft: "resize_bottom_left",
          topRight: "resize_top_right",
        }}
        enableResizing={this.props.enable}
        style={{ overflow: "hidden" }}
        disableDragging={this.props.disableDragging}
        // reference={(upDate) => {
        //   this.rnd = upDate;
        // }}
      >
        {React.Children.map(this.props.children, (child) => {
          return child;
        })}
      </Rnd>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.state.showModal
          ? ReactDOM.createPortal(
              this.props.dimmer ? (
                <Dimmer>{this.render_rnd_modal()}</Dimmer>
              ) : (
                this.render_rnd_modal()
              ),
              document.body
            )
          : null}
      </React.Fragment>
    );
  }
}

export default SuperModal;
