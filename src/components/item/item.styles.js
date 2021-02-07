import styled from 'styled-components';
import { SharedElement } from 'react-motion-layout';

export const S_Item = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
border-radius: 4px;
display: flex;
column-gap: 16px;
padding: 12px;
`;

export const S_ItemImage = styled.div`
height: 90px;
width: 90px;
background-image: ${({src}) => `url('${src}')`};
background-size: cover;
background-position: center;
border-radius: 4px;
`;

export const S_ItemDescriptionContainer = styled.div`
display: flex;
flex-direction: column;
row-gap: 12px;
flex-grow: 1;
`;

export const S_DetailsContainer = styled.div`
display: flex;
justify-content: space-between;
`;

export const S_SubDetailsContainer = styled.div`
display: flex;
column-gap: 25px;
flex-grow: 1;
justify-content: flex-end;
`;

export const S_CompanyText = styled.span`
  font-family: 'Roboto', sans-serif;
font-size: 12px;
font-weight: 700;
color: #334680;
`;

export const S_TitleText = styled.span`
font-family: 'Roboto', sans-serif;
font-size: 18px;
color: #334680;
`;

export const S_EmploymentText = styled.span`
font-family: 'Roboto', sans-serif;
font-size: 12px;
font-weight: 700;
color: #334680;
border: 1px solid #334680;
border-radius: 4px;
padding: 6px 8px;
`;

export const S_SubDetail = styled.div`
display: flex;
align-items: center;
column-gap: 6px;
`;

export const S_SubDetailText = styled.span`
font-family: 'Roboto', sans-serif;
font-size: 12px;
font-weight: 500;
color: #B9BDCF;
`;