import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { LIMIT, paginationAction } from '../redux/modules/pagination';
import { getPaginationThunk } from '../redux/modules/paginationComments';

function PageList() {
  const pageArray = [];
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.data);

  const handlePagination = (i) => {
    console.log(i);
    dispatch(paginationAction(i));
    dispatch(getPaginationThunk(i));
  };
  const pagination = useSelector((state) => state.pagination);

  for (let i = 1; i <= Math.ceil(comments.length / LIMIT); i++) {
    pageArray.push(
      <Page
        active={i === pagination}
        key={i}
        onClick={() => handlePagination(i)}
      >
        {i}
      </Page>
    );
  }

  return <PageListStyle>{pageArray}</PageListStyle>;
}

export default PageList;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;
