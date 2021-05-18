"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SingleSelect = function SingleSelect(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
    options: props.options
  });
};

var _default = SingleSelect;
exports["default"] = _default;