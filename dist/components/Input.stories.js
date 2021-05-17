"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Input = _interopRequireDefault(require("./Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Example/Input',
  component: _Input["default"],
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Input["default"], args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  primary: true,
  label: 'Input'
};