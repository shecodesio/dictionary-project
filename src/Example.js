import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example !== undefined) {
    return (
      <div className="Example">
        Ex: <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
