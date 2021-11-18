import React from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../slices/user';

const Input = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (username !== '') {
      if (username) dispatch(getUser(username));
      setUsername('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="GitHub Username..." value={username} onChange={e => setUsername(e.target.value)} />
      <button type="submit" onClick={onSubmit}>
        ANALYZE
      </button>
    </form>
  );
};

export default Input;
