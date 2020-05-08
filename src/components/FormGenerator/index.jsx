import React from 'react';
import Form from '../Form';
import Input from '../Input';

export default (props) => {
  return (
    <Form handleSubmit={props.handleSubmit} title={props.title} buttonLabel={props.buttonLabel}>
      {props.schema.fields.map((field) => {
        if (field.type === 'textarea') {
          return <textarea {...field} />;
        } else {
          return <Input {...field} />;
        }
      })}

      {props.schema.buttons.map((button) => (
        <button onClick={button.onClick}>{button.label}</button>
      ))}

      {props.schema.selects?.map((select) => (
        <select onChange={select.handleChange}>
          {select.options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      ))}
      
    </Form>
  );
};
