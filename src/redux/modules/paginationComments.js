import { getPaginationCommentsApi } from '../../apis/axios';

const GET_PAGINATIONCOMMENTS_START = 'comments/GET_PAGINATION_START';
function getPaginationStart() {
  return {
    type: GET_PAGINATIONCOMMENTS_START,
  };
}

const GET_PAGINATIONCOMMENTS_SUCCESS = 'comments/GET_PAGINATION_SUCCESS';
function getPaginationSuccess(data) {
  return {
    type: GET_PAGINATIONCOMMENTS_SUCCESS,
    data,
  };
}

const GET_PAGINATIONCOMMENTS_FAIL = 'comments/GET_PAGINATION_FAIL';
function getPaginationFail(error) {
  return {
    type: GET_PAGINATIONCOMMENTS_FAIL,
    error,
  };
}

export function getPaginationThunk(page) {
  return async (dispatch) => {
    try {
      dispatch(getPaginationStart());
      const data = await getPaginationCommentsApi(page);
      dispatch(getPaginationSuccess(data));
    } catch (error) {
      dispatch(getPaginationFail(error));
    }
  };
}

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const paginationCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGINATIONCOMMENTS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PAGINATIONCOMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...action.data],
      };
    case GET_PAGINATIONCOMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
