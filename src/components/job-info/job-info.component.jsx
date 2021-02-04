import React from 'react';

import DOMPurify from 'dompurify'

import { ReactComponent as Clock } from '../../assets/clock.svg';
import { ReactComponent as Globe } from '../../assets/globe.svg';
import { howManyDaysAgo } from '../../utils/utils';

import {
  S_JobHeader,
  S_HeaderLabel,
  S_SmallLabel,
  S_CompanyTitle,
  S_RightContainer,
  S_SmallLabelContainer,
  S_CompanyImage,
  S_CompanyContainer,
  S_CompanyInfoContainer,
  S_TextContainer,
} from './job-info.styles';

const JobInfo = ({job: { company, company_logo, title, created_at, location, type, description  }}) => {
  const daysAgoString = howManyDaysAgo(created_at);
  return (
    <S_RightContainer>
      <S_JobHeader>{title} <S_HeaderLabel>{type}</S_HeaderLabel></S_JobHeader>
      <S_SmallLabelContainer>
        <Clock style={{opacity: 0.25}} height='15' width='15' />
        <S_SmallLabel>{daysAgoString}</S_SmallLabel>
      </S_SmallLabelContainer>
      <S_CompanyContainer>
        <S_CompanyImage url={company_logo} />
        <S_CompanyInfoContainer>
          <S_CompanyTitle>{company}</S_CompanyTitle>
          <S_SmallLabelContainer>
            <Globe style={{opacity: 0.25}} height='15' width='15' />
            <S_SmallLabel>{location}</S_SmallLabel>
          </S_SmallLabelContainer>
        </S_CompanyInfoContainer>
      </S_CompanyContainer>
      <S_TextContainer dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}}></S_TextContainer>
    </S_RightContainer>
  );
}

export default JobInfo;