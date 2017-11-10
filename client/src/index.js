import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Store from './app/store';
import Surveys from './containers/Surveys';
import AddSurvey from './containers/AddSurvey';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/normalize.css';
import './styles/main.css';

ReactDOM.render(
  <Provider store={Store.configure()}>
    <Router>
        <Switch>
          <Route exact path="/addSurvey" component={AddSurvey} />
          <Route path="/" component={Surveys} />
        </Switch>
      </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
