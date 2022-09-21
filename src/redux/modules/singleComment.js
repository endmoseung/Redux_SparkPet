import { getCommentApi } from '../../apis/axios';

const GET_COMMENT_START = 'singleComment/GET_COMMENT_START';
function getCommentStart() {
  return {
    type: GET_COMMENT_START,
  };
}

const GET_COMMENT_SUCCESS = 'singleComment/GET_COMMENT_SUCCESS';
function getCommentSuccess(data) {
  return {
    type: GET_COMMENT_SUCCESS,
    data,
  };
}

const GET_COMMENT_FAIL = 'singleComment/GET_COMMENT_FAIL';
function getCommentFail(error) {
  return {
    type: GET_COMMENT_FAIL,
    error,
  };
}

const RESET_FORM = 'singleComment/RESET_FORM';
export function resetFormAction() {
  return {
    type: RESET_FORM,
  };
}

export function getCommentThunk(commentId) {
  return async (dispatch) => {
    try {
      dispatch(getCommentStart());
      const data = await getCommentApi(commentId);
      dispatch(getCommentSuccess(data));
    } catch (error) {
      dispatch(getCommentFail(error));
    }
  };
}

const initialState = {
  loading: false,
  data: {},
  error: null,
};

export const singleCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.data },
      };
    case GET_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RESET_FORM:
      return initialState;
    default:
      state = initialState;
      return state;
  }
};
