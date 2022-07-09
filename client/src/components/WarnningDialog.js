import React from "react";
import Card from "./Card";

const WarnningDialog = (props) => {
  return (
    <div>
      <Card>
        <div className="bg-red-700 text-white flex p-3">
          <h5 className="flex-3">
            Are you Sure You want to Delete Permanently?
          </h5>
          <button className="flex-1" onClick={props.onYesHandler}>
            Yes
          </button>
          <button className="flex-1" onClick={props.onNoHandler}>
            No
          </button>
        </div>
      </Card>
    </div>
  );
};

export default WarnningDialog;
