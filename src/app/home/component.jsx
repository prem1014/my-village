import React, { Component } from 'react'
import GridComponent from '../_widgets/list-display/component.jsx';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.listMukhiya = [
            {
                id: '1',
                name: 'Late Nandu Ray',
                from: '1978',
                to: '2001'
            },
            {
                id: '2',
                name: 'Vijay Kumar Sharma',
                from: '2002',
                to: '2006'
            },
            {
                id: '3',
                name: 'Vijay Kumar Sharma',
                from: '2006',
                to: '2011'
            },
            {
                id: '4',
                name: 'Vijay Kumar Sharma',
                from: '2011',
                to: '2016'
            },
            {
                id: '4',
                name: 'Kunti Devi',
                from: '2016',
                to: 'till now'
            }
        ]
        this.listBdc = [
            {
                id: '1',
                name: 'Late Nandu Ray',
                from: '2001',
                to: '2006'
            },
            {
                id: '2',
                name: 'ABC',
                from: '2006',
                to: '2011'
            },
            {
                id: '3',
                name: 'ABC',
                from: '2011',
                to: '2016'
            },
            {
                id: '4',
                name: 'Umashankar Yadav',
                from: '2016',
                to: 'till now'
            }
        ]
    }
    render() {
        return (
            <div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <h3>List Of Mukhiya</h3>
                    <GridComponent listData={this.listMukhiya} />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <h3>List Of B.D.C</h3>
                    <GridComponent listData={this.listBdc} />
                </div>
            </div>
        )
    }
}