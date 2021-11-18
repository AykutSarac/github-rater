import React from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../slices/user';

const Input: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');

  const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username !== '') {
      dispatch(getUser(username));
      setUsername('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="GitHub Username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">ANALYZE</button>
    </form>
  );
};

export default Input;
