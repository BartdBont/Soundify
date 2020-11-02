import React from 'react'
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';
import YourLibrary from './YourLibrary';
import YourPlaylist from './YourPlaylist';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar/>
                <Switch>
                <Route exact path="/" component={Body}/>
                <Route exact path="/your_library" component={YourLibrary}/>
                <Route exact path="/your_playlist/:id" component={YourPlaylist}/>
                {/* <Body spotify={spotify} /> */}
                </Switch>
            </div>

            <Footer/>
        </div>
    )
}

export default Player
