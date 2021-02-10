import React from 'react';

import Header from './components/header/header.component';
import SearchPage from './pages/search/search.page';
import JobPage from './pages/job/job.page';
import Footer from './components/footer/footer.component';

import { Switch, Route } from 'react-router-dom';

import {
  S_AppContainer,
  S_PageContainer
} from './App.styles';

function App() {
  return (
      <S_AppContainer>
        <S_PageContainer>
          <Header />
            <Switch>
              <Route exact path='/'>
                <SearchPage />
              </Route>
              <Route path='/job/:jobId'>
                <JobPage />
              </Route>
            </Switch>
        </S_PageContainer>
        <Footer />
      </S_AppContainer>
  );
}

export default App;
