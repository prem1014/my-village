import React from 'react';
import HeaderComponent from './app/_widgets/header/component.jsx';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../src/app/home/component.jsx';
import About from '../src/app/about/component.jsx';
import Login from '../src/app/authenication/login.component.jsx';
import SignUp from '../src/app/authenication/sign-up.component.jsx';
import Courses from '../src/app/courses/componet.jsx'

export default class AppRooot extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <HeaderComponent />
                    <div className="row">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/login" component={Login} />
                        <Route path="/signUp" component={SignUp} />
                        <Route path="/courses" component={Courses}/>
                    </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}