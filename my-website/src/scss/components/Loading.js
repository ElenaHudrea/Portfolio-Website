import React from "react";
import "./_Loading.scss";

import loading from "../../image/sections-img/loading.png";

const Loading = () => {
  return (
    <div className="loading-component">
      <div className="img-loading">
        <img src={loading} alt="Dog say Hi!"></img>
      </div>
      <h1>Loading...</h1>
      <p>It will take few seconds</p>
    </div>
  );
};

export default Loading;
