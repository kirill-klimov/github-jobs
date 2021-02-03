import React from 'react';

import BigSearch from '../../components/big-search/big-search.component';
import Filter from '../../components/filter/filter.component';
import ItemList from '../../components/item-list/item-list.component';
import Paginator from '../../components/paginator/paginator.component';

import {
  S_ContentContainer,
  S_ContentColumn
} from './search.styles';



const SearchPage = () => {
  return (
    <>
      <BigSearch />
      <S_ContentContainer>
        <Filter />
        <S_ContentColumn>
          <ItemList />
          <Paginator />
        </S_ContentColumn>
      </S_ContentContainer>
    </>
  );
}

export default SearchPage;