import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App   from '../components/App';
import Categories   from '../components/CategoryView';
import Results   from '../components/ResultView';

import { Provider } from 'react-redux';
import  store, { history } from '../store';


const routes = (
<Provider store={store}>	
	  <Router history={ history }>
		<Route path='/' component={App} />  
			<Route path='categories' component={Categories} />
			<Route path='results' component={Results} />
		<Route/>
	  </Router>
  </Provider>
)

export default routes;
