import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../slices/user';

const Input = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (username !== '') {
      if (username) dispatch(getUser(username));
      setUsername('');
    }
  };

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) =>
    setUsername(e.target.value);

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="GitHub Username..." value={username} onChange={onChange} />
      <button type="submit" onClick={onSubmit}>
        ANALYZE
      </button>
    </form>
  );
};

export default Input;
