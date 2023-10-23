import {configureStore} from '@reduxjs/toolkit';
import flightSlcie from './slices/flightSlcie';

export default configureStore({reducer: flightSlcie})