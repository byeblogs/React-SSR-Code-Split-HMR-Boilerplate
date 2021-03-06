// Root file for the client side application
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader';

import routes from './routes';
import store from './configureStore';

function ClientRoot() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* Render all routes by using react-router-config */}
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  );
}

let ExportableComponent = ClientRoot; // eslint-disable-line import/no-mutable-exports

if (process.env.NODE_ENV !== 'production') {
  // Export HMR enabled component if it is in dev mode
  ExportableComponent = hot(module)(ClientRoot);
}

export default ExportableComponent;
