import React from 'react'
import { useStateProviderValue } from '../StateProvider';
import './Body.css';
import Header from './Header';
import YourLibrary from './YourLibrary';
import YourPlaylist from './YourPlaylist';
import SearchResult from './SearchResult';
import notFoundPage from './notFoundPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import DiscoverWeekly from './DiscoverWeekly';

function Body({ spotify }) {
    const [{discover_weekly}, dispatch] = useStateProviderValue();

    return (
        <div className="body">
            <Header spotify={spotify} />

            <Switch>
                <Route exact path="/" component={DiscoverWeekly}/>
                <Route exact path="/your_library" component={YourLibrary}/>
                <Route exact path="/your_playlist/:id" component={YourPlaylist}/>
                <Route exact path="/search/:term" component={SearchResult}/>
                <Route exact path="/search" component={SearchResult}/>
                {/* <Body spotify={spotify} /> */}

                <Route exact path="/404" component={notFoundPage}/>
                <Redirect to="/404"/>
            </Switch>
        </div>
    )
}

export default Body
