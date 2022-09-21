import axios from 'axios';
import { LIMIT } from '../redux/modules/pagination';

const ORDER = '_order=desc';
const SORT = '_sort=id';

const apiRoot = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

const getAllCommentsApi = async () => {
  const { data } = await apiRoot.get(`?${ORDER}&${SORT}`);
  return data;
};

const getPaginationCommentsApi = async (page) => {
  console.log(page);
  const { data } = await apiRoot.get(
    `?_page=${page}&_limit=${LIMIT}&${ORDER}&${SORT}`
  );
  return data;
};
const getCommentApi = async (commentId) => {
  const { data } = await apiRoot.get(`/${commentId}`);
  return data;
};

const postCommentApi = async ({ profile_url, author, content, createdAt }) => {
  const { data } = await apiRoot.post('', {
    profile_url,
    author,
    content,
    createdAt,
  });

  return data;
};

const putCommentApi = async (
  commentId,
  { profile_url, author, content, createdAt }
) => {
  const { data } = await apiRoot.put(`/${commentId}`, {
    profile_url,
    author,
    content,
    createdAt,
  });

  return data;
};

const deleteCommentApi = async (commentId) => {
  const { data } = await apiRoot.delete(`/${commentId}`);
  return data;
};

export {
  getAllCommentsApi,
  getCommentApi,
  postCommentApi,
  putCommentApi,
  deleteCommentApi,
  getPaginationCommentsApi,
};
