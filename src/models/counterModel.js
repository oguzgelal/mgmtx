import {
  incrementCounter,
  decrementCounter
} from '../services/counterService';

export default {
  namespace: 'counter',
  state: {
    current: 0,
    increasing: false,
    decreasing: false
  },

  //subscriptions: {
  //  setup({ dispatch, history }) {},
  //},

  actions: {
    incrementCounter: () => ({ type: 'counter/incrementCounter' }),
    decrementCounter: () => ({ type: 'counter/decrementCounter' }),
    resetCounter: () => ({ type: 'counter/updateCounter', payload: 0 })
  },

  effects: {
    *incrementCounter({ payload }, { call, put, select }) {
      yield put({ type: 'increaseCounterStart' });
      let current = yield select(state => state.counter.current);
      let next = yield call(incrementCounter, current);
      yield put({ type: 'updateCounter', payload: next });
      yield put({ type: 'increaseCounterEnd' });
    },
    *decrementCounter({ payload }, { call, put, select }) {
      yield put({ type: 'decreaseCounterStart' });
      let current = yield select(state => state.counter.current);
      let next = yield call(decrementCounter, current);
      yield put({ type: 'updateCounter', payload: next });
      yield put({ type: 'decreaseCounterEnd' });
    },
  },

  reducers: {
    increaseCounterStart(state, action) {
      return Object.assign({}, state, { increasing: true });
    },
    decreaseCounterStart(state, action) {
      return Object.assign({}, state, { decreasing: true });
    },
    increaseCounterEnd(state, action) {
      return Object.assign({}, state, { increasing: false });
    },
    decreaseCounterEnd(state, action) {
      return Object.assign({}, state, { decreasing: false });
    },
    updateCounter(state, action) {
      return Object.assign({}, state, { current: action.payload });
    },
  },

};
