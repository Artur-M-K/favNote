import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import DetailsPage from './DetailsPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
          <Route path={routes.note} component={DetailsPage} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.article} component={DetailsPage} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.twitter} component={DetailsPage} />
          <Route exact path={routes.twitters} component={Twitters} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
