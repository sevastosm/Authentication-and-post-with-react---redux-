import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// latter use import store, { history } from './store/configureStore';
import store from './store/configureStore';

import Landing from './containers/Landing';
import LogIn from './containers/LogIn';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/login" component={LogIn} />
        {/* <Route path="/signout" component={Signout} />
          <Route path="/signup" component={Signup} /> */}
        {/* <PrivateRoute path="/feature" component={Feature} /> */}
      </div>
    </Router>

  </Provider>,
  document.getElementById('root') as HTMLElement
);