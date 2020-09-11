import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions/index";
import SmurfList from "./SmurfList";
import DotLoader from "react-spinners/DotLoader";
import SmurfForm from "./SmurfForm";
import { Switch, Route } from "react-router-dom";


const App = (props) => {
  const { fetchSmurfs, loadingSmurfs, errorMessage } = props;

  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);
console.log(props.smurfs)
  return (
    <div className="App">
      <h1>SMURF VILLAGE MEMBERS!</h1>
      <div>
        {!loadingSmurfs ? (
          <Switch>
            <Route path="/MakeANew">
              <SmurfForm />
            </Route>
            <Route path="/">
              <SmurfList />
            </Route>
          </Switch>
        ) : (
          <div className="loading">
            <DotLoader className="loader" />
            &nbsp; Looking For Smurfs
          </div>
        )}

        {errorMessage !== "" ? <div>{errorMessage}</div> : null}
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage,
    smurfs: state.smurfs
  };
}
export default connect(mapStateToProps, { fetchSmurfs })(App);
