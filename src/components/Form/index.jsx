import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

export default (props) => (
  <form className="gb-form">
    <h1>{props.title}</h1>
    {props.children}
    <div>
      <button type="submit">{props.buttonLabel}</button>
      <Link className='demo__buttonLabel' to='/homepage'>Demo</Link>
    </div>
  </form>
);
