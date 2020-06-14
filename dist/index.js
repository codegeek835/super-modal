

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

___$insertStyle("/*resizable and dargable Modal Start*/\n/*resizable and dargable Modal End*/\n.super-dimmer {\n  position: absolute;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  vertical-align: middle;\n  padding: 1em;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  line-height: 1;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-transition: background-color 0.5s linear;\n  transition: background-color 0.5s linear;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  will-change: opacity;\n  z-index: 1111;\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  opacity: 1;\n}\n.super-dimmer > .super-modal {\n  z-index: 1001;\n}\n\n.super-modal {\n  position: fixed !important;\n  display: none;\n  text-align: left;\n  background: #fff;\n  border: none;\n  -webkit-box-shadow: 6px 5px 10px 4px rgba(0, 0, 0, 0.2), -5px -6px 20px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 6px 5px 10px 4px rgba(0, 0, 0, 0.2), -5px -6px 20px 10px rgba(0, 0, 0, 0.2);\n  -webkit-transform-origin: 50% 25%;\n  transform-origin: 50% 25%;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  border-radius: 0.28571429rem;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  will-change: top, left, margin, transform, opacity;\n  margin: 5vh auto;\n  z-index: 1111;\n}\n.super-modal > .header {\n  border-radius: 0.285714rem 0.285714rem 0px 0px;\n  background: #fff;\n  margin: 0;\n  padding: 1.25rem 1.5rem;\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.85);\n  border-bottom: 1px solid rgba(34, 36, 38, 0.15);\n  font-size: 18px !important;\n  line-height: 1.28571429em;\n  border-top-left-radius: 0.28571429rem;\n  border-top-right-radius: 0.28571429rem;\n}\n.super-modal > .header h3 {\n  margin: 0;\n}\n.super-modal > .header > i.close.icon {\n  top: 11px !important;\n  right: 0 !important;\n  color: #000000 !important;\n  opacity: 0.2 !important;\n  font-size: 15px !important;\n  width: 2.25rem;\n  height: 2.25rem;\n  padding: 0.625rem 0 0 0;\n  cursor: pointer;\n  position: absolute;\n  z-index: 1000;\n}\n.super-modal > .content {\n  display: block;\n  width: 100%;\n  font-size: 1em;\n  line-height: 1.4;\n  padding: 1.5rem;\n  background: #fff;\n}\n.super-modal .scrolling.content {\n  max-height: calc(100% - 3.7em);\n  overflow: auto;\n}\n.super-modal .inner-header {\n  padding: 1.25rem 0 0rem 0;\n  color: rgba(0, 0, 0, 0.85);\n  border-bottom: 2px solid rgba(34, 36, 38, 0.15);\n  font-size: 18px !important;\n  line-height: 1.28571429em;\n}\n.super-modal .content .description {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n}\n\n.super-modal.react-draggable {\n  outline: none;\n  margin: 0 !important;\n  display: flex !important;\n  flex-direction: column;\n}\n.super-modal.react-draggable > .daragble-header {\n  cursor: all-scroll;\n}\n.super-modal.react-draggable > .content > .description {\n  flex: 1 1 0px;\n}\n.super-modal.react-draggable .content {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 0px;\n}\n.super-modal.react-draggable [class^=resize_] {\n  z-index: 1111;\n  width: 8px !important;\n  height: 8px !important;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAxLTIwVDExOjQ5OjQwKzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTAxLTIwVDExOjQ5OjQwKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMS0yMFQxMTo0OTo0MCswNTozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjVjYzEwMC05YjBjLTYzNDAtYWUyZS0xMmJjYjY2YmUxMzUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5MTFiNmEyYS01ZWQxLTExNGQtOTljZi01YzkwZWQ4MGZkYTkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYjhkMWFhNS1lMzMyLTQwNDItYjE5OC04Nzc1MTI5MTcwNTkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplYjhkMWFhNS1lMzMyLTQwNDItYjE5OC04Nzc1MTI5MTcwNTkiIHN0RXZ0OndoZW49IjIwMjAtMDEtMjBUMTE6NDk6NDArMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDY1Y2MxMDAtOWIwYy02MzQwLWFlMmUtMTJiY2I2NmJlMTM1IiBzdEV2dDp3aGVuPSIyMDIwLTAxLTIwVDExOjQ5OjQwKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Y+OEDgAAADdJREFUGJV9jkEKADAIw9y/7duz08C5uoIHSShdQEyRRIA/SQDxhVao8BEyky6P8Py29trQYW/a3vOm9EWG11kAAAAASUVORK5CYII=\");\n}\n.super-modal.react-draggable .resize_top_left {\n  left: 1px !important;\n  top: 1px !important;\n  transform: rotate(180deg);\n}\n.super-modal.react-draggable .resize_top_right {\n  right: 1px !important;\n  top: 1px !important;\n  transform: rotate(270deg);\n}\n.super-modal.react-draggable .resize_bottom_right {\n  right: 1px !important;\n  bottom: 1px !important;\n  transform: rotate(0deg);\n}\n.super-modal.react-draggable .resize_bottom_left {\n  left: 1px !important;\n  bottom: 1px !important;\n  transform: rotate(90deg);\n}\n\n.super-modal.hidden {\n  display: none !important;\n}\n\n@media print {\n  .super-modal.hide_on_print {\n    display: none !important;\n  }\n\n  .super-dimmer.hide_on_print {\n    display: none !important;\n  }\n}");

