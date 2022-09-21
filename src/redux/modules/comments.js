import {
  deleteCommentApi,
  getAllCommentsApi,
  postCommentApi,
  putCommentApi,
} from '../../apis/axios';

const GET_ALLCOMMENTS_START = 'comments/GET_ALLCOMMENTS_START';
function getAllStart() {
  return {
    type: GET_ALLCOMMENTS_START,
  };
}

const GET_ALLCOMMENTS_SUCCESS = 'comments/GET_ALLCOMMENTS_SUCCESS';
function getAllSuccess(data) {
  return {
    type: GET_ALLCOMMENTS_SUCCESS,
    data,
  };
}

const GET_ALLCOMMENTS_FAIL = 'comments/GET_ALLCOMMENTS_FAIL';
function getAllFail(error) {
  return {
    type: GET_ALLCOMMENTS_FAIL,
    error,
  };
}

const DELETE_COMMENT_START = 'comments/DELETE_COMMENT_START';
function deleteCommentStart() {
  return {
    type: DELETE_COMMENT_START,
  };
}

const DELETE_COMMENT_SUCCESS = 'comments/DELETE_COMMENT_SUCCESS';
function deleteCommentSuccess(commentId) {
  return {
    type: DELETE_COMMENT_SUCCESS,
    commentId,
  };
}

const DELETE_COMMENT_FAIL = 'comments/DELETE_COMMENT_FAIL';
function deleteCommentFail(error) {
  return {
    type: DELETE_COMMENT_FAIL,
    error,
  };
}

const POST_COMMENT_START = 'comments/POST_COMMENT_START';
function postCommentStart() {
  return {
    type: POST_COMMENT_START,
  };
}

const POST_COMMENT_SUCCESS = 'comments/POST_COMMENT_SUCCESS';
function postCommentSuccess(data) {
  return {
    type: POST_COMMENT_SUCCESS,
    data,
  };
}

const POST_COMMENT_FAIL = 'comments/POST_COMMENT_FAIL';
function postCommentFail(error) {
  return {
    type: POST_COMMENT_FAIL,
    error,
  };
}

const PUT_COMMENT_START = 'comments/PUT_COMMENT_START';
function putCommentStart() {
  return {
    type: PUT_COMMENT_START,
  };
}

const PUT_COMMENT_SUCCESS = 'comments/PUT_COMMENT_SUCCESS';
function putCommentSuccess(data, commentId) {
  return {
    type: PUT_COMMENT_SUCCESS,
    data,
    commentId,
  };
}

const PUT_COMMENT_FAIL = 'comments/PUT_COMMENT_FAIL';
function putCommentFail(error) {
  return {
    type: PUT_COMMENT_FAIL,
    error,
  };
}

export function getAllThunk() {
  return async (dispatch) => {
    try {
      dispatch(getAllStart());
      const data = await getAllCommentsApi();
      dispatch(getAllSuccess(data));
    } catch (error) {
      dispatch(getAllFail(error));
    }
  };
}

export function deleteCommentThunk(commentId) {
  return async (dispatch) => {
    try {
      dispatch(deleteCommentStart());
      await deleteCommentApi(commentId);
      dispatch(deleteCommentSuccess(commentId));
    } catch (error) {
      dispatch(deleteCommentFail(error));
    }
  };
}

export function postCommentThunk({ profile_url, author, content, createdAt }) {
  return async (dispatch) => {
    try {
      dispatch(postCommentStart());
      const data = await postCommentApi({
        profile_url,
        author,
        content,
        createdAt,
      });
      dispatch(postCommentSuccess(data));
    } catch (error) {
      dispatch(postCommentFail(error));
    }
  };
}

export function putCommentThunk(
  commentId,
  { profile_url, author, content, createdAt }
) {
  return async (dispatch) => {
    try {
      dispatch(putCommentStart());
      const data = await putCommentApi(commentId, {
        profile_url,
        author,
        content,
        createdAt,
      });
      dispatch(putCommentSuccess(data, commentId));
    } catch (error) {
      dispatch(putCommentFail(error));
    }
  };
}

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLCOMMENTS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALLCOMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...action.data],
      };
    case GET_ALLCOMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    // default:
    case DELETE_COMMENT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_COMMENT_SUCCESS: {
      const actionData = state.data.filter(
        (comment) => comment.id !== action.commentId
      );
      return {
        ...state,
        loading: false,
        data: [...actionData],
      };
    }
    case DELETE_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case POST_COMMENT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [action.data, ...state.data],
      };
    case POST_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case PUT_COMMENT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PUT_COMMENT_SUCCESS: {
      const actionData = state.data.map((comment) => {
        if (comment.id === action.commentId) return action.data;
        return comment;
      });
      return {
        ...state,
        loading: false,
        data: [...actionData],
      };
    }
    case PUT_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
