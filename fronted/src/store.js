import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { servicesReducer, serviceDetailsReducer} from './reducer/services_reducer';
import { authReducer } from './reducer/user_reducer';
import { preinscriptionsReducer } from './reducer/preinscriptions_reducer';

const reducer= combineReducers ({
    services:servicesReducer,
    serviceDetails:serviceDetailsReducer,
    auth: authReducer,
    preinscriptions: preinscriptionsReducer
})

let initialState = {}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;