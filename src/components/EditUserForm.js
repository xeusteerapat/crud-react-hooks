import React, { useState, useEffect } from 'react';
import useForm from '../hooks/useForm';

const EditUserForm = ({ currentUser, setEditing, updateUser }) => {
  const [user, setUser] = useState(currentUser);

  const { values, handleChange } = useForm(user, updateUser);

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(user.id, user);
  };

  useEffect(() => {
    setUser(values);
  }, [values]);

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
      />
      <button>Update user</button>
      <button onClick={() => setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
