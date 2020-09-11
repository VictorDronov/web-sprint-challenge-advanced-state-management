import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

const initialFormData = {
  name: "",
  age: 4,
  height: "",
};

const SmurfForm = (props) => {
  const [formData, setFormData] = useState(initialFormData);

  console.log(props.smurfs);

  const postNewSmurf = (newsmurf) => {
    axios
      .post("http://localhost:3333/smurfs", newsmurf)
      .then((res) => {
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setFormData(initialFormData);
      });
  };

  const submit = (e) => {
    const newSmurfMakaer = {
      name: formData.name.trim(),
      age: formData.age.trim(),
      height: formData.height.trim(),
    };
    postNewSmurf(newSmurfMakaer);
  };

  const onInput = (value, data) => {
    setFormData({
      ...formData,
      [value]: data,
    });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    onInput(name, value);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label>
          Smurfs Name:
          <input
            type="text"
            name="name"
            value={props.smurfs.name}
            onChange={onInputChange}
          />
        </label>
        <label>
          Smurfs Age:
          <input
            type="text"
            name="age"
            value={props.smurfs.age}
            onChange={onInputChange}
          />
        </label>
        <label>
          Smurfs Height:
          <input
            type="text"
            name="height"
            value={props.smurfs.height}
            onChange={onInputChange}
          />
        </label>
        <button>Add Smurf To Village</button>
      </form>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
  };
}
export default connect(mapStateToProps, {})(SmurfForm);