var Content = function (props) {
    return (React.createElement("div", { className: "content " + props.className, id: props.id ? props.id : "", style: props.styles || {} }, props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children));
};

var Description = function (props) {
    return (React.createElement("div", { className: "description " + props.className, id: props.id ? props.id : "" }, props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children));
};

var Dimmer = function (props) {
    return (React.createElement("div", { className: "super-dimmer" }, props.children));
};

var Description$1 = function (props) {
    return (React.createElement("div", { className: "footer " + props.className, id: props.id ? props.id : "" }, props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children));
};

var Header = function (props) {
    return (React.createElement("div", { className: "header " + props.className, id: props.id, style: props.styles || {} },
        React.createElement("i", { "aria-hidden": 'true', className: 'close icon', tabIndex: 0, id: 'account_notes_model_close_button', onClick: props.onRequestClose }),
        props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : props.children));
};

var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.is_mounted = false;
        _this.window_width = window.innerWidth;
        // function call on componentwillmount for getting account note code for selected patient
        _this.componentDidMount = function () {
            _this.is_mounted = true;
            _this.initilalPopSizePosition();
        };
        _this.componentDidUpdate = function (previousProps, previousState) {
            if (previousState.showModal != _this.state.showModal) {
                if (_this.is_mounted) {
                    _this.setState({
                        showModal: _this.state.showModal,
                    });
                }
            }
            if (previousProps.showModal !== _this.props.showModal) {
                if (_this.is_mounted) {
                    _this.setState({
                        showModal: _this.props.showModal,
                    });
                }
            }
        };
        _this.componentWillUnmount = function () {
            _this.is_mounted = false;
        };
        // Set Modal size and position when modal open
        _this.initilalPopSizePosition = function () {
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
            if (_this.is_mounted) {
                _this.setState({
                    showModal: _this.props.showModal,
                    popUpPosition: __assign(__assign({}, _this.state.popUpPosition), { width: _this.width, height: _this.height, x: Math.round(popX), y: Math.round(popY) }),
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
        _this.render_rnd_modal = function () {
            return (React.createElement(reactRnd.Rnd
            // Rnd properties
            , { 
                // Rnd properties
                className: _this.props.className
                    ? "super-modal " + _this.props.className
                    : "super-modal", default: _this.state.popUpPosition, minWidth: _this.state.popUpPosition.minWidth, minHeight: _this.state.popUpPosition.minHeight, maxWidth: _this.state.popUpPosition.maxWidth, maxHeight: _this.state.popUpPosition.maxHeight, onResize: function (_e, _direction, ref, _delta, _position) {
                    _this.is_resized = true;
                    if (_this.is_mounted) {
                        _this.setState({
                            popUpPosition: __assign(__assign({}, _this.state.popUpPosition), { width: ref.style.width, height: ref.style.height }),
                        });
                    }
                }, size: {
                    width: _this.state.popUpPosition.width,
                    height: _this.state.popUpPosition.height,
                }, bounds: _this.props.boundWith, dragHandleClassName: _this.props.dragHandleClassName, resizeHandleClasses: {
                    topLeft: "resize_top_left",
                    bottomRight: "resize_bottom_right",
                    bottomLeft: "resize_bottom_left",
                    topRight: "resize_top_right",
                }, enableResizing: _this.props.enable, style: { overflow: "hidden" }, disableDragging: _this.props.disableDragging }, React.Children.map(_this.props.children, function (child) {
                return child;
            })));
        };
        _this.state = {
            popUpPosition: __assign({}, _this.props.popUpPosition),
        };
        return _this;
    }
    Modal.prototype.render = function () {
        return (React.createElement(React.Fragment, null, this.state.showModal
            ? ReactDOM.createPortal(this.props.dimmer ? (React.createElement(Dimmer, null, this.render_rnd_modal())) : (this.render_rnd_modal()), document.body)
            : null));
    };
    Modal.defaultProps = {
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
    Modal.Header = Header;
    Modal.Description = Description;
    Modal.Content = Content;
    Modal.Footer = Description$1;
    Modal.Dimmer = Dimmer;
    return Modal;
}(React.Component));

exports.ResizableDraggableModal = Modal;
//# sourceMappingURL=index.js.map
