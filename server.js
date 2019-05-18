import express from 'express';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Dashboard from './client/dashboard';
import { Provider } from 'react-redux';
import store from './store';

const app = express();
app.use('/static', express.static(path.resolve(__dirname, 'public')));

/* Route */
const renderHtml = require('./route/dashboard.route');
const errorHandler = require('./route/404');

/* Handler */
app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  res.send(renderHtml.dashboard(html, store.getState()));
});

app.get('*', errorHandler.notFound);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running in ${PORT}`));
