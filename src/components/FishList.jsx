import React from "react";

function FishList({ data, onDelete }) {
  return (
    <div className="container text-center my-5">
      {data.map((fish) => {
        return (
          <div className="row border" key={fish.id}>
            <div className="col">
              Jméno: {fish.name} / Typ: {fish.type}
            </div>
            <div className="col">
              <button
                className="btn-warning btn"
                onClick={() => onDelete(fish.id)}>
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FishList;
