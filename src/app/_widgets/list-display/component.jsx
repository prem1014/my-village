import React, { Component } from 'react';

export default class GridComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.listData.map((item) => {
                        console.log(item)
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td><a>{item.name}</a></td>
                                <td>{item.from}</td>
                                <td>{item.to}</td>
                            </tr>
                        )
                    })}
            </tbody>
            </table>
        )
    }
}