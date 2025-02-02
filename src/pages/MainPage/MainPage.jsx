import React from 'react';
import CommentListContainer from '../../containers/CommentListContainer';
import PageListContainer from '../../containers/PageListContainer';
import FormContainer from '../../containers/FormContainer';

const MainPage = () => {
  return (
    <div>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </div>
  );
};

export default MainPage;
