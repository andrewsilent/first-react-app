import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/index';
import Spinner from '../Spinner';

const UsersLoaderWithHooks = () => {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    
    fetch(
      `https://randomuser.me/api/?format=json&inc=name,email,gender,login,picture&page=${currentPage}&results=10&seed=abc`
    )
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .catch(() => setIsError(true))
      .finally(() => setIsFetching(false));
  }, [users]);

  return (
    <div>
      <h1>USER LIST</h1>
      <button onClick={() => setCurrentPage(currentPage - 1)}>prev page</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>next page</button>
      {isFetching && <Spinner />}
      {isError && <div>Shit happens</div>}
      <ul>
        {users.map(user => (
          <li key={user.login.uuid}>{JSON.stringify(user, null, 4)}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersLoaderWithHooks;
