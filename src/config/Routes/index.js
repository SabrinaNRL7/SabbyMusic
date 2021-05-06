import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from '../../components/pages/SignIn';
import SignUp from '../../components/pages/SignUp';
import About from '../../components/pages/About';
import Dashboard from '../../components/pages/Dashboard';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>

                <Route exact path="/signin">
                    <SignIn title="Welcome To Sabby Music"/>
                </Route>

                <Route exact path="/signup">
                    <SignUp />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;