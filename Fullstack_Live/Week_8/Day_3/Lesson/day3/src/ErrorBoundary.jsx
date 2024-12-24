import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, errorInfo) => {
    console.log(error, errorInfo);
    // this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) return <h2>On - {this.props.fallback}</h2>;
    return this.props.children;
  }
}
export default ErrorBoundary;
