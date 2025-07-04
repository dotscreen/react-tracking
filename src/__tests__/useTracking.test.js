/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import useTracking from '../useTracking';

describe('useTracking', () => {
  it('does not throw an error if tracking context not present', () => {
    function ThrowMissingContext() {
      useTracking();
      return <div>hi</div>;
    }

    expect(() => {
      try {
        renderToString(<ThrowMissingContext />);
      } catch (error) {
        throw new Error(error);
      }
    }).not.toThrow();
  });

  it('dispatches tracking events from a useTracking hook tracking object', () => {
    const outerTrackingData = {
      page: 'Page',
    };

    const dispatch = jest.fn();

    function App() {
      const tracking = useTracking(outerTrackingData, { dispatch });

      expect(tracking.getTrackingData()).toEqual({
        page: 'Page',
      });

      return (
        <button
          type="button"
          onClick={() =>
            tracking.trackEvent({
              event: 'buttonClick',
            })
          }
        />
      );
    }

    render(<App />);
    fireEvent.click(screen.getByRole('button'));
    expect(dispatch).toHaveBeenCalledWith({
      ...outerTrackingData,
      event: 'buttonClick',
    });
  });
});
