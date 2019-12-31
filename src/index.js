import React from "react";
import ReactDOM from "react-dom";

import {
  BasicState,
  Counter,
  LessText,
  RandomList,
  LoginForm
} from "./1-State";

import Effect from "./Effect";
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";
import Memo from "./Memo";
import Callback from "./Callback";
import LayoutEffect from "./LayoutEffect";
import ImperativeHandle from "./ImperativeHandle";

import "./styles.css";

function App() {
  const txt =
    "Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it.";

  return (
    <div className="App">
      <BasicState />
      <hr />
      <Counter /> <hr />
      <LessText text={txt} maxLength={35} />
      <hr />
      <RandomList />
      <hr />
      <LoginForm />
      <hr />
      <Effect />
      <hr />
      <Context />
      <hr />
      <Ref />
      <hr />
      <Reducer />
      <hr />
      <Memo />
      <hr />
      <Callback />
      <hr />
      <LayoutEffect />
      <hr />
      <ImperativeHandle />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
