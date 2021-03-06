import React, { useReducer } from 'react';

const reducer = (state, action) => {
  const { name, value } = action;

  const newState = {
    ...state,
    [name]: value,
  };

  return newState;
};

const TestReducer = props => {
  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birth: '',
    gender: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    const action = {
      name,
      value,
    };

    dispatch(action);
  };

  return (
    <form style={{width: '300px', margin: '0 auto'}}>
      <input name='firstName' placeholder='First Name' value={state.firstName} type='text' onChange={handleChange} />
      <input name='lastName' placeholder='Second Name' value={state.lastName} type='text' onChange={handleChange} />
      <input name='gender' placeholder='Gender' value={state.gender} type='text' onChange={handleChange} />
      <input name='birth' placeholder='Birthday' value={state.birth} type='date' onChange={handleChange} />
      <input name='email' placeholder='Email' value={state.email} type='text' onChange={handleChange} />
      <input name='password' placeholder='Password' value={state.password} type='password' onChange={handleChange} />
      <input type='submit' />
    </form>
  );
};

export default TestReducer;
