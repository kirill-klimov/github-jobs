import React from 'react';

import { ReactComponent as Globe } from '../../assets/globe.svg';
import { ReactComponent as Clock } from '../../assets/clock.svg';

import {
  S_Item,
  S_ItemImage,
  S_ItemDescriptionContainer,
  S_DetailsContainer,
  S_SubDetailsContainer,
  S_CompanyText,
  S_TitleText,
  S_EmploymentText,
  S_SubDetail,
  S_SubDetailText
} from './item.styles';

const Item = ({ company, company_logo, type, title, location, created_at }) => {
  const diff = new Date() - new Date(created_at);
  const daysAgo = Math.floor(diff / 1000 / 60 / 60 / 24);
  let daysAgoString = '';
  if (daysAgo === 0) daysAgoString = 'Today';
  if (daysAgo === 1) daysAgoString = '1 day ago';
  if (daysAgo > 1) daysAgoString = daysAgo + ' days ago';

  return (
    <S_Item>
      <S_ItemImage src={company_logo} />
      <S_ItemDescriptionContainer>
        <S_CompanyText>{company}</S_CompanyText>
        <S_TitleText>{title}</S_TitleText>
        <S_DetailsContainer>
          <S_EmploymentText>{type}</S_EmploymentText>
          <S_SubDetailsContainer>
            <S_SubDetail>
              <Globe style={{opacity: 0.25}} height='15' width='15' />
              <S_SubDetailText>{location}</S_SubDetailText>
            </S_SubDetail>
            <S_SubDetail>
              <Clock style={{opacity: 0.25}} height='15' width='15' />
              <S_SubDetailText>{daysAgoString}</S_SubDetailText>
            </S_SubDetail>
          </S_SubDetailsContainer>
        </S_DetailsContainer>
      </S_ItemDescriptionContainer>
    </S_Item>
  );
}

export default Item;