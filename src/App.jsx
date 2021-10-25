import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Films from './pages/Films';
import FilmDetails from './pages/FilmDetails';
import People from './pages/People';
import PersonDetails from './pages/PersonDetails';
import Locations from './pages/Locations';
import LocationDetails from './pages/LocationDetails';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/films">
                        <Films />
                    </Route>
                    <Route exact path="/films/:filmid">
                        <FilmDetails />
                    </Route>
                    <Route exact path="/people">
                        <People />
                    </Route>
                    <Route exact path="/people/:personid">
                        <PersonDetails />
                    </Route>
                    <Route exact path="/locations">
                        <Locations />
                    </Route>
                    <Route exact path="/locations/:locationid">
                        <LocationDetails />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
};

export default App;