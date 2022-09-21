import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteCommentThunk, getAllThunk } from '../redux/modules/comments';
import { paginationAction } from '../redux/modules/pagination';
import { getPaginationThunk } from '../redux/modules/paginationComments';
import { getCommentThunk } from '../redux/modules/singleComment';
function CommentList() {
  const dispatch = useDispatch();
  const paginationComments = useSelector(
    (state) => state.paginationComments.data
  );
  const comments = useSelector((state) => state.comments.data);
  const currentPage = useSelector((state) => state.pagination);

  useEffect(() => {
    dispatch(getAllThunk());
    dispatch(getPaginationThunk(1));
  }, []);

  useEffect(() => {
    dispatch(getPaginationThunk(currentPage));
  }, [comments]);

  const modifySingleComments = (id) => {
    dispatch(getCommentThunk(id));
  };

  const deleteSingleComments = (id) => {
    dispatch(deleteCommentThunk(id));
    dispatch(paginationAction(1));
  };

  return paginationComments.map((comment, key) => (
    <Comment key={key}>
      <img src={comment.profile_url} alt="" />

      {comment.author}

      <CreatedAt>{comment.createdAt}</CreatedAt>

      <Content>{comment.content}</Content>

      <Button>
        <a onClick={() => modifySingleComments(comment.id)}>수정</a>
        <a onClick={() => deleteSingleComments(comment.id)}>삭제</a>
      </Button>

      <hr />
    </Comment>
  ));
}

export default CommentList;

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
