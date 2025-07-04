import React from 'react';
import { render } from '@testing-library/react';
import ReactTrackingContext from '../ReactTrackingContext';

describe('ReactTrackingContext', () => {
  it('provides and consumes a value', () => {
    const value = { foo: 'bar' };
    let received;
    function Consumer() {
      received = React.useContext(ReactTrackingContext);
      return null;
    }
    render(
      <ReactTrackingContext.Provider value={value}>
        <Consumer />
      </ReactTrackingContext.Provider>
    );
    expect(received).toBe(value);
  });

  it('has an empty object as default value', () => {
    let received;
    function Consumer() {
      received = React.useContext(ReactTrackingContext);
      return null;
    }
    render(<Consumer />);
    expect(received).toEqual({});
  });
});
