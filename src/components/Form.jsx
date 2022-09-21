import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { postCommentThunk, putCommentThunk } from '../redux/modules/comments';
import { paginationAction } from '../redux/modules/pagination';

function Form() {
  const [profileUrlState, setProfileUrlState] = useState();
  const [authorState, setAuthorState] = useState();
  const [contentState, setContentState] = useState();
  const [createdAtState, setCreatedAtState] = useState();
  const profileRef = useRef();
  const singleCommentDatas = useSelector((state) => state.singleComment.data);
  const dispatch = useDispatch();

  console.log(singleCommentDatas);

  useEffect(() => {
    setProfileUrlState(singleCommentDatas.profile_url);
    setAuthorState(singleCommentDatas.author);
    setContentState(singleCommentDatas.content);
    setCreatedAtState(singleCommentDatas.createdAt);
    profileRef.current.focus();
  }, [singleCommentDatas]);

  const singleCommentSubmit = (e) => {
    e.preventDefault();
    const ET = e.target;
    const singleComment = {
      profile_url: ET[0].value,
      author: ET[1].value,
      content: ET[2].value,
      createdAt: ET[3].value,
    };

    if (singleCommentDatas.a) {
      dispatch(putCommentThunk(singleCommentDatas.id, singleComment));
    } else {
      dispatch(postCommentThunk(singleComment));
      dispatch(paginationAction(1));
    }
    ET.reset();
  };

  const handleProfileUrl = (e) => {
    setProfileUrlState(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthorState(e.target.value);
  };

  const handleContent = (e) => {
    setContentState(e.target.value);
  };

  const handleCreatedAt = (e) => {
    setCreatedAtState(e.target.value);
  };

  return (
    <FormStyle onSubmit={(e) => singleCommentSubmit(e)}>
      <form>
        <input
          ref={profileRef}
          onChange={handleProfileUrl}
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          value={profileUrlState}
        />
        <br />
        <input
          onChange={handleAuthor}
          value={authorState}
          type="text"
          name="author"
          placeholder="작성자"
        />
        <br />
        <input
          className="contentInput"
          onChange={handleContent}
          value={contentState}
          name="content"
          placeholder="내용"
          required
        ></input>
        <br />
        <input
          onChange={handleCreatedAt}
          value={createdAtState}
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  .contentInput {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
    margin-bottom: 10px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
