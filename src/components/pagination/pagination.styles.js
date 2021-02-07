import styled from 'styled-components';

export const S_Paginator = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 12px;
`;

export const S_Fragment = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${ ({ theme }) => {
    switch (theme) {
      case 'active':
        return '1px solid #1e86ff';
      default:
        return '1px solid #B7BCCE';
    }
  } };
  border-radius: 50%;
  transition: all .1s;
  color: ${ ({ theme }) => {
    switch (theme) {
      case 'active':
        return '#fff';
      default:
        return '#B7BCCE';
    }
  } };
  background-color: ${ ({ theme }) => {
    switch (theme) {
      case 'active':
        return '#1e86ff';
      default:
        return 'transparent';
    }
  } };
  font-size: 12px;
  user-select: none;
  cursor: ${ ({ theme }) => {
    switch (theme) {
      case 'disabled':
      case 'active':
        return 'default';
      default: 
        return 'pointer';
    }
  } };

  > svg {
    fill: #B7BCCE;
  }

  &:hover {
    border: ${ ({ theme }) => {
      switch (theme) {
        case 'disabled':
          return '1px solid #B7BCCE';
        default:
          return '1px solid #1e86ff';
      }
    } };
    color: ${ ({ theme }) => {
      switch (theme) {
        case 'active':
          return '#fff';
        default:
          return '#1e86ff';
      }
    } };
  }

  &:hover svg {
    fill: ${ ({ theme }) => {
      switch (theme) {
        case 'disabled':
          return '#B7BCCE';
        default:
          return '#1e86ff';
      }
    } };
  }
`;