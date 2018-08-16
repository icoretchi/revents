import { createReducer } from '../../app/common/util/reducerUtil';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from './testConstants';

const initialState = {
  data: 42,
};

export const incrementCounter = (state, paylod) => {
  return { ...state, data: ++state.data };
};

export const decrementCounter = (state, paylod) => {
  return { ...state, data: --state.data };
};

// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: ++state.data };
//     case DECREMENT_COUNTER:
//       return { ...state, data: --state.data };
//     default:
//       return state;
//   }
// };

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter,
});
