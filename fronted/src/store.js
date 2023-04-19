import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { servicesReducer, serviceDetailsReducer, newServiceReducer, serviceReducer, newProductReducer, getProductsReducer, productDetailsReducer} from './reducer/services_reducer';
import { UsersReducer, authReducer,forgotPasswordReducer, userDetailsReducer, userReducer } from './reducer/user_reducer';
import { preinscriptionsReducer } from './reducer/preinscriptions_reducer';

const reducer= combineReducers ({
    services:servicesReducer,
    serviceDetails:serviceDetailsReducer,
    auth: authReducer,
    user: userReducer,
    users: UsersReducer,
    forgotPassword: forgotPasswordReducer,
    preinscriptions: preinscriptionsReducer,
    newService: newServiceReducer,
    newProduct: newProductReducer,
    service: serviceReducer,
    getProducts: getProductsReducer,
    productDetails: productDetailsReducer,
    userDetails: userDetailsReducer
})

let initialState = {}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;