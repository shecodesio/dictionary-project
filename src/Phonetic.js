import React from "react";
import "./Phonetics.css";
export default function Phonetics(props) {
  let data = props.phonetics;
  if (data.length !== 0) {
    return (
      <div className="Phonetics">
        {data.map(function (dataEach, index) {
          function playAudio() {
            new Audio(dataEach.audio).play();
          }
          return (
            <span key={index}>
              <button onClick={(this, playAudio)}>
                <i className="fa-solid fa-volume-high"></i>
              </button>
              {dataEach.text}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}