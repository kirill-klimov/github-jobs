import React from 'react';

import { Link } from 'react-router-dom'

import { ReactComponent as ArrowLeft } from '../../assets/right-arrow.svg';

import {
  S_BackButton,
  ArrowStyles,
  S_BackButtonContainer,
} from './return-button.styles';

const ReturnButton = () => {
  return (
    <Link to='/' style={{textDecoration: 'none'}}>
      <S_BackButtonContainer>
        <ArrowLeft style={ArrowStyles} fill='#1E86FF' height='auto' width='15' />
        <S_BackButton>Back to search</S_BackButton>
      </S_BackButtonContainer>
    </Link>
  );
}

export default ReturnButton;