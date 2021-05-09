import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from '../../components/pages/SignIn';
import SignUp from '../../components/pages/SignUp';
import About from '../../components/pages/About';
import Dashboard from '../../components/pages/Dashboard';
import HomeScreen from '../../components/pages/HomeScreen';

const Routes = () => {
    return (
        <Router>
            <Switch>
                 <Route exact path="/">
                    <HomeScreen/>
                </Route>

                <Route exact path="/signin">
                    <SignIn/>
                </Route>

                <Route exact path="/signup">
                    <SignUp />
                </Route>
                
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;