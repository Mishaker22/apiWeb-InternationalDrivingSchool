import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { servicesReducer, serviceDetailsReducer, newServiceReducer, serviceReducer, newProductReducer, getProductsReducer, productDetailsReducer} from './reducer/services_reducer';
import { UsersReducer, authReducer,forgotPasswordReducer, userDetailsReducer, userReducer } from './reducer/user_reducer';
import { myOrdersReducer, newPreinscriptionReducer, preinscriptionDetailsReducer, preinscriptionReducer, preinscriptionsReducer } from './reducer/preinscriptions_reducer';

const reducer= combineReducers ({
    //SERVICIOS
    services:servicesReducer,
    serviceDetails:serviceDetailsReducer,
    newService: newServiceReducer,
    newProduct: newProductReducer,
    service: serviceReducer,
    getProducts: getProductsReducer,
    productDetails: productDetailsReducer,
    //USERS
    auth: authReducer,
    user: userReducer,
    users: UsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    //PREINSCRIPTIONS
    preinscriptions: preinscriptionsReducer,
    preinscriptionsDetails: preinscriptionDetailsReducer,
    newPreinscription: newPreinscriptionReducer,
    preinscription: preinscriptionReducer,
    myOrders: myOrdersReducer
    
})

let initialState = {}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;