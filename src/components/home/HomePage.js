import React from 'react';
import { Link } from 'react-router';
import { loadCourses } from '../../actions/courseActions';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { loadCourses }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
