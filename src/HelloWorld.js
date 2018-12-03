import React, { Component } from 'react';
import './HelloWorld.css';

// class example, maintain state with 'this'
class HelloWorld extends Component {

  constructor(props) {
    super(props);  //every component in React expects props to be passed
    this.state = { greeting: 'Hello' };

    //refer to the specific instance when calling frenchify;
    //each copy of this class will only modify itself
    this.frenchify = this.frenchify.bind(this);

    this.removeGreeting = this.removeGreeting.bind(this);
  }

  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }

  frenchify() {
    this.setState({ greeting: 'Bonjour' });
  }

  //any class component in React needs to have a render() function that returns JSX
  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br/>
        <button className="frenchify" onClick={this.frenchify}>Frenchify!</button>
        <br/>
        <button className="remove" onClick={this.removeGreeting}>Remove Me!</button>
      </div>
    );
  }
}

// function example, pass props through function
//import React from 'react';
////function HelloWorld(props) {
//const HelloWorld = props => {
//  return (<div className="HelloWorld">Hello {props.name}!</div>);
//};

export default HelloWorld;
