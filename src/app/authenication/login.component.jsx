import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let ele = (
            <div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <h2>Login to get access</h2>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">User Id:</label>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">Password:</label>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <input type="password" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12"></label>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <button type="submit" value="Login" className="btn btn-info">Login</button>
                        <Link to={"signUp"}>New User? Sign Up Here</Link>
                        </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12"></div>
            </div>
        )

        return ele;
    }
}