import React from 'react';
import ReactDOM from 'react-dom';
import List from './Card.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List header="x" cards={[1, 2]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});