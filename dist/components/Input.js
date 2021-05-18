"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Input.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Primary UI component for user interaction
 */
var Input = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Input, _React$PureComponent);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {
      counter: 0,
      value: '',
      error: {
        enabled: Boolean(_this.props.error_message),
        message: _this.props.error_message
      }
    };
    return _this;
  }

  _createClass(Input, [{
    key: "handleUserInput",
    value: function handleUserInput(e) {
      var input = e.target.value.toString();
      var error_state = this.validateUserInput(input);
      this.props.handleOnInputChange({
        value: input,
        error: error_state
      });
      this.setState({
        counter: input.length,
        value: input,
        error: error_state
      });
    }
  }, {
    key: "validateNumberInput",
    value: function validateNumberInput(input) {
      var int_input = parseFloat(input); // Check works when the first input is not number.

      if (isNaN(int_input)) {
        return 'Only numbers allowed as input';
      } // Check works when first input is a number and post that there is a letter.


      if (int_input.toString().length !== input.length) {
        return 'Only numbers allowed as input';
      }
    }
  }, {
    key: "validateEmailInput",
    value: function validateEmailInput(input) {
      var email_regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var matches = input.match(email_regex);

      if (!matches) {
        return 'Enter valid email address';
      }
    }
  }, {
    key: "validateUserInput",
    value: function validateUserInput(input) {
      var error_state = {
        enabled: false,
        message: ''
      };
      var type_error_msg;
      input = input.trim();

      if (this.props.required && !input.length) {
        error_state.enabled = true;
        error_state.message = 'This is a mandatory field';
      }

      switch (this.props.type) {
        case 'number':
          type_error_msg = this.validateNumberInput(input);
          break;

        case 'email':
          type_error_msg = this.validateEmailInput(input);
          break;
      }

      if (type_error_msg) {
        error_state.enabled = true;
        error_state.message = type_error_msg;
      }

      var custom_error_message = this.props.customValidation(input);

      if (typeof custom_error_message === 'string' && custom_error_message.trim()) {
        error_state.enabled = true;
        error_state.message = custom_error_message;
      }

      return error_state;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "wrapper"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        name: this.props.name,
        className: "input",
        type: this.props.type,
        value: this.state.value,
        placeholder: this.props.placeholder,
        onChange: this.handleUserInput.bind(this),
        required: this.props.required
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "grid"
      }, this.state.error.enabled ? this.state.error.message : this.props.help_text ? this.props.help_text : '')));
    }
  }]);

  return Input;
}(_react["default"].PureComponent);

exports["default"] = Input;
;
Input.propTypes = {
  name: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].oneOf(['text', 'number', 'email']),
  help_text: _propTypes["default"].string,
  show_text_counter: _propTypes["default"].bool,
  min_length: _propTypes["default"].number,
  max_length: _propTypes["default"].number,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  error_message: _propTypes["default"].string,
  auto_focus: _propTypes["default"].bool,
  handleOnInputChange: _propTypes["default"].func,
  handleOnInputBlur: _propTypes["default"].func,
  customValidation: _propTypes["default"].func
};
Input.defaultProps = {
  type: 'text',
  help_text: '',
  show_text_counter: false,
  placeholder: 'Type here..',
  required: false,
  error_message: '',
  auto_focus: false,
  handleOnInputChange: function handleOnInputChange() {
    /* Empty func */
  },
  customValidation: function customValidation() {
    return '';
  }
};