import { useState } from "react";
export default function Player({InitialName,symbol}) {
const [playerName,setPlayerName] = useState(InitialName)
const [isEditing, setIsEditing] = useState(false);
function handleClick() {
    setIsEditing(editing => !isEditing)
}
function handleChange(event) {
  setPlayerName(event.target.value)
}



    return(
        <li>
            <span className="player">
              {(!isEditing) && <span className="player-name">{playerName}</span>}
              {(isEditing) && <input value={playerName} required onChange={handleChange}></input>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'save' : 'Edit'}</button>
          </li>
    )
}