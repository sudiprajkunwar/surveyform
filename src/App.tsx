import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import SurveyForm from "./components/organism/form";
import Heading from "./components/organism/heading";
import styled from "@emotion/styled";
import Weather from "./components/organism/weather";

const Block = styled.div`
  margin: 30px 0;
  box-shadow: 0 0 25px #eeeeee;
`;
function App() {
  return (
    <div className="App">
      <Block>
        <Weather />
        <Heading />
        <SurveyForm />
      </Block>
    </div>
  );
}

export default App;
