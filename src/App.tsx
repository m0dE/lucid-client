import { ConnectedRouter } from 'connected-react-router';
import { configureStore, getHistory } from 'src/modules/store';
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import RoutesComponent from 'src/view/shared/routes/RoutesComponent';
import layoutActions from 'src/modules/layout/layoutActions';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import LayoutDarkMode from 'src/modules/layout/layoutDarkMode';

import Layout from 'src/view/layout/Layout';

const store = configureStore();

const App = (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={getHistory()}>
        <AppInnerComponent />
      </ConnectedRouter>
    </Provider>
  );
};

const AppInnerComponent = (props) => {
  const dispatch = useDispatch();
  const isDarkModeStored = LayoutDarkMode.exists();

  if (!isDarkModeStored) {
    dispatch(layoutActions.doDarkModeChange(true));
  }

  const isDarkMode = useSelector(layoutSelectors.selectDarkMode);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <Layout {...props}>
        <RoutesComponent />
      </Layout>
    </div>
  );
};

export default App;
