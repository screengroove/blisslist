import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import videos from './videos';
import categories from './categories';

const rootReducer = combineReducers({ videos,categories,  routing: routerReducer });

export default rootReducer;