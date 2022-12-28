import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { servicesReducer, serviceDetailsReducer} from './reducer/services_reducer';

const reducer= combineReducers ({
    services:servicesReducer,
    serviceDetails:serviceDetailsReducer
})

let initialState = {}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;