import React, { createContext } from 'react';

import Header from './components/header/header.component';
import SearchPage from './pages/search/search.page';
import Footer from './components/footer/footer.component';

import {
  S_AppContainer,
  S_PageContainer
} from './App.styles';

function App() {
  return (
      <S_AppContainer>
        <S_PageContainer>
          <Header />
          <SearchPage />
        </S_PageContainer>
        <Footer />
      </S_AppContainer>
  );
}

export default App;
