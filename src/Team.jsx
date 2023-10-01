import { useState } from "react";

export default function Team() {
    const [team, setTeam] = useState(11);

    const playerAddHandler = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const playerRemoveHandler = () => {
        setTeam(team - 1);
    }

    const teamStyle = {
        marginBottom: '15px',
        padding: '20px',
        borderRadius: '5px',
        border: '1px solid crimson'
    }
    return (
        <div style={teamStyle}>
            <h2>players: {team}</h2>
            <button onClick={playerAddHandler}>player adds</button>
            <button onClick={playerRemoveHandler}>player remove</button>
        </div>
    )
}