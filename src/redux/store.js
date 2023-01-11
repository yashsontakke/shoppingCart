import { configureStore } from '@reduxjs/toolkit'
import shopReducer from "./shopReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

const store = configureStore({reducer:shopReducer}, composeWithDevTools());



export default store ;