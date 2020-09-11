import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
function SmurfList(props) {
  return (
    <div>
      {props.smurfs.map((details) => {
        return <Smurf key={details.id} details={details} />;
      })}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
  };
}
export default connect(mapStateToProps, {})(SmurfList);
