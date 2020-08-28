import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import SurveyForm from "./components/organism/form";
import Heading from "./components/organism/heading";
function App() {
  return (
    <div className="App">
      <Heading />
      <SurveyForm />
    </div>
  );
}

export default App;
