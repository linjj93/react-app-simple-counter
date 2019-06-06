import React from "react";
import Button from "./Button";
import Display from "./Display";
import "../styles/Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.count };
  }

  incrementCount() {
    this.setState(state => {
      return {
        count: state.count + 1 // ++state.count?
      };
    });
  }

  changeClass() {
    return this.state.count < 0 ? "negative" : "positive";
  }

  decrementCount() {
    this.setState(state => ({
      count: state.count - 1 // ++state.count?
    }));
  }

  render() {
    return (
      <div className="counter-row">
        <Display className={this.changeClass()} count={this.state.count} />
        {/* <div className={this.changeClass()}>{this.state.count}</div> */}
        <Button
          className="increment-btn"
          onClick={this.incrementCount.bind(this)}
          sign="+"
        />
        <Button
          className="decrement-btn"
          onClick={event => this.decrementCount(event)}
          sign="-"
        />
        {/* <button
          className="increment-btn"
          onClick={this.incrementCount.bind(this)}
        >
          +
        </button>
        <button
          className="decrement-btn"
          onClick={event => this.decrementCount(event)}
        >
          -
        </button> */}
      </div>
    );
  }
}

export default Counter;
