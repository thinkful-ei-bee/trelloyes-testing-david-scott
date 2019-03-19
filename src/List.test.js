import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';
import STORE from './STORE'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List header='Fourth list' cards={['l', 'm']}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree =renderer.create(<List header='Fourth list' cards={['l', 'm']}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
