import React from 'react';
import { render, cleanup } from './common/test-utils'
import { store } from './app/store';
import App from './App';

afterEach(cleanup)

describe('App', () => {

  const googleMappingRequested = jest.fn()

  it('renders a snapshot', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

})