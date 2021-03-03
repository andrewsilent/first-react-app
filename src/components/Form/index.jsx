import React from 'react';
import SignUpForm from '../SignUpForm'
import { SIGN_UP_SCHEMA } from '../../utils/validationSchemas';

const Form = props => {
  const userDateValue = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  console.log(
    SIGN_UP_SCHEMA.validate(userDateValue).then(values =>
      console.log(values).catch(e => {throw e})
    )
  );

  return <div>
    <SignUpForm />
  </div>;
}

export default Form;
