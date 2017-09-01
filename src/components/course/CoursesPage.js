//This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage(this);
  }

  componentDidMount() {
    this.props.loadCourses().then(() => {});
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    console.log('PROPS', this.props);
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { loadCourses }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
