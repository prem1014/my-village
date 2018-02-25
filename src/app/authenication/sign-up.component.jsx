import React, { Component } from 'react';

export default class SignUp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let ele = (
            <div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <h2>Sign Up Here</h2>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">Name:</label>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">Email Id:</label>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <input type="email" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">Mobile:</label>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <input type="number" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">Ward No:</label>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <select className="form-control"></select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">Password:</label>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <input type="password" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">Confirm Password:</label>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <input type="password" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12"></label>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <button type="submit" value="Sign Up" className="btn btn-info">Sign Up</button>
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