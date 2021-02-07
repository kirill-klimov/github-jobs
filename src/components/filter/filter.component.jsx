import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Globe } from '../../assets/globe.svg';

import { fetchDataStartAsync } from '../../redux/jobs/jobs.actions';

import {
  toggleFullTime,
  setCity,
  selectCity
} from '../../redux/filter/filter.actions';

import {
  S_CheckboxContainer,
  S_Checkbox,
  S_Checkmark,
  S_CheckboxInputContainer,
  S_CheckboxLabel,
  S_FilterHeader,
  S_FilterTextInputContainer,
  S_FilterColumn,
  S_Radio,
  S_RadioLabel,
  S_RadioContainer,
  S_RadioGroup,
  S_Input
} from './filter.styles';

const Filter = ({fullTime, toggleFullTime, city, setCity, selectedCity, selectCity, cityList, fetchData}) => {
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      fetchData(true);
    }
  }
  return (
    <S_FilterColumn>

      <S_CheckboxContainer>
        <S_CheckboxInputContainer>
          <S_Checkbox 
            id='fullTime' 
            type='checkbox'
            onChange={() => toggleFullTime()}
            checked={fullTime}/>
          <S_Checkmark>✓</S_Checkmark>
        </S_CheckboxInputContainer>
        <S_CheckboxLabel for='fullTime'>Full time</S_CheckboxLabel>
      </S_CheckboxContainer>

      <S_FilterHeader>Location</S_FilterHeader>

        <S_FilterTextInputContainer>
          <Globe style={{opacity: 0.25}} height='15' width='15' />
          <S_Input 
            required 
            type='text' 
            id='citySearch' 
            placeholder='City, state, zip code or country' 
            value={city}
            onKeyPress={handleKeyPress}
            onChange={(e) => setCity(e.target.value)}/>
        </S_FilterTextInputContainer>

        <S_RadioGroup>
          {
            cityList.map((city, index) => {
              return (
                <S_RadioContainer key={city}>
                  <S_Radio 
                  type='radio' 
                  name='city' 
                  value={city} 
                  id={city} 
                  onChange={() => selectCity(index)}
                  checked={index === selectedCity}/>
                  <S_RadioLabel for={city}>{city}</S_RadioLabel>
                </S_RadioContainer>
              );
            })
          }
        </S_RadioGroup>

    </S_FilterColumn>
  );
}

const mapStateToProps = state => ({
  fullTime: state.filter.fullTime,
  city: state.filter.city,
  selectedCity: state.filter.selectedCity,
  cityList: state.filter.cityList
})

const mapDispatchToProps = dispatch => ({
  toggleFullTime: () => dispatch(toggleFullTime()),
  setCity: (city) => dispatch(setCity(city)),
  selectCity: (index) => dispatch(selectCity(index)),
  fetchData: (forced) => dispatch(fetchDataStartAsync(forced)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);