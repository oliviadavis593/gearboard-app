import React from 'react';
import './style.css';

export default (props) => (
  <form className="gb-form">
    <h1>{props.title}</h1>
    {props.children}
    <div>
      <button type="submit">{props.buttonLabel}</button>
    </div>
  </form>
);
