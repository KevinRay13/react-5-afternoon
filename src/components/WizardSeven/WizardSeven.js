import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { credit } from "../../ducks/reducer";

class WizardSeven extends Component {
  render() {
    const { credit } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>Estimate your credit score</p> <br />
          <div className="row">
            <Link to="/wEight">
              <button onClick={() => credit("Excellent")}>Excellent</button>
            </Link>
            <Link to="/wEight">
              <button onClick={() => credit("Good")}>Good</button>
            </Link>
            <Link to="/wEight">
              <button onClick={() => credit("Fair")}>Fair</button>
            </Link>
            <Link to="/wEight">
              <button onClick={() => credit("Poor")}>Poor</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { credit } = state;

  return {
    credit
  };
}

export default connect(
  mapStateToProps,
  { credit }
)(WizardSeven);
