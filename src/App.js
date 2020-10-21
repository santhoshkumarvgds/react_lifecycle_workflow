import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      data: 0
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }
  getInitialState() {
    console.log("getInitialState") //it is not work in ES6 class ,work in ES5 React,createClass
  }

  static getDerivedStateFromProps(props, state) {
    console.log("static getDerivedStateFromProps");
  }
  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}
class Content extends React.Component {
  componentWillMount() {
    console.log("Component WILL MOUNT!");
  }
  componentDidMount() {
    console.log("Component DID MOUNT!");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
export default App;
