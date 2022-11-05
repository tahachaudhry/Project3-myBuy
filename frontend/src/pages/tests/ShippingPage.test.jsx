import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import shippingsPage from '../shippingsPage';
import store from '../../redux/store';

describe('shippingsPage Component', () => {
  const MockshippingsPage = (
    <MemoryRouter>
      <Provider store={store}>
        <shippingsPage />
      </Provider>
    </MemoryRouter>
  );

  it('should match the snapshot', () => {
    const tree = renderer.create(MockshippingsPage).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
