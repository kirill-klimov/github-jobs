import React, { useEffect } from 'react';

import DOMPurify from 'dompurify';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import JobInfo from '../../components/job-info/job-info.component';
import ReturnButton from '../../components/return-button/return-button.component';

import {
  S_SideHeader,
  S_TextContainer,
  S_SideHeaderContainer,
  S_JobPageContainer,
  S_LeftContainer,
} from './job.styles';

const JobPage = ({ jobs }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  },[]);
  const { jobId } = useParams();
  const job = jobs.find(e => e.id === jobId);
  const { how_to_apply } = job;
  return (
    <S_JobPageContainer>
      {/* left dungeon */}
      <S_LeftContainer>
        <ReturnButton />
        <S_SideHeaderContainer>
          <S_SideHeader>How to apply</S_SideHeader>
        </S_SideHeaderContainer>
        <S_TextContainer dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(how_to_apply)}}></S_TextContainer>
      </S_LeftContainer>   
      {/* right dungeon */} 
      <JobInfo job={job} /> 
    </S_JobPageContainer>   
  );
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs
})

export default connect(mapStateToProps)(JobPage);