const User = (props) => {
  const { name, email, username, id } = props.info;
  return (
    <>
      <div>
        <img src={`https://robohash.org/${id}?size=150x150`} />
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
        <p>Username: {username}</p>
      </div>
    </>
  );
};
export default User;
