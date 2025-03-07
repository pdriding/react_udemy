import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function btnClick() {
    setIsEditing((editing) => !editing); // setIsEditing(!isEditing);
  }

  function setName(event) {
    setPlayerName(event.target.value);
  }

  return (
    <>
      <li>
        <span className="player">
          {!isEditing && <span className="player-name">{playerName}</span>}
          {isEditing && (
            <input
              onChange={setName}
              type="text"
              required
              value={playerName}
            ></input>
          )}
          <span className="playerSymbol">{symbol}</span>
        </span>
        <button onClick={btnClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
