import React from "react";

const SmurfProfile = (props) => {
  const { detail } = props;
  return (
    <div>
      <h4> Bean Boozle</h4>
      <div>
        <p>Age: {detail.age}</p>
        <p>Height: {detail.height}</p>
      </div>
    </div>
  );
};

export default SmurfProfile;
