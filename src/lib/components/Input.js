import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

/**
 * Primary UI component for user interaction
 */
export default class Input extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      value: '',
      error: {
        enabled: Boolean(this.props.error_message),
        message: this.props.error_message
      }
    }
  }

  handleUserInput(e) {
    let input = e.target.value.toString();

    let error_state = this.validateUserInput(input);

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

  validateNumberInput(input) {
    let int_input = parseFloat(input);

    // Check works when the first input is not number.
    if(isNaN(int_input)) {
      return 'Only numbers allowed as input';
    }

    // Check works when first input is a number and post that there is a letter.
    if(int_input.toString().length !== input.length) {
      return 'Only numbers allowed as input';
    }
  }

  validateEmailInput(input) {
    let email_regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let matches = input.match(email_regex);

    if(!matches) {
      return 'Enter valid email address';
    }
  }

  validateUserInput(input) {
    let error_state = {
      enabled: false,
      message: ''
    };

    let type_error_msg;

    input = input.trim();

    if(this.props.required && !input.length) {
      error_state.enabled = true;
      error_state.message = 'This is a mandatory field';
    }

    switch(this.props.type) {
      case 'number':
        type_error_msg = this.validateNumberInput(input);
        break;
      case 'email':
        type_error_msg = this.validateEmailInput(input);
        break;
    }

    if(type_error_msg) {
      error_state.enabled = true;
      error_state.message = type_error_msg;
    }

    let custom_error_message = this.props.customValidation(input);

    if(typeof custom_error_message === 'string' && custom_error_message.trim()) {
      error_state.enabled = true;
      error_state.message = custom_error_message;
    }

    return error_state;
  }

  render() {
    return (
      <input
      name={this.props.name}
      // css={[input_styles, this.state.error.enabled ? input_error_style : null]}
      type={this.props.type}
      value={this.state.value}
      placeholder={this.props.placeholder}
      onChange={this.handleUserInput.bind(this)}
      required={this.props.required}
      >
      </input>
    );
  }
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'email']),
  help_text: PropTypes.string,
  show_text_counter: PropTypes.bool,
  min_length: PropTypes.number,
  max_length: PropTypes.number,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error_message: PropTypes.string,
  auto_focus: PropTypes.bool,
  handleOnInputChange: PropTypes.func,
  handleOnInputBlur: PropTypes.func,
  customValidation: PropTypes.func
};

Input.defaultProps = {
  type: 'text',
  help_text: '',
  show_text_counter: false,
  placeholder: 'Type here..',
  required: false,
  error_message: '',
  auto_focus: false,
  handleOnInputChange: () => {/* Empty func */},
  customValidation: () => {return '';}
};