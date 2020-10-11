/** @jsx jsx */

import React from "react";

import { jsx, css } from "@emotion/core";

const btnstyle = css`
  height: 40px;

  background-color: white;
  display: inline-block;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;

  color: purple;
  border-style: none none solid none;
  border-width: 3px;
  border-color: black;
  &:active {
    border-width: 1px;
    transform: translate(0px, 2px);
  }
`;

export default class SettingBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: {
        colors: true,
        onecolor: "#000000",
        showinvalid: true,
        showbracket: true
      }
    };
    this._onColorClick = this._onColorClick.bind(this);
    this._onColorChange = this._onColorChange.bind(this);
    this._onShowInvalClick = this._onShowInvalClick.bind(this);
    this._onShowBracketClick = this._onShowBracketClick.bind(this);
  }

  _change = obj => {
    if (obj.charAt(0) != "#") {
      this.state.settings[obj] = !this.state.settings[obj];
    } else {
      this.state.settings.onecolor = obj;
    }
    this.props.datafunc(this.state.settings);
  };

  _onColorChange(event) {
    let newValue = event.target.value;
    this._change(newValue);
  }
  _onColorClick() {
    this._change("colors");
  }
  _onShowInvalClick() {
    this._change("showinvalid");
  }
  _onShowBracketClick() {
    this._change("showbracket");
  }

  render() {
    return (
      <div
        css={css`
          height: 420px;
          background-color: purple;
          display: flex;
          padding: 25px;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        `}
      >
        <button
          css={css`
            ${btnstyle}
            width: 400px;
            margin: 20px 0px 5px 0px;
          `}
          onClick={this._onShowInvalClick}
        >
          Show/hide invalid symbols
        </button>
        <button
          css={css`
            ${btnstyle}
            width: 400px;
            margin: 5px 0px;
          `}
          onClick={this._onShowBracketClick}
        >
          Show/hide brackets
        </button>
        <div
          css={css`
            height: 50px;
            margin: 5px 0px;
            display: inline-flex;
            flex-direction: row;
            justify-content: middle;
          `}
        >
          <button
            css={css`
              ${btnstyle}
              width: 200px;
              margin: 0px 20px 0px 0px;
            `}
            onClick={this._onColorClick}
          >
            Toggle Colors
          </button>
          <p
            css={css`
              height: 35px;
              font-size: 20px;
              font-weight: bold;
              color: white;
              padding: 5px 0px;
              margin: 0px 5px;
            `}
          >
            Color:
          </p>
          <input
            type="color"
            onChange={this._onColorChange}
            css={css`
              height: 35px;
              width: 80px;
              margin: 0px 5px;
              padding: 2px;
              border: 0px;
            `}
          ></input>
        </div>
      </div>
    );
  }
}
