import styled from 'styled-components';

export const S_SearchContainer = styled.div`
  background-image: url(${({src}) => src});
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
`;

export const S_InputContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 790px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 4px 4px 4px 18px;
`;

export const S_SearchButton = styled.button`
  border: none;
  outline: none;
  background-color: #1E86FF;
  color: #fff;
  padding: 14px 48px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 3px rgba(30,134,255, 0.5);
  }
`;

export const S_Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 15px 0;
  cursor: text;
`;