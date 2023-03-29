import { configureStore } from '@reduxjs/toolkit';
import { setViewStyle } from './reducer';

const reducer = {
  viewStyle: setViewStyle,
};
export const store = configureStore({ reducer });
