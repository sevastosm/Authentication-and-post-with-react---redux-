import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Master from './components/Master/Master';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Master />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);