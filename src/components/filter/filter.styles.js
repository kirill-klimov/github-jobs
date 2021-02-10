import styled from 'styled-components';

export const S_Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 15px 0;
  cursor: text;
`;

export const S_CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 30px;
`;

export const S_Checkbox = styled.input`
  height: 18px;
  width: 18px;
  cursor: pointer;
  margin: 0;
  appearance: none;
  border: 1px solid #B9BDCF;
  border-radius: 2px;
  outline: none;
  z-index: 1;

  &:checked {
    border-color: #1E86FF;
  }

  &:checked + div {
    opacity: 1;
  }
`;

export const S_Checkmark = styled.div`
  position: absolute;
  opacity: 0;
  z-index: 0;
  background-color: #1E86FF;
  height: 18px;
  width: 18px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  transition: .1s;
`;

export const S_CheckboxInputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const S_CheckboxLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

export const S_FilterHeader = styled.span`
  text-transform: uppercase;
  color: #B9BDCF;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 14px;
`;

export const S_FilterTextInputContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  padding-left: 18px;
  padding-right: 4px;
  margin-bottom: 25px;
`;

export const S_FilterColumn = styled.div`
  flex-grow: 1;

  @media screen and (max-width: 1000px) {
    min-width: 100%;
  }
`;

export const S_Radio = styled.input`
  height: 18px;
  width: 18px;
  appearance: none;
  border: 1px solid #B9BDCF;
  border-radius: 50%;
  outline: none;
  margin: 0;
  transition: .1s;

  &:checked {
    border-color: #1E86FF;
    border-width: 4px;
  }
`;

export const S_RadioLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

export const S_RadioContainer = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  position: relative;
`;

export const S_RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
`;