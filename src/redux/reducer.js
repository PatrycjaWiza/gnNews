import { createReducer } from '@reduxjs/toolkit';
import { toggleStyle } from './actions';

export const setViewStyle = createReducer(
  JSON.parse(localStorage.getItem('viewStyle')) || '',
  {
    [toggleStyle]: (_state, action) => action.payload,
  }
);
