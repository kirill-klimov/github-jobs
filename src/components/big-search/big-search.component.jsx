import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Briefcase } from '../../assets/briefcase.svg';

import { setSearchValue } from '../../redux/filter/filter.actions';
import { fetchDataStartAsync } from '../../redux/jobs/jobs.actions';

import {
  S_SearchContainer,
  S_InputContainer,
  S_Input,
  S_SearchButton
} from './big-search.styles';

const BigSearch = ({ searchValue, setSearchValue, fetchData, isLoading }) => {
  return (
    <S_SearchContainer src='https://i.ibb.co/CBdbXqz/solen-feyissa.jpg'>
      <S_InputContainer>
        <Briefcase style={{opacity: 0.25}} height='15' width='15' />
        <S_Input 
        required 
        type='text' 
        id='search' 
        placeholder='Title, company, expertise or benefits' 
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}/>
        <S_SearchButton
        onClick={() => fetchData(true)}
        disabled={isLoading}>Search</S_SearchButton>
      </S_InputContainer>
    </S_SearchContainer>
  )
}

const mapStateToProps = state => ({
  searchValue: state.filter.searchValue,
  isLoading: state.jobs.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchData: (requested) => dispatch(fetchDataStartAsync(requested)),
  setSearchValue: (value) => dispatch(setSearchValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(BigSearch);