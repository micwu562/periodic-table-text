/** @jsx jsx */

import React from "react";

import { jsx, css } from "@emotion/core";

//import { styles } from "ansi-colors";

import ElementBox from "./ElementBox";

import periodicTable from "../assets/periodicTable";

//import "../styles.css";
//import { createCoverageSummary } from "istanbul-lib-coverage";

function find(target) {
  for (let elem in periodicTable.elements) {
    if (
      periodicTable.elements[elem].symbol.toLowerCase() === target.toLowerCase()
    ) {
      let elm = periodicTable.elements[elem];
      return {
        symbol: elm.symbol,
        name: elm.name,
        number: elm.number,
        type: elm.category
      };
    }
  }
  return null;
}

function convertToElements(text) {
  let stacque = [{ i: 0, visited: false, value: [] }];

  while (stacque.length > 0) {
    let last = stacque[stacque.length - 1];
    if (last.i >= text.length) {
      return last.value;
    }
    if (last.visited) {
      stacque.pop();
    } else {
      stacque[stacque.length - 1].visited = true;
      //console.log("1: ", text.substring(last.i, last.i + 1));
      let a = find(text.substring(last.i, last.i + 1));
      if (a != null) {
        stacque.push({
          i: last.i + 1,
          visited: false,
          value: last.value.concat(a)
        });
      }
      if (last.i < text.length - 1) {
        //console.log("2: ", text.substring(last.i, last.i + 2));
        let b = find(text.substring(last.i, last.i + 2));
        if (b != null) {
          stacque.push({
            i: last.i + 2,
            visited: false,
            value: last.value.concat(b)
          });
        }
      }
    }
  }
  stacque = [{ i: 0, visited: false, value: [] }]; //im really fucking sorry

  while (stacque.length > 0) {
    let last = stacque[stacque.length - 1];
    if (last.i >= text.length) {
      return last.value;
    }
    if (last.visited) {
      stacque.pop();
    } else {
      stacque[stacque.length - 1].visited = true;
      //console.log("1: ", text.substring(last.i, last.i + 1));
      let a = find(text.substring(last.i, last.i + 1));
      if (a != null) {
        stacque.push({
          i: last.i + 1,
          visited: false,
          value: last.value.concat(a)
        });
      } else {
        stacque.push({
          i: last.i + 1,
          visited: false,
          value: last.value.concat({
            symbol: text.substring(last.i, last.i + 1).toUpperCase(),
            name: "⠀",
            number: "⠀",
            type: "invalid"
          })
        });
      }
      if (last.i < text.length - 1) {
        //console.log("2: ", text.substring(last.i, last.i + 2));
        let b = find(text.substring(last.i, last.i + 2));
        if (b != null) {
          stacque.push({
            i: last.i + 2,
            visited: false,
            value: last.value.concat(b)
          });
        }
      }
    }
  }
  return [
    {
      symbol: "(" + text + ")",
      name: " ",
      number: " ",
      valid: false
    }
  ];
}

export default class ElementsDisplay extends React.Component {
  render() {
    const { text, settings } = this.props;
    //console.log(colors);
    //console.log(this.props);

    const words = text
      .split(" ")
      .filter(function(el) {
        return el !== "";
      })
      .map(str => convertToElements(str));

    return (
      <div
        css={css`
          min-height: 100px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin: 10px;
        `}
      >
        {text !== "" ? (
          words.map(elements => (
            <div
              css={css`
                display: inline-flex;
                flex-direction: row;
                flex-wrap: wrap;
                margin: 5px 20px;
              `}
            >
              {elements.map(element =>
                element.type !== "invalid" || settings.showinvalid ? (
                  <ElementBox element={element} settings={settings} />
                ) : null
              )}
            </div>
          ))
        ) : (
          <div
            css={css`
              font-size: 30px;
              font-weight: bold;
              font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
              color: #999999;
            `}
          >
            (type something above and it'll show up here!)
          </div>
        )}
      </div>
    );
  }
}
