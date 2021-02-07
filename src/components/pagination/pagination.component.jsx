import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ChevronLeft } from '../../assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/chevron-right.svg';
import { ReactComponent as Kebab } from '../../assets/ellipsis.svg';

import { setCurrentPage } from '../../redux/pagination/pagination.actions';

import {
  S_Paginator,
  S_Fragment
} from './pagination.styles';

const Pagination = ({ totalItems, perPage, currentPage, setCurrentPage }) => {
  const fragments = [];
  const totalPages = Math.ceil(totalItems / perPage);

  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNext= () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleFragment = (page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
  }

  fragments.push(
    <S_Fragment 
    onClick={handlePrev}
    theme={currentPage === 1 ? 'disabled' : null}>
      <ChevronLeft height='27' width='19' />
    </S_Fragment>);

  for (let i = 1; i <= totalPages; i++) {
    fragments.push(
      <S_Fragment onClick={() => handleFragment(i)} theme={currentPage === i ? 'active' : null}>{i}</S_Fragment>
    );
  }
  
  fragments.push(
  <S_Fragment 
  onClick={handleNext}
  theme={currentPage === totalPages ? 'disabled' : null}>
    <ChevronRight height='27' width='19' />
  </S_Fragment>);
  return (
    <S_Paginator>
      {/* <S_Fragment NoBorder><Kebab height='12' width='37' /></S_Fragment> */}

      {fragments}
    </S_Paginator>
  );
}

const mapStateToProps = state => ({
  currentPage: state.pagination.currentPage
})

const mapDispatchToProps = dispatch => ({
  setCurrentPage: (page) => dispatch(setCurrentPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);