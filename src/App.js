import logo from './logo.svg';
import './App.css';
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";
import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';




const App = () => {
    const [activePage, setActivePage] = useState("");
    const [name, setName] = useState("");
    const [compWins, setCompWins] = useState(0);
    const [playerWins, setPlayerWins] = useState(0);
  


    const changeActivePage = (page, ...args) => {
        switch (args.length) {
            case 0:
                setActivePage(page);
                break;
            case 1:
                setActivePage(page);
                setName(args[0]);
                break;
            case 2:
                setActivePage(page);
                setPlayerWins(args[1]);
                setCompWins(args[0]);
                break;
        }
    }

    return (
            <div className={'field'}>
            <Routes>
                <Route path="/game" element={<Game changePage={changeActivePage} name={name}/>} />
                <Route path="/result" element={<Result changePage={changeActivePage}
                                                       compWins={compWins} playerWins={playerWins}/>} />
                <Route path="*" element={<Start changePage={changeActivePage}/>} />

            </Routes>
        </div>
    );
};

export default App;

// const App = () => {
//     const [activePage, setActivePage] = useState("");
//     const [name, setName] = useState("");
//     const [compWins, setCompWins] = useState(0);
//     const [playerWins, setPlayerWins] = useState(0);
//
//     const changeActivePage = (page, ...args) => {
//         switch (args.length) {
//             case 0:
//                 setActivePage(page);
//                 break;
//             case 1:
//                 setActivePage(page);
//                 setName(args[0]);
//                 break;
//             case 2:
//                 setActivePage(page);
//                 setPlayerWins(args[1]);
//                 setCompWins(args[0]);
//                 break;
//         }
//     }
//
//         switch (activePage) {
//             case 'game':
//                 return (
//                     <div className={'field'}>
//                         <Game changePage={changeActivePage} name={name}/>
//                     </div>
//                 );
//             case 'result':
//                 return (
//                     <div className={'field'}>
//                         <Result changePage={changeActivePage}
//                                 compWins={compWins} playerWins={playerWins}/>
//                     </div>
//                 );
//             default:
//                 return (
//                     <div className={'field'}>
//                         <Start changePage={changeActivePage}/>
//                     </div>
//                 )
//         }
//     }
//
//
//
//
// export default App;
//
