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
                                <a className="navbar-brand">
                                <Link to={"/"}>फैज़ुल्लाहपुर</Link>
                                </a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/about"}>About</Link></li>
                                <li><Link to={"/courses"}>Courses</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to={"/signUp"}><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                <li><Link to={"/login"}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </Router>
        )
    }
}