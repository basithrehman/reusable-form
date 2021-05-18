import React from 'react';
import './Input.css';

const Button = (props) => {
   return (
      <button className="btn"
        data-id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onClick={props.handleClick}> 
           <h4>{props.label}</h4>
      </button>
   )
}
export default Button;