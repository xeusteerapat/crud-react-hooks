import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import useForm from '../hooks/useForm';

const AddUserForm = ({ addUser }) => {
  const initialFormState = { id: uuid(), name: '', username: '' };
  const [error] = useState(false);
  const { values, handleChange, handleSubmit } = useForm(
    initialFormState,
    addUser
  );

  const warning = {
    visibility: error ? 'visible' : 'hidden',
    color: 'red'
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <small style={warning}>Please enter your name</small>
      <label htmlFor="">Username</label>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
      />
      <small style={warning}>Please enter your username</small>
      <div>
        <button>Add New User</button>
      </div>
    </form>
  );
};

export default AddUserForm;
