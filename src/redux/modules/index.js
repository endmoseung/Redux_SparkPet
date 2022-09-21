import { combineReducers } from 'redux';
import { commentsReducer } from './comments';
import { paginationReducer } from './pagination';
import { paginationCommentsReducer } from './paginationComments';
import { singleCommentReducer } from './singleComment';

const rootReducer = combineReducers({
  comments: commentsReducer,
  singleComment: singleCommentReducer,
  pagination: paginationReducer,
  paginationComments: paginationCommentsReducer,
});

export default rootReducer;
