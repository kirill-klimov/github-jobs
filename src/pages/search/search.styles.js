import styled from 'styled-components';

export const S_ContentContainer = styled.div`
  display: flex;
  column-gap: 30px;
  row-gap: 30px;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

export const S_ContentColumn = styled.div`
  flex-grow: 5;
`;