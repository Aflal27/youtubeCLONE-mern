import {combineReducers,configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    userState : userReducer
})

const store = configureStore({
    reducer,
    middleware:[thunk]
})

export default store