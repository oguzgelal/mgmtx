import dva from 'dva';
import { message } from 'antd';
import createHistory from 'history/createBrowserHistory';
import { persistStore, autoRehydrate } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import localForage from 'localforage'

// Models
import CounterModel from './models/counterModel';

// Other
import Router from './router';

import './index.css';

// 1. Initialize
const app = dva({
  history: createHistory(),
  extraEnhancers: [autoRehydrate()],
  onError(e) { message.error(e.message, 3); },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(CounterModel);

// 4. Router
app.router(Router);

// 5. Start
app.start('#root');

// Persist redux store
let counterFilter = createFilter('counter', ['current']);

persistStore(app._store, {
  storage: localForage,
  whitelist: ['counter'],
  transforms: [
    counterFilter
  ]
});
