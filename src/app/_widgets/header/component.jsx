import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../home/component.jsx'
export default class HeaderComponent extends React.Component {
    render() {
        return (
            <Router>
                <header className="row">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">फैज़ुल्लाहपुर</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/About'}>About</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </Router>
        )
    }
}