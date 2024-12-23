// import {Button, Switch} from "@mui/material"
{/* <Button variant="outlined">More info</Button>
<Switch {...label} defaultChecked /> */}

import "tachyons";

const User = (props) => {
  const { name, email, username, id } = props.info;
  return (
    <>
      <div className="tc dib br3 ma3 pa3 grow shadow-5 bg-light-greem">
        <img src={`https://robohash.org/${id}?size=150x150`} />
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
        <p>Username: {username}</p>

      </div>
    </>
  );
};
export default User;
