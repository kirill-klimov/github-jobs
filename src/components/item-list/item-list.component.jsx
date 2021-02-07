import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDataStartAsync } from '../../redux/jobs/jobs.actions';

import { MotionScreen } from 'react-motion-layout';

import Item from '../item/item.component';
import Pagination from '../pagination/pagination.component';
import Loading from '../loading-screen/loading-screen.component';
import Empty from '../empty-screen/empty-screen.component';

import { Link } from 'react-router-dom';

import {
  S_ItemList
} from './item-list.styles';

const ItemList = ({ fetchData, jobs, isLoaded, isLoading, currentPage }) => {
  useEffect(() => {
    fetchData()
  }, []);

  const perPage = 5;
  const start = currentPage * perPage - perPage;
  const end = start + perPage;
  const items = isLoaded ? jobs.map((item, index) => {
    if (index < start || index >= end) return;
    return (<Link 
      key={item.id}
      to={`/job/${item.id}`}
      style={{textDecoration: 'none'}}>
        <Item {...item} />
    </Link>);
  }) : [];

  return (
    <MotionScreen>
      <S_ItemList>
        {isLoading ? <Loading /> : null}

        {items}

        {isLoaded ? jobs.length !== 0 ? <Pagination totalItems={jobs.length} perPage={perPage} /> : <Empty /> : null}
      </S_ItemList>
    </MotionScreen>
  );
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs,
  isLoading: state.jobs.isLoading,
  isLoaded: state.jobs.isLoaded,
  currentPage: state.pagination.currentPage
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchDataStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);