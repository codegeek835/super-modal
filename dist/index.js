

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var reactRnd = require('react-rnd');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

___$insertStyle("@font-face {\n  font-family: \"super-apps\";\n  src: url(\"../fonts/super-apps.eot\");\n  src: url(\"../fonts/super-apps.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/super-apps.woff\") format(\"woff\"), url(\"../fonts/super-apps.ttf\") format(\"truetype\"), url(\"../fonts/super-apps.svg#super-apps\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n[data-icon]:before {\n  font-family: \"super-apps\";\n  content: attr(data-icon);\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n[class^=super-]:before,\n[class*=\" super-\"]:before {\n  font-family: \"super-apps\";\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.super-window-fullscreen:before {\n  content: \"a\";\n}\n\n.super-window-default:before {\n  content: \"b\";\n}\n\n.super-window-minimize:before {\n  content: \"c\";\n}\n\n.super-arrow-down:before {\n  content: \"d\";\n}\n\n.super-arrow-up:before {\n  content: \"e\";\n}\n\n.super-close:before {\n  content: \"f\";\n}\n\n.super-check:before {\n  content: \"g\";\n}\n\n.super-dimmer,\n.super-dimmer * {\n  box-sizing: border-box;\n}\n\n.super-dimmer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  line-height: 1;\n  animation-fill-mode: both;\n  animation-duration: 0.5s;\n  transition: background-color 0.5s linear;\n  flex-direction: column;\n  align-items: center;\n  user-select: none;\n  will-change: opacity;\n  z-index: 1111;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  opacity: 1;\n}\n.super-dimmer.minimized {\n  top: inherit;\n  bottom: 0px;\n  height: 55px;\n  width: 300px;\n  background: transparent;\n  margin: 0 5px;\n}\n.super-dimmer > .super-modal {\n  z-index: 1001;\n}\n\n.super-modal {\n  position: fixed;\n  text-align: left;\n  background: #fff;\n  border: none;\n  box-shadow: 6px 5px 10px 4px rgba(0, 0, 0, 0.2), -5px -6px 20px 10px rgba(0, 0, 0, 0.2);\n  transform-origin: 50% 25%;\n  flex: 0 0 auto;\n  border-radius: 0.28571429rem;\n  user-select: text;\n  will-change: top, left, margin, transform, opacity;\n  z-index: 1111;\n  outline: none;\n  margin: 0;\n  display: flex !important;\n  flex-direction: column;\n}\n.super-modal.hidden {\n  display: none;\n}\n.super-modal.minimized {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  box-shadow: none;\n  border-color: rgba(0, 0, 0, 0.2);\n  border-style: solid;\n  border-width: 1px 1px 0 1px;\n}\n.super-modal.minimized > .header {\n  background-color: #f2f2f2;\n}\n.super-modal.minimized > .header > .icon-area {\n  background-color: #f2f2f2;\n}\n.super-modal.fullscreen {\n  border-radius: 0;\n}\n.super-modal > .header {\n  box-sizing: border-box;\n  background: #fff;\n  padding: 1rem;\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.85);\n  border-bottom: 1px solid rgba(34, 36, 38, 0.15);\n  font-size: 18px;\n  height: 55px;\n  display: flex;\n}\n.super-modal > .header.daragble-header {\n  cursor: all-scroll;\n}\n.super-modal > .header > h3 {\n  margin: 0;\n  font-size: 18px;\n  flex: 1 1 0;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.super-modal > .header > .icon-area {\n  display: flex;\n  justify-content: flex-end;\n  background-color: #fff;\n  align-self: flex-end;\n}\n.super-modal > .header > .icon-area i {\n  color: #000000;\n  opacity: 0.5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n  margin-left: 10px;\n}\n.super-modal > .header > .icon-area i.super-close {\n  font-size: 24px;\n}\n.super-modal > .content {\n  width: 100%;\n  font-size: 1em;\n  padding: 1rem;\n  background: #fff;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 0px;\n}\n.super-modal > .content > .description {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  flex: 1 1 0px;\n}\n.super-modal > .footer {\n  padding: 1rem;\n  box-sizing: border-box;\n  display: flex;\n  border-top: 1px solid rgba(34, 36, 38, 0.15);\n}\n.super-modal .scrolling.content {\n  overflow: auto;\n}\n.super-modal span [class^=resize_] {\n  z-index: 1111;\n  width: 8px !important;\n  height: 8px !important;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAxLTIwVDExOjQ5OjQwKzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTAxLTIwVDExOjQ5OjQwKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMS0yMFQxMTo0OTo0MCswNTozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjVjYzEwMC05YjBjLTYzNDAtYWUyZS0xMmJjYjY2YmUxMzUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5MTFiNmEyYS01ZWQxLTExNGQtOTljZi01YzkwZWQ4MGZkYTkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYjhkMWFhNS1lMzMyLTQwNDItYjE5OC04Nzc1MTI5MTcwNTkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplYjhkMWFhNS1lMzMyLTQwNDItYjE5OC04Nzc1MTI5MTcwNTkiIHN0RXZ0OndoZW49IjIwMjAtMDEtMjBUMTE6NDk6NDArMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDY1Y2MxMDAtOWIwYy02MzQwLWFlMmUtMTJiY2I2NmJlMTM1IiBzdEV2dDp3aGVuPSIyMDIwLTAxLTIwVDExOjQ5OjQwKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Y+OEDgAAADdJREFUGJV9jkEKADAIw9y/7duz08C5uoIHSShdQEyRRIA/SQDxhVao8BEyky6P8Py29trQYW/a3vOm9EWG11kAAAAASUVORK5CYII=\");\n}\n.super-modal span .resize_top_left {\n  left: 1px !important;\n  top: 1px !important;\n  transform: rotate(180deg);\n}\n.super-modal span .resize_top_right {\n  right: 1px !important;\n  top: 1px !important;\n  transform: rotate(270deg);\n}\n.super-modal span .resize_bottom_right {\n  right: 1px !important;\n  bottom: 1px !important;\n  transform: rotate(0deg);\n}\n.super-modal span .resize_bottom_left {\n  left: 1px !important;\n  bottom: 1px !important;\n  transform: rotate(90deg);\n}");

var Content = function (props) {
    return (React.createElement("div", { className: "content " + (props.className || ''), id: props.id || '', style: props.styles || {}, ref: props.reference }, props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children));
};

var Description = function (props) {
    return (React.createElement("div", { className: "description " + (props.className || ''), id: props.id || '', ref: props.reference }, props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children));
};

var Dimmer = function (props) {
    return (React.createElement("div", { className: 'super-dimmer', ref: props.reference }, props.children));
};

var Footer = function (props) {
    return (React.createElement("div", { className: "footer " + (props.className || ''), id: props.id || '', ref: props.reference }, props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children));
};

var Header = function (props) {
    return (React.createElement("div", { className: "header " + (props.className || ''), id: props.id || '', style: props.styles || {}, ref: props.reference },
        props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children,
        React.createElement("span", { className: 'icon-area' },
            props.minizeable && (React.createElement(React.Fragment, null,
                !props.minimized && (React.createElement("i", { className: 'super-window-minimize', tabIndex: 0, id: 'minimizeButton', onClick: props.onRequestMinimize })),
                props.fullScreen && (React.createElement("i", { className: 'super-window-fullscreen', tabIndex: 0, id: 'stackedButton', onClick: props.onRequestStack })),
                props.stacked && (React.createElement("i", { className: 'super-window-default', tabIndex: 0, id: 'fullscreenButton', onClick: props.onRequestFullscreen })))),
            React.createElement("i", { className: 'super-close', tabIndex: 0, id: 'closeButton', onClick: props.onRequestClose, style: props.minizeable ? {} : { marginLeft: 'auto' } }))));
};

var SuperModal = /** @class */ (function (_super) {
    __extends(SuperModal, _super);
    function SuperModal(props) {
        var _this = _super.call(this, props) || this;
        _this.elem = document.documentElement;
        _this.document = window.document;
        _this.mounted = false;
        _this.windowWidth = window.innerWidth;
        _this.windowHeight = window.innerHeight;
        _this.lastPosition = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            minHeight: 0,
            minWidth: 0,
            maxWidth: 0,
            maxHeight: 0,
        };
        // function call on componentwillmount for getting account note code for selected patient
        _this.componentDidMount = function () {
            _this.mounted = true;
            _this.initilalPopSizePosition();
        };
        _this.componentDidUpdate = function (previousProps, previousState) {
            if (previousState.showModal !== _this.state.showModal) {
                if (_this.mounted) {
                    _this.setState({
                        popUpPosition: __assign({}, _this.props.popUpPosition),
                    }, function () { return _this.initilalPopSizePosition(); });
                }
            }
            if (previousProps.showModal !== _this.props.showModal) {
                if (_this.mounted) {
                    _this.setState({
                        popUpPosition: __assign({}, _this.props.popUpPosition),
                    }, function () { return _this.initilalPopSizePosition(); });
                }
            }
        };
        _this.componentWillUnmount = function () {
            _this.mounted = false;
        };
        // Set Modal size and position when modal open
        _this.initilalPopSizePosition = function () {
            _this.windowWidth = window.innerWidth;
            _this.windowHeight = window.innerHeight;
            _this.width = _this.state.popUpPosition.width;
            _this.height = _this.state.popUpPosition.height;
            var popX = 0;
            var popY = 0;
            if (_this.props.autoResizeOnload) {
                var autoWidthheight = _this.setAutoPosition(_this.width, _this.height);
                _this.width = autoWidthheight.width;
                _this.height = autoWidthheight.height;
            }
            popX = _this.setHorizontalPosition(popX);
            popY = _this.setVerticalPosition(popY);
            if (_this.mounted) {
                _this.setState({
                    showModal: _this.props.showModal,
                    minimized: false,
                    fullScreen: false,
                    stacked: true,
                    popUpPosition: __assign(__assign({}, _this.state.popUpPosition), { width: _this.width, height: _this.height, x: Math.round(popX), y: Math.round(popY) }),
                    initialPopUpPosition: __assign(__assign({}, _this.state.popUpPosition), { width: _this.width, height: _this.height, x: Math.round(popX), y: Math.round(popY) }),
                    loading: false,
                });
            }
        };
        // Set width of modal according to the screen size
        _this.setAutoPosition = function (width, height) {
            if (_this.props.autoResizeOnload) {
                if (window.matchMedia("(min-width: 1920px)").matches) {
                    width = 1300;
                    height = 850;
                }
                else if (window.matchMedia("(min-width: 1200px)").matches) {
                    width = 900;
                    height = 515;
                }
                else if (window.matchMedia("(min-width: 992px)").matches) {
                    width = 850;
                    height = 515;
                }
                else if (window.matchMedia("(min-width: 768px)").matches) {
                    width = 699;
                    height = 515;
                }
            }
            return { width: width, height: height };
        };
        // Set postion of modal horizontally
        _this.setHorizontalPosition = function (popX) {
            if (_this.props.alignHorizontal !== "") {
                switch (_this.props.alignHorizontal) {
                    case "left":
                        popX = 0;
                        break;
                    case "right":
                        popX = window.innerWidth - _this.width;
                        break;
                    case "center":
                        popX = (window.innerWidth - _this.width) / 2;
                        break;
                    default:
                        popX = _this.state.popUpPosition.x;
                        break;
                }
            }
            else {
                popX = _this.state.popUpPosition.x;
            }
            return popX;
        };
        // Set postion of modal vertically
        _this.setVerticalPosition = function (popY) {
            if (_this.props.alignVertical !== "") {
                switch (_this.props.alignVertical) {
                    case "top":
                        popY = 0;
                        break;
                    case "bottom":
                        popY = window.innerHeight - _this.height;
                        break;
                    case "center":
                        popY = (window.innerHeight - _this.height) / 2;
                        break;
                    default:
                        popY = _this.state.popUpPosition.y;
                        break;
                }
            }
            else {
                popY = _this.state.popUpPosition.y;
            }
            return popY;
        };
        _this.onResize = function (e, direction, ref, delta, position) {
            console.log(e, direction, ref, delta, position);
            _this.isResized = true;
            if (_this.mounted) {
                _this.setState({
                    fullScreen: false,
                    stacked: true,
                    minimized: false,
                    popUpPosition: __assign(__assign({}, _this.state.popUpPosition), { width: ref.style.width, height: ref.style.height }),
                });
            }
        };
        _this.onDragStop = function (d) {
            _this.isResized = true;
            if (_this.mounted) {
                _this.setState({
                    popUpPosition: __assign(__assign({}, _this.state.popUpPosition), { x: d.x, y: d.y }),
                });
            }
        };
        _this.minimizeModal = function () {
            var newHeight = 0;
            if (_this.HeaderRef) {
                newHeight = _this.HeaderRef.current.offsetHeight;
                _this.HeaderRef.current.parentElement.classList.add("minimized");
            }
            if (!_this.state.fullScreen) {
                _this.lastPosition = __assign({}, _this.state.initialPopUpPosition);
            }
            if (_this.state.dimmer && _this.dimmerRef) {
                _this.dimmerRef.current.classList.add("minimized");
            }
            if (_this.mounted) {
                _this.setState({
                    minimized: true,
                    fullScreen: true,
                    stacked: true,
                    disableDragging: true,
                    dragHandleClassName: "",
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
                    popUpPosition: __assign(__assign({}, _this.state.popUpPosition), { x: 0, y: _this.state.dimmer ? 0 : _this.windowHeight - newHeight, width: "100%", height: newHeight, maxWidth: 300, minWidth: 300, maxHeight: newHeight, minHeight: newHeight }),
                }, function () {
                    _this.rnd.updatePosition({
                        x: 0,
                        y: _this.state.dimmer ? 0 : _this.windowHeight - newHeight,
                    });
                });
            }
        };
        _this.fullscreenModal = function () {
            if (!_this.state.fullScreen) {
                _this.lastPosition = __assign({}, _this.state.initialPopUpPosition);
            }
            if (_this.HeaderRef) {
                _this.HeaderRef.current.parentElement.classList.remove("minimized");
                _this.HeaderRef.current.parentElement.classList.add("fullscreen");
            }
            if (_this.state.dimmer && _this.dimmerRef) {
                _this.dimmerRef.current.classList.remove("minimized");
            }
            if (_this.mounted) {
                _this.setState({
                    fullScreen: true,
                    minimized: false,
                    stacked: false,
                    disableDragging: true,
                    dragHandleClassName: "",
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
                    popUpPosition: __assign(__assign({}, _this.state.popUpPosition), { x: 0, y: 0, width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }),
                }, function () {
                    _this.rnd.updatePosition({
                        x: 0,
                        y: 0,
                    });
                });
            }
        };
        _this.stackModal = function () {
            if (_this.HeaderRef) {
                _this.HeaderRef.current.parentElement.classList.remove("minimized");
                _this.HeaderRef.current.parentElement.classList.remove("fullscreen");
            }
            if (_this.state.dimmer && _this.dimmerRef) {
                _this.dimmerRef.current.classList.remove("minimized");
            }
            if (_this.mounted) {
                _this.setState({
                    fullScreen: false,
                    minimized: false,
                    stacked: true,
                    disableDragging: _this.props.disableDragging,
                    dragHandleClassName: _this.state.dragHandleClassName || _this.props.dragHandleClassName,
                    enable: __assign({}, _this.props.enable),
                    popUpPosition: __assign({}, _this.lastPosition),
                }, function () {
                    _this.rnd.updatePosition({
                        x: _this.lastPosition.x,
                        y: _this.lastPosition.y,
                    });
                });
            }
        };
        _this.renderRndModal = function () {
            var childrenWithProps = React.Children.map(_this.props.children, function (child) {
                var childName = child.type.name;
                if (React.isValidElement(child)) {
                    var updateProps = {};
                    switch (childName) {
                        case "Header":
                            updateProps = {
                                onRequestMinimize: _this.minimizeModal,
                                onRequestFullscreen: _this.fullscreenModal,
                                onRequestStack: _this.stackModal,
                                minizeable: _this.props.minizeable,
                                minimized: _this.state.minimized,
                                fullScreen: _this.state.fullScreen,
                                stacked: _this.state.stacked,
                                className: _this.state.dragHandleClassName,
                                reference: _this.HeaderRef,
                            };
                            break;
                        case "Content":
                            updateProps = {
                                reference: _this.ContentRef,
                            };
                            break;
                        case "Description":
                            updateProps = {
                                reference: _this.DescriptionRef,
                            };
                            break;
                        case "Footer":
                            updateProps = {
                                reference: _this.FooterRef,
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
            return (React.createElement(React.Fragment, null,
                React.createElement(reactRnd.Rnd
                // Rnd properties
                , { 
                    // Rnd properties
                    className: _this.state.className
                        ? "super-modal " + _this.state.className
                        : "super-modal", default: _this.state.popUpPosition, minWidth: _this.state.popUpPosition.minWidth, minHeight: _this.state.popUpPosition.minHeight, maxWidth: _this.state.popUpPosition.maxWidth, maxHeight: _this.state.popUpPosition.maxHeight, onResize: function (e, direction, ref, delta, position) {
                        return _this.onResize(e, direction, ref, delta, position);
                    }, size: {
                        width: _this.state.popUpPosition.width,
                        height: _this.state.popUpPosition.height,
                    }, bounds: _this.state.boundWith, dragHandleClassName: _this.state.dragHandleClassName, resizeHandleClasses: {
                        topLeft: "resize_top_left",
                        bottomRight: "resize_bottom_right",
                        bottomLeft: "resize_bottom_left",
                        topRight: "resize_top_right",
                    }, enableResizing: _this.state.enable, style: { overflow: "hidden" }, disableDragging: _this.state.disableDragging, onDragStop: function (_e, d) { return _this.onDragStop(d); }, ref: function (rnd) {
                        _this.rnd = rnd;
                    } }, childrenWithProps)));
        };
        _this.state = {
            className: _this.props.className,
            showModal: _this.props.showModal,
            dimmer: _this.props.dimmer,
            boundWith: _this.props.boundWith,
            dragHandleClassName: _this.props.dragHandleClassName,
            disableDragging: _this.props.disableDragging,
            autoResizeOnload: _this.props.autoResizeOnload,
            alignVertical: _this.props.alignVertical,
            alignHorizontal: _this.props.alignHorizontal,
            popUpPosition: __assign({}, _this.props.popUpPosition),
            enable: __assign({}, _this.props.enable),
            initialPopUpPosition: __assign({}, _this.props.popUpPosition),
            minimized: false,
            stacked: true,
            fullScreen: false,
        };
        _this.rnd = React.createRef();
        _this.dimmerRef = React.createRef();
        _this.HeaderRef = React.createRef();
        _this.FooterRef = React.createRef();
        _this.ContentRef = React.createRef();
        _this.DescriptionRef = React.createRef();
        return _this;
    }
    SuperModal.prototype.render = function () {
        return (React.createElement(React.Fragment, null, this.state.showModal
            ? ReactDOM.createPortal(this.state.dimmer ? (React.createElement(Dimmer, { reference: this.dimmerRef }, this.renderRndModal())) : (this.renderRndModal()), document.body)
            : null));
    };
    SuperModal.defaultProps = {
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
            width: 300,
            height: 300,
            minHeight: 300,
            minWidth: 300,
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
    SuperModal.Header = Header;
    SuperModal.Description = Description;
    SuperModal.Content = Content;
    SuperModal.Footer = Footer;
    SuperModal.Dimmer = Dimmer;
    return SuperModal;
}(React.PureComponent));

exports.default = SuperModal;
//# sourceMappingURL=index.js.map
