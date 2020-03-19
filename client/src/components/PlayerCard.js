import React from "react";

function PlayerCard(props) {
  return (
    <div className="playerCard">
      <h2>{props.data.name}</h2>
      <h3>{props.data.country}</h3>
    </div>
  );
}

export default PlayerCard;
