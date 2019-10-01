import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  // eslint-disable-next-line react/react-in-jsx-scope
  <App />,
  document.getElementById('content')
);
document.body.classList.remove('loading');
