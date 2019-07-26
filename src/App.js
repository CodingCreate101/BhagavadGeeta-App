import React from 'react';
import ChapterList from './components/ChapterList';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Settings from './components/Settings';
import SettingsContextProvider from './data/chapters/SettingsContext';


function App() {
    return (
        <SettingsContextProvider>
            <Router>
                <Route component={Header} />
                <Switch>
                    <Route exact path="/" component={ChapterList}/>
                    <Route path="/settings" component={Settings}/>
                </Switch>
            </Router>
        </SettingsContextProvider>

    );
}

export default App;
