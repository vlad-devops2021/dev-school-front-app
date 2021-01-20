import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { syncTranslationWithStore} from 'react-redux-i18n';

import restClient from '../middleware/restClient'
import singleEdit from '../middleware/singleEdit';
import tableReducer from '../reducers/tableReducer';
import singleReducer from '../reducers/singleReducer';

const store = createStore(combineReducers({tableReducer: tableReducer, singleReducer: singleReducer}), {},
    applyMiddleware(thunk, singleEdit, restClient));

syncTranslationWithStore(store);
export default store;