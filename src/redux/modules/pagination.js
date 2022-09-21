export const LIMIT = 4;

const PAGINATION = 'pagination/paginationNumber';

export const paginationAction = (page) => {
  return {
    type: PAGINATION,
    page,
  };
};

const initialState = 1;

export const paginationReducer = (state = initialState, action) => {
  if (action.type === PAGINATION) {
    return action.page;
  }

  return state;
};
