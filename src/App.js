/** @jsx jsx */

import React from "react";
//import logo from "./logo.svg";
import "./App.css";

import { jsx, css } from "@emotion/core";
//import styled from "@emotion/styled";

import ElementsDisplay from "./components/ElementsDisplay";
import SettingBox from "./components/SettingBox";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputtext: "",
      settings: {
        colors: true,
        onecolor: "#000000",
        showinvalid: true,
        showbracket: true
      }
    };

    this._onTextChange = this._onTextChange.bind(this);
  }

  _onTextChange(event) {
    let newValue = event.target.value;
    this.setState({ inputtext: newValue }); //this.setState({ colormapping: { noble: newValue } });
  }

  _updateStuff = data => {
    this.setState({ settings: data });
  };

  render() {
    return (
      <div className="App">
        <div
          css={css`
            height: 200px;
            background-color: purple;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 25px;
          `}
        >
          <div
            css={css`
              height: 50px;
              margin: 15px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
            `}
          >
            <p
              css={css`
                color: white;
                display: in-line;
                font-weight: bold;
                font-size: 220%;
                margin: 0px 20px 0px 0px;
                text-align: right;
                vertical-align: middle;
                height: 40px;
                text-shadow: 0px 2px 0 black;
              `}
            >
              Text:
            </p>

            <input
              css={css`
                min-width: 45%;
                margin: 0px;
                height: 50px;
                font-size: 180%;
                text-align: center;
                font-weight: bold;
                display: inline;
                border-style: none none solid none;
                border-width: 3px;
                border-color: black;
              `}
              type="text"
              maxLength="100"
              onChange={this._onTextChange}
            />
          </div>
        </div>
        <div>
          <ElementsDisplay
            text={this.state.inputtext}
            settings={this.state.settings}
          />
        </div>

        <SettingBox datafunc={this._updateStuff}></SettingBox>
      </div>
    );
  }
}

export default App;
