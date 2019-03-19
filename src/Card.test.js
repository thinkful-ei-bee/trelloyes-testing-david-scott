import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import renderer from 'react-test-renderer';


describe('<Card />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title="x" content="z"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('matches snapshot', () => {
    const tree =renderer.create(<Card title='x' content='z'/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
