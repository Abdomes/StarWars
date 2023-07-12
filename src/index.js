import React from 'react';
import ReactDOM from 'react-dom/client';
import store from '@store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '@containers/App';
import ThemeProvider from '@context/ThemeProvider';

import '@styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

