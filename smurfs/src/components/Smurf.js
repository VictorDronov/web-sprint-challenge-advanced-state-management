import React from "react";

function Smurf(props) {
  const { details } = props;
  return (
    <div>
      <h3>{details.name}</h3>
      <div>
        <p>{details.age}</p>
        <p>{details.height}</p>
      </div>
    </div>
  );
}

export default Smurf;
