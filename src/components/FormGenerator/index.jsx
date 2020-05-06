import React from 'react';
import Form from '../Form';
import Input from '../Input';

export default (props) => {
  return (
    <Form title={props.title} buttonLabel={props.buttonLabel}>
      {props.fields.map((field) => (
        <Input {...field} />
      ))}
    </Form>
  );
};
