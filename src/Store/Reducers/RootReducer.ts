import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './Auth.Reducers';
import checkoutReducer from './Checkout.Reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  checkout: checkoutReducer
});

export default rootReducer;
