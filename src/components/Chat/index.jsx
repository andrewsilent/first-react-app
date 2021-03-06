import React, { useEffect, useReducer } from 'react';

const data = {
  users: [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Jason' },
    { id: 3, name: 'Omaewa' },
  ],
  messages: [
    { id: 1, body: 'hello', authorId: 1 },
    { id: 2, body: 'hi yourself', authorId: 2 },
    { id: 3, body: 'whatsup', authorId: 2 },
    { id: 4, body: 'yoyoyo amazing wow', authorId: 1 },
    { id: 5, body: 'dfdffgsdfg', authorId: 3 },
    { id: 6, body: 'oooohyeah))', authorId: 2 },
    { id: 7, body: 'nice', authorId: 1 },
  ],
};

const reducer = (state, action) => {
  const {
    type,
    data: { users, messages },
  } = action;

  switch (type) {
    case 'DATA_RESPONSE_SUCCESS': {
      const usersMap = new Map();
      users.forEach(user => usersMap.set(user.id, user));
      const messagesWithAuthors = messages.map(msg => ({
        ...msg,
        author: usersMap.get(msg.authorId),
      }));

      return {
        ...state,
        users,
        messages: messagesWithAuthors,
      };
    }

    case 'DATA_RESPONSE_ERROR':
      return;

    default:
      return state;
  }
};

const Chat = props => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
  });

  useEffect(() => {
    dispatch({ type: 'DATA_RESPONSE_SUCCESS', data });
    return () => {};
  }, []);

  return (
    <div>
      {state.messages.map(message => (
        <li key={message.id}>
          <span>{message.author.name}: </span>
          <span>{message.body}</span>
        </li>
      ))}
    </div>
  );
};

export default Chat;
