import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import SmurfForm from "./SmurfForm";


function SmurfList(props) {
  return (
    <div>
      {props.smurfs.map((details) => {
        return <Smurf key={details.id} details={details} />;
      })}
      <SmurfForm path="newSmurf" />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
  };
}
export default connect(mapStateToProps, {})(SmurfList);
