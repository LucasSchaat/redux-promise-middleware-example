import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import promiseReducer from './reducers/promiseReducer'
import noPromiseReducer from './reducers/noPromiseReducer'

const rootReducer = combineReducers({
    noPromiseReducer,
    promiseReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))