import styled from 'styled-components';

export const S_TextContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #334680;

  a {
    color: #1E86FF;
  }
`;

export const S_SmallLabel = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #B7BCCE;
`;

export const S_CompanyTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #334680;
`;

export const S_RightContainer = styled.div`
  flex-grow: 4;
`;

export const S_SmallLabelContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;


export const S_CompanyContainer = styled.div`
  display: flex;
  column-gap: 12px;
  margin: 30px 0;
`;

export const S_CompanyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const S_CompanyImage = styled.div`
  height: 50px;
  width: 50px;
  background-image: ${({url}) => `url("${url}")`};
  background-position: center;
  background-size: cover;
  border-radius: 4px;
`;


export const S_JobHeader = styled.h1`
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
color: #334680;
margin-top: 0;
margin-bottom: 10px;

display: flex;
align-items: center;
column-gap: 17px;
`;

export const S_HeaderLabel = styled.span`
border: 1px solid #334680;
border-radius: 4px;
display: inline-block;
padding: 6px 8px;

font-weight: bold;
font-size: 12px;
line-height: 14px;
`;