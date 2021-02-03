import React from 'react';

import { ReactComponent as ChevronLeft } from '../../assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/chevron-right.svg';
import { ReactComponent as Kebab } from '../../assets/ellipsis.svg';

import {
  S_Paginator,
  S_PaginatorItem
} from './paginator.styles';

const Paginator = () => {
  return (
    <S_Paginator>
      <S_PaginatorItem><ChevronLeft height='27' width='19' /></S_PaginatorItem>
      <S_PaginatorItem>1</S_PaginatorItem>
      <S_PaginatorItem active>2</S_PaginatorItem>
      <S_PaginatorItem>3</S_PaginatorItem>
      <S_PaginatorItem NoBorder><Kebab height='12' width='37' /></S_PaginatorItem>
      <S_PaginatorItem>10</S_PaginatorItem>
      <S_PaginatorItem><ChevronRight height='27' width='19' /></S_PaginatorItem>
    </S_Paginator>
  );
}

export default Paginator;