import React from "react";
import { useHistory } from "react-router-dom";
import "../../scss/index.scss";

export default function Back() {
  const history = useHistory();
  return (
    <div>
      <div className="back" onClick={() => history.goBack()}>
        <h3>&lt;--</h3>
      </div>
    </div>
  );
}
