import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDataStartAsync } from '../../redux/jobs/jobs.actions';

import Item from '../item/item.component';

import { Link } from 'react-router-dom';

import {
  S_ItemList
} from './item-list.styles';

const ItemList = ({ fetchData, jobs, isLoaded, isLoading }) => {
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <S_ItemList>
      {isLoading ? <h1 style={{fontFamily: 'Roboto'}}>Loading...</h1> : null}
      {isLoaded ? jobs.map(item => 
      <Link 
        key={item.id}
        to={`/job/${item.id}`}
        style={{textDecoration: 'none'}}>
          <Item {...item} />
      </Link>) : null}
    </S_ItemList>
  );
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs,
  isLoading: state.jobs.isLoading,
  isLoaded: state.jobs.isLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchDataStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);