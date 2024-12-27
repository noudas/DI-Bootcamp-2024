import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, info) {
        console.error("Error caught by ErrorBoundary:", error, info);
        this.setState({ hasError: true });
      }

    render(){
        if(this.state.hasError){
            return(
                <>
                    <h1>And error has occured</h1>
                </>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;