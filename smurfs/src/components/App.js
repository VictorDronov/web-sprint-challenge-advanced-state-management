import React, {  useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions/index";
import SmurfList from "./SmurfList";

const App = (props) => {
  const { fetchSmurfs, loadingSmurfs, errorMessage } = props;

  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  return (
    <div className="App">
      <h1>SMURF VILLAGE MEMBERS!</h1>
      <div>
        <SmurfList />
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage,
  };
}
export default connect(mapStateToProps, { fetchSmurfs })(App);
