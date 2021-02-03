import styled from 'styled-components';

export const S_Paginator = styled.div`
display: flex;
justify-content: flex-end;
column-gap: 12px;
`;

export const S_PaginatorItem = styled.div`
width: 36px;
height: 36px;
display: flex;
justify-content: center;
align-items: center;
border-width: 1px;
border-color: #B7BCCE;
border-style: ${({NoBorder}) => NoBorder ? 'none' : 'solid'};
border-radius: 4px;
transition: all .1s;
color: #B7BCCE;
font-size: 12px;
cursor: ${({NoBorder}) => NoBorder ? 'default' : 'pointer'};

${({active}) => active ? 'border: 1px solid #1E86FF; background-color: #1E86FF; color: #fff;' : ''}

&:hover {
  border-color: #1E86FF;
  color: ${({active}) => active ? '' : '#1E86FF'};
}

> svg {
  transition: all .1s;
  fill: #B7BCCE;
}

&:hover > svg {
  fill: ${({NoBorder}) => NoBorder ? '' : '#1E86FF'};
}
`;