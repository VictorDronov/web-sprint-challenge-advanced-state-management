import React from "react";
import { Link, Route } from "react-router-dom";
import SmurfProfile from "./SmurfProfile"

function Smurf(props) {
  const { details } = props;
  return (
    <div>
      <h3>{details.name}</h3>
      <Route path={`/${details.id}`}>
        <SmurfProfile detail={details}/>
      </Route>
      <Link to={`/${details.id}`}>My Proflie</Link>
    </div>
  );
}

export default Smurf;
