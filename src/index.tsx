import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Rnd } from 'react-rnd';
import './assets/scss/styles.scss';
import Content from './help/content';
import Description from './help/description';
import Dimmer from './help/dimmer';
import Footer from './help/footer';
import Header from './help/header';

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

class SuperModal extends React.PureComponent<IProps, any> {
  static defaultProps: Partial<IProps> = {
    className: 'super-modal',
    showModal: false,
    dimmer: true,
    boundWith: 'window',
    dragHandleClassName: 'daragble-header',
    disableDragging: false,
    autoResizeOnload: true,
    alignVertical: 'center',
    alignHorizontal: 'center',
    popUpPosition: {
      x: 300,
      y: 65,
      width: 300,
      height: 300,
      minHeight: 300,
      minWidth: 300,
      maxWidth: 1600,
      maxHeight: 900
    },
    enable: {
      bottom: false,
      bottomLeft: false,
      bottomRight: false,
      left: false,
      right: false,
      top: false,
      topLeft: false,
      topRight: false
    }
  };

  static Header = Header;
  static Description = Description;
  static Content = Content;
  static Footer = Footer;
  static Dimmer = Dimmer;

  constructor(props: any) {
    super(props);
    this.state = {
      className: this.props.className,
      showModal: this.props.showModal,
      dimmer: this.props.dimmer,
      boundWith: this.props.boundWith,
      dragHandleClassName: this.props.dragHandleClassName,
      disableDragging: this.props.disableDragging,
      autoResizeOnload: this.props.autoResizeOnload,
      alignVertical: this.props.alignVertical,
      alignHorizontal: this.props.alignHorizontal,
      popUpPosition: { ...this.props.popUpPosition },
      enable: { ...this.props.enable },
      initialPopUpPosition: { ...this.props.popUpPosition },

      minimized: false,
      stacked: true,
      fullScreen: false
    };
    this.rnd = React.createRef();
    this.dimmerRef = React.createRef();
    this.HeaderRef = React.createRef();
    this.FooterRef = React.createRef();
    this.ContentRef = React.createRef();
    this.DescriptionRef = React.createRef();
  }
  elem: any = document.documentElement;
  document: any = window.document;
  mounted = false;
  windowWidth: number = window.innerWidth;
  windowHeight: number = window.innerHeight;
  width!: number;
  height!: number;
  isResized: any;
  rnd: any;
  dimmerRef: any;
  HeaderRef: any;
  FooterRef: any;
  ContentRef: any;
  DescriptionRef: any;
  lastPosition = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    minHeight: 0,
    minWidth: 0,
    maxWidth: 0,
    maxHeight: 0
  };
  // function call on componentwillmount for getting account note code for selected patient
  componentDidMount = () => {
    this.mounted = true;
    this.initilalPopSizePosition();
  };

  componentDidUpdate = (previousProps: { showModal: boolean }, previousState: { showModal: boolean }) => {
    if (previousState.showModal !== this.state.showModal) {
      if (this.mounted) {
        this.setState(
          {
            popUpPosition: { ...this.props.popUpPosition }
          },
          () => this.initilalPopSizePosition()
        );
      }
    }
    if (previousProps.showModal !== this.props.showModal) {
      if (this.mounted) {
        this.setState(
          {
            popUpPosition: { ...this.props.popUpPosition }
          },
          () => this.initilalPopSizePosition()
        );
      }
    }
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

  // Set Modal size and position when modal open
  initilalPopSizePosition = () => {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
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
    if (this.mounted) {
      this.setState({
        showModal: this.props.showModal,
        minimized: false,
        fullScreen: false,
        stacked: true,
        popUpPosition: {
          ...this.state.popUpPosition,
          width: this.width,
          height: this.height,
          x: Math.round(popX),
          y: Math.round(popY)
        },
        initialPopUpPosition: {
          ...this.state.popUpPosition,
          width: this.width,
          height: this.height,
          x: Math.round(popX),
          y: Math.round(popY)
        },
        loading: false
      });
    }
  };

  // Set width of modal according to the screen size
  setAutoPosition = (width: number, height: number) => {
    if (this.props.autoResizeOnload) {
      if (window.matchMedia('(min-width: 1920px)').matches) {
        width = 1300;
        height = 850;
      } else if (window.matchMedia('(min-width: 1200px)').matches) {
        width = 900;
        height = 515;
      } else if (window.matchMedia('(min-width: 992px)').matches) {
        width = 850;
        height = 515;
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        width = 699;
        height = 515;
      }
    }
    return { width, height };
  };

  // Set postion of modal horizontally
  setHorizontalPosition = (popX: number) => {
    if (this.props.alignHorizontal !== '') {
      switch (this.props.alignHorizontal) {
        case 'left':
          popX = 0;
          break;
        case 'right':
          popX = window.innerWidth - this.width;
          break;
        case 'center':
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
    if (this.props.alignVertical !== '') {
      switch (this.props.alignVertical) {
        case 'top':
          popY = 0;
          break;
        case 'bottom':
          popY = window.innerHeight - this.height;
          break;
        case 'center':
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

  onResize = (ref: any) => {
    this.isResized = true;
    if (this.mounted) {
      this.setState({
        fullScreen: false,
        stacked: true,
        minimized: false,
        popUpPosition: {
          ...this.state.popUpPosition,
          width: ref.style.width,
          height: ref.style.height
        }
      });
    }
  };

  onDragStop = (e: any, d: { x: any; y: any }) => {
    this.isResized = true;
    if (this.mounted) {
      this.setState({
        popUpPosition: {
          ...this.state.popUpPosition,
          x: d.x,
          y: d.y
        }
      });
    }
  };

  minimizeModal = () => {
    let newHeight: number = 0;
    if (this.HeaderRef) {
      newHeight = this.HeaderRef.current.offsetHeight;
      this.HeaderRef.current.parentElement.classList.add('minimized');
    }

    if (!this.state.fullScreen) {
      this.lastPosition = {
        ...this.state.initialPopUpPosition
      };
    }
    if (this.state.dimmer && this.dimmerRef) {
      this.dimmerRef.current.classList.add('minimized');
    }

    if (this.mounted) {
      this.setState(
        {
          minimized: true,
          fullScreen: true,
          stacked: true,
          disableDragging: true,
          dragHandleClassName: '',
          enable: {
            bottom: false,
            bottomLeft: false,
            bottomRight: false,
            left: false,
            right: false,
            top: false,
            topLeft: false,
            topRight: false
          },
          popUpPosition: {
            ...this.state.popUpPosition,
            x: 0,
            y: this.state.dimmer ? 0 : this.windowHeight - newHeight,
            width: '100%',
            height: newHeight,
            maxWidth: 300,
            minWidth: 300,
            maxHeight: newHeight,
            minHeight: newHeight
          }
        },
        () => {
          this.rnd.updatePosition({
            x: 0,
            y: this.state.dimmer ? 0 : this.windowHeight - newHeight
          });
        }
      );
    }
  };

  fullscreenModal = () => {
    if (!this.state.fullScreen) {
      this.lastPosition = {
        ...this.state.initialPopUpPosition
      };
    }
    if (this.HeaderRef) {
      this.HeaderRef.current.parentElement.classList.remove('minimized');
      this.HeaderRef.current.parentElement.classList.add('fullscreen');
    }
    if (this.state.dimmer && this.dimmerRef) {
      this.dimmerRef.current.classList.remove('minimized');
    }
    if (this.mounted) {
      this.setState(
        {
          fullScreen: true,
          minimized: false,
          stacked: false,
          disableDragging: true,
          dragHandleClassName: '',
          enable: {
            bottom: false,
            bottomLeft: false,
            bottomRight: false,
            left: false,
            right: false,
            top: false,
            topLeft: false,
            topRight: false
          },
          popUpPosition: {
            ...this.state.popUpPosition,
            x: 0,
            y: 0,
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%'
          }
        },
        () => {
          this.rnd.updatePosition({
            x: 0,
            y: 0
          });
        }
      );
    }
  };

  stackModal = () => {
    if (this.HeaderRef) {
      this.HeaderRef.current.parentElement.classList.remove('minimized');
      this.HeaderRef.current.parentElement.classList.remove('fullscreen');
    }
    if (this.state.dimmer && this.dimmerRef) {
      this.dimmerRef.current.classList.remove('minimized');
    }
    if (this.mounted) {
      this.setState(
        {
          fullScreen: false,
          minimized: false,
          stacked: true,
          disableDragging: this.props.disableDragging,
          dragHandleClassName: this.state.dragHandleClassName || this.props.dragHandleClassName,
          enable: {
            ...this.props.enable
          },
          popUpPosition: {
            ...this.lastPosition
          }
        },
        () => {
          this.rnd.updatePosition({
            x: this.lastPosition.x,
            y: this.lastPosition.y
          });
        }
      );
    }
  };

  renderRndModal = () => {
    const childrenWithProps = React.Children.map(this.props.children, (child: any) => {
      let childName = child.type.name;
      if (React.isValidElement(child)) {
        let updateProps: any = {};
        switch (childName) {
          case 'Header':
            updateProps = {
              onRequestMinimize: this.minimizeModal,
              onRequestFullscreen: this.fullscreenModal,
              onRequestStack: this.stackModal,
              minizeable: this.props.minizeable,
              minimized: this.state.minimized,
              fullScreen: this.state.fullScreen,
              stacked: this.state.stacked,
              className: this.state.dragHandleClassName,
              reference: this.HeaderRef
            };
            break;
          case 'Content':
            updateProps = {
              reference: this.ContentRef
            };
            break;
          case 'Description':
            updateProps = {
              reference: this.DescriptionRef
            };
            break;
          case 'Footer':
            updateProps = {
              reference: this.FooterRef
            };
            break;
          default:
            updateProps = {};
            break;
        }
        return React.cloneElement(child, updateProps);
      }
      return child;
    });
    return (
      <React.Fragment>
        <Rnd
          // Rnd properties
          className={this.state.className ? `super-modal ${this.state.className}` : 'super-modal'}
          default={this.state.popUpPosition}
          minWidth={this.state.popUpPosition.minWidth}
          minHeight={this.state.popUpPosition.minHeight}
          maxWidth={this.state.popUpPosition.maxWidth}
          maxHeight={this.state.popUpPosition.maxHeight}
          onResize={(e, direction, ref, delta, position) => this.onResize(ref)}
          size={{
            width: this.state.popUpPosition.width,
            height: this.state.popUpPosition.height
          }}
          bounds={this.state.boundWith}
          dragHandleClassName={this.state.dragHandleClassName}
          resizeHandleClasses={{
            topLeft: 'resize_top_left',
            bottomRight: 'resize_bottom_right',
            bottomLeft: 'resize_bottom_left',
            topRight: 'resize_top_right'
          }}
          enableResizing={this.state.enable}
          style={{ overflow: 'hidden' }}
          disableDragging={this.state.disableDragging}
          onDragStop={(e, d) => this.onDragStop(e, d)}
          ref={(rnd) => {
            this.rnd = rnd;
          }}
        >
          {childrenWithProps}
        </Rnd>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.state.showModal
          ? ReactDOM.createPortal(
              this.state.dimmer ? (
                <Dimmer reference={this.dimmerRef}>{this.renderRndModal()}</Dimmer>
              ) : (
                this.renderRndModal()
              ),
              document.body
            )
          : null}
      </React.Fragment>
    );
  }
}

export default SuperModal;
