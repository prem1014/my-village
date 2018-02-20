import React from 'react';
import HeaderComponent from './app/_widgets/header/component.jsx';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../src/app/home/component.jsx';
import About from '../src/app/about/component.jsx';

export default class AppRooot extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <HeaderComponent />
                    <div className='row'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                    </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}