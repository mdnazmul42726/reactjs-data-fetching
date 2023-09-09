import { useState } from "react"

export default function Player() {
    const [player, setPlayer] = useState(0);

    const adPlayerHandleClick = () => {
        if (player >= 11) {
            alert('do not allaow more then 11 player at this time!!')
        } else {
            setPlayer(player + 1);
        }
    };
    const removePlayerHandleClick = () => {
        if (player > 0) {
            setPlayer(player - 1);
        } else {
            alert('soory!! no player avalavle for remove');
        }
    }

    return (
        <div className="">
            <h3>Player: {player} </h3>
            <button onClick={adPlayerHandleClick}>Ad Player</button>
            <button onClick={removePlayerHandleClick}>Remove Player</button>
        </div>
    )
}