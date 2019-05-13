import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

describe('Form', () => {
  it('Should render itself without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});