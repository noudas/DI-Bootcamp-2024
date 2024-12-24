import React, { Component } from "react";

class Colour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: "Candy apple red",
            show: true,
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("after update");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate");
        return null;
    }

    changeColor = () => {
        this.setState((prevState) => ({
            favoriteColor: prevState.favoriteColor === "Candy apple red" ? "Piss yellow" : "Candy apple red",
        }));
    };

    toggleChild = () => {
        this.setState((prevState) => ({ show: !prevState.show }));
    };

    render() {
        return (
            <div>
                <h1>My Favorite color is: {this.state.favoriteColor}</h1>
                <button onClick={this.changeColor}>Change Color</button>

                <button onClick={this.toggleChild}>
                    {this.state.show ? "Delete Child" : "Show Child"}
                </button>

                {this.state.show && <Child />}
            </div>
        );
    }
}

class Child extends Component {
    componentWillUnmount() {
        alert("Component Unmounted");
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

export default Colour;
