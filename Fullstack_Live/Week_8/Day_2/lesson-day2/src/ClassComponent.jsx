import React, { Component } from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      text: "",
    };
  }

  fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  };
  /** useEffect(..., []) */
  componentDidMount = () => {};
  /** useEffect(..., [textInput, props.id]) */
  componentDidUpdate = (prevProps, prevState) => {};
  /** useEffect(return () => ..., []) */
  componentWillUnmount = () => {};

  render() {
    return (
      <>
        <h2>ClassComponent</h2>
        <button onClick={() => this.fetchUsers()}>get users</button>
        <div>
          {this.state.users.map((item) => {
            return <div key={item.id}>{item.email}</div>;
          })}
        </div>
      </>
    );
  }
}
export default ClassComponent;
