import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";
//Show the partOfSpeech, definition and example
export default function Meaning(props) {
  let data = props.meaning;
  return (
    <div className="Meaning">
      <section>
        <div className="partOfSpeech">{data.partOfSpeech}</div>
        <div className="definition">
          {data.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <ul>
                  <li>
                    <div>
                      <small>{index + 1}.</small> {definition.definition}
                    </div>
                    <div className="example">
                      <Example example={definition.example} />
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <Synonyms synonyms={data.synonyms} />
      </section>
    </div>
  );
}