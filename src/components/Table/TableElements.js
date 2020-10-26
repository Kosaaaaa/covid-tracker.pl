import styled from 'styled-components';

export const TableWrapper = styled.div`
  margin-top: 10px;
  overflow: scroll;
  color: #6a5d5d;
  background-color: white;
  height: ${({ isexpand }) => (isexpand ? '300px' : '100px')};
  overflow-x: hidden;
  transition: all 0.5s ease-in-out;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;

  &:nth-of-type(odd) {
    background-color: #f3f2f8;
  }
`;

export const TableCell = styled.span`
  padding: 0.5rem;
  border: none;
`;

