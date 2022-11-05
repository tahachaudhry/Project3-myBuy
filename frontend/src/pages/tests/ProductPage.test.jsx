import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import productspage from '../productspage';
import store from '../../redux/store';

describe('productspage Component', () => {
  const Mockproductspage = (
    <MemoryRouter>
      <Provider store={store}>
        <productspage match={{ params: { id: 1 } }} />
      </Provider>
    </MemoryRouter>
  );

  it('should match the snapshot', () => {
    const tree = renderer.create(Mockproductspage).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
