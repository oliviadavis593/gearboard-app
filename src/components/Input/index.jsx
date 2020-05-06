import React from 'react';
import './style.css';

export default (props) => (
  <div className="gb-input">
    <label>{props.label}</label>
    <input {...props} type={props.type} name={props.name} placeholder={props.placeholder} />
  </div>
);
