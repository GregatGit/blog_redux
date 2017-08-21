import { combineReducers } from 'redux';
import PostRuducer from './reducer_posts'

const rootReducer = combineReducers({
  posts: PostRuducer
});

export default rootReducer;
