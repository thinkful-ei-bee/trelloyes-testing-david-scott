import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card title="x" content="z"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
