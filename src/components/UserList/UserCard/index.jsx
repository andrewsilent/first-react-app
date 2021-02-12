function UserCard(props) {
  const {
    user: { id, firstName, lastName, isSelected },
    userSelect,
  } = props;

  const styles = {
    border: isSelected ? "1px solid #777777" : undefined,
  };

  const selectHandler = () => userSelect(id);

  return (
    <article style={styles}>
      <h1>
        Full Name: {firstName} {lastName}
      </h1>
      <p>ID: {id}</p>
      <button onClick={selectHandler}>Select user</button>
    </article>
  );
}

export default UserCard;
