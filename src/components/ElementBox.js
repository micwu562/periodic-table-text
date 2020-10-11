/** @jsx jsx */

import React from "react";

import { jsx, css } from "@emotion/core";

//import "../styles.css"; ??

export default class ElementBox extends React.Component {
  render() {
    const { element, settings } = this.props;
    const colors = {
      alkali: "#cc6600",
      alkaline: "#cc9900",
      lanthanide: "#996666",
      actinide: "#663366",
      transition: "#333366",
      post: "#006666",
      metalloid: "#003300",
      diatomic: "#006633",
      polyatomic: "#006633",
      noble: "#333300",
      invalid: "#999999",
      unknown: "#333333"
    };

    return (
      <div
        css={css`
          height: 80px;
          width: 80px;
          display: flex;
          flex-direction: column;
          margin: 3px;
          border-radius: 5px;
          background: ${settings.colors
            ? colors[element.type.split(" ", 1)]
            : settings.onecolor};
        `}
      >
        <div
          css={css`
            font-size: 15%;
            font-weight: bold;
            color: white;
            text-align: left;
            margin: 5px;
          `}
        >
          {element.number}
        </div>
        <div
          css={css`
            font-size: 42px;
            font-weight: bold;
            color: white;
            text-align: center;
            margin: -10px;
          `}
        >
          {element.type === "invalid" && settings.showbracket
            ? "[" + element.symbol + "]"
            : element.symbol}
        </div>
        <div
          css={css`
            font-size: 55%;
            color: white;
            text-align: center;
            margin: 10%;
          `}
        >
          {element.name}
        </div>
      </div>
    );
  }
}
