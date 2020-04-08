import { useState } from 'react';

const useForm = (initialFormState, callback) => {
  const [values, setValues] = useState(initialFormState);

  const handleChange = e => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    callback(values, null);
    setValues(initialFormState);
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
};

export default useForm;
