import React from 'react'
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import { Redirect, Route, Switch } from 'react-router-dom';
import YourLibrary from './YourLibrary';
import YourPlaylist from './YourPlaylist';
import SearchResult from './SearchResult';
import notFoundPage from './notFoundPage';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar/>
                <Switch>
                <Route exact path="/" component={Body}/>
                <Route exact path="/your_library" component={YourLibrary}/>
                <Route exact path="/your_playlist/:id" component={YourPlaylist}/>
                <Route exact path="/search/:term" component={SearchResult}/>
                <Route exact path="/search" component={SearchResult}/>
                {/* <Body spotify={spotify} /> */}

                <Route exact path="/404" component={notFoundPage}/>
                <Redirect to="/404"/>
                </Switch>
            </div>

            <Footer/>
        </div>
    )
}

export default Player
