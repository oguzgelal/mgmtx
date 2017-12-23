import dva from 'dva';
import { message } from 'antd';
import { persistStore, autoRehydrate } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import localForage from 'localforage';
import { Router } from 'dva/router';

// Components
import Routes from './routes';
import history from './config/history';

// Models
import CounterModel from './models/counterModel';

// Other
import './index.css';

// Initialize
const app = dva({
  history,
  extraEnhancers: [autoRehydrate()],
  onError(e) { message.error(e.message, 3); },
});

// Plugins
// app.use({});

// Model
app.model(CounterModel);

// Router
app.router(() => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
});

// Start
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
