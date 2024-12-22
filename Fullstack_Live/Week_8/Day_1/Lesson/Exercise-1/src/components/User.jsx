const User = (props) =>{
    console.log(props);

    const { id, name, mail, username } = props.info;
    return <> 
        <div>
            <img src={`https://robohash.org/${id}?size=150x150`}/>
            <h1>Name: {name}</h1>
            <h3>Email: {mail}</h3>
            <h3>User: {username}</h3>
        </div>
    </>
}

export default User;