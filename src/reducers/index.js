import {combineReducers} from 'redux';
import courses from './coursesReducer';
import authors from './authorReducer';
import course from './courseReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  course
});

export default rootReducer;
