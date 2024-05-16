import React, {Component, useEffect, useState} from 'react';
import {cards} from "../utils/constants";
import {Link} from "react-router-dom";

// let compCards = [];
// let playerCards = [];
let compWins = 0;
let playerWins = 0;
const Game = (props) => {
    const[playerCard, setPlayerCard] = useState({
        src: require('../images/blueback-1024x1024.jpg')
    })
    const[compCard, setCompCard] = useState({
        src: require('../images/blueback-1024x1024.jpg')
    })

    const[deck, setDeck] = useState([...cards])



    useEffect(() => {
    //    let deck = [...cards];
        for(let i = 0; i < 10; i++)
            deck.sort(() => Math.random() - 0.5);

        // compCards = deck.slice(0, deck.length/2);
        // playerCards = deck.slice(deck.length/2, deck.length);
    },[])

    const handleClickNext = () => {
        if(deck.length){
            let currCompCard = deck.pop();
            let currPlayerCard =deck.shift();

            if(currCompCard.value > currPlayerCard.value)
                compWins++;
            else if(currCompCard.value < currPlayerCard.value)
                playerWins++;

            setCompCard(currCompCard);
            setPlayerCard(currPlayerCard)
        }
        else{
            props.changePage('result', compWins, playerWins)
            compWins = 0;
            playerWins = 0;
        }
    }
    return (
        <div>
            <h1 className={'players computer'}>Computer</h1>
            <div className={'playerDeck'}>
                <img src={compCard.src} alt=""/>
            </div>
            <h1 className={'players you'}>{props.name}</h1>
            <div className={'playerDeck'}>
                <img src={playerCard.src} alt=""/>
            </div>
            {deck.length ? (
                <button className={'ingameButton'} onClick={() => handleClickNext()}>
                    Next
                </button>
            ) : (
                <Link to="/result">
                    <button className={'ingameButton'} onClick={() => handleClickNext()}>
                        Next
                    </button>
                </Link>
            )}
        </div>
    );
};

export default Game;
