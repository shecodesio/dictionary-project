import React, { useState } from "react";
import axios from "axios";
import Response from "./Response";
import Photo from "./Photo";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [response, setResponse] = useState(null);
  const [photoData, setPhotoData] = useState(null);

  function handleResponse(response) {
    setResponse(response.data[0]);
  }

  function handlePhoto(response) {
    setPhotoData(response.data);
  }

  function search() {
    setLoaded(true);
    // let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    // axios(apiUrl).then(handleResponse);
    // let headers = {
    //   Authorization: "563492ad6f9170000100000149c79aaf995340dea07860e707ab624d",
    // };
  //   let photoApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
  //   axios(photoApiUrl, { headers }).then(handlePhoto);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(response) {
    setKeyword(response.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="container">
          <section>
            <h3>What word do you want to look up?</h3>
            <form onSubmit={handleSubmit}>
              <div className="d-flex justify-content-left">
                <div className="col-6 me-3">
                  <input
                    type="search"
                    placeholder="Type a word"
                    onChange={handleKeyword}
                    className="form-control"
                    defaultValue={props.defaultKeyword}
                  ></input>
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
            <small>Ex: eat, house, bicycle, etc.</small>
          </section>
          <Response response={response} />
          <Photo photoData={photoData} />
        </div>
      </div>
    );
  } else {
    search();
  }
// }