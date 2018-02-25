import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createCourse} from '../actions/course';

class Courses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            course: {
                title: ''
            }
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.save = this.save.bind(this);
    }
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    save() {
        this.props.dispatch(createCourse(this.state.course))
    }

    render() {
        debugger
        let ele = (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map((course, index) => {
                    return <div key={index}>{course.title}</div>
                })}
                <h2>Add Courses</h2>

                <input type="text" value={this.state.course.title}
                    onChange={this.onTitleChange} />
                <input type="submit" value="Save" onClick={this.save} />

            </div>

        );
        return ele;
    }
}

function mapStateToProps(state, ownProps) {
    debugger
    return {
        courses: state.courses
    }
}
export default connect(mapStateToProps)(Courses);