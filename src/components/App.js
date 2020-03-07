import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

const App = props => {
  return (
    <main>
      <h1 className="text-center">Counter Application using Redux and React</h1>
      <section className="d-flex">
        <div className="counter-box">
          <h2>Count: {props.count}</h2>
          <div>
            <button onClick={() => props.increment()} className="button">
              Increment
            </button>
            <button onClick={() => props.decrement()} className="button">
              Decrement
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = state => {
  const count = state.increment + state.decrement;
  return { count };
};

export default connect(
  mapStateToProps,
  {
    increment: increment,
    decrement: decrement
  }
)(App);
