import React from 'react'
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import { Route } from 'react-router-dom';
import YourLibrary from './YourLibrary';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar/>
                <Route exact path="/" component={Body}/>
                <Route exact path="/your_library" component={YourLibrary}/>
                <Route exact path="/your_playlist/:id" component={YourLibrary}/>
                {/* <Body spotify={spotify} /> */}
            </div>

            <Footer/>
        </div>
    )
}

export default Player
