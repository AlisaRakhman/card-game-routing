import React, {useState} from 'react';
import {Link} from "react-router-dom";


const Start = (props) => {
    const[name, setName] = useState('Player')

    return (
        <div className={'playerForm'}>
            <h1 className={'readyForWar'}>Ready for war?</h1>
            <input className={'playerName'} type="text" placeholder={"Enter your name"}
                   onChange={(e) => {
                       setName(e.target.value);
                   }}
            />
            <Link to="/game">
            <button className={'startButton'} onClick={() =>
                props.changePage('game',name)}>Start</button>
            </Link>
        </div>
    );
};

export default Start;
