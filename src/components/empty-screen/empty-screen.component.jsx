import React from 'react';
import styled from 'styled-components';

const S_Empty = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

const S_Text = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #B9BDCF;
`;

const Empty = () => {
  return (
    <S_Empty>
      <S_Text>Nothing was found :(</S_Text>
    </S_Empty>
  );
}

export default Empty;