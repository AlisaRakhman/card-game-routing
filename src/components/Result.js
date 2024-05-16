import React from 'react';
import {Link} from "react-router-dom";

const Result = (props) => {
    const getResult = () => {
        if(props.compWins > props.playerWins)
            return "You LOOSE!"
        if(props.compWins < props.playerWins)
            return "You WIN!"
        return "DRAW"
    }
    return (
        <div className={'playerForm'}>
            <h1 className={'readyForWar'}>{getResult()}</h1>
            <h2 className={'readyForWar small'}>{props.compWins} : {props.playerWins}</h2>
            <Link to={"/start"}>
            <button className={'startButton'} onClick={() =>
            props.changePage('game')}>Again?</button>
            </Link>
        </div>
    );
};

export default Result;