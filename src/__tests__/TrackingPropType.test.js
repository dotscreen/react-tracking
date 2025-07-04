import PropTypes from 'prop-types';
import TrackingPropType from '../TrackingPropType';

describe('TrackingPropType', () => {
  it('should not warn for a valid tracking prop', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const props = {
      tracking: {
        trackEvent: () => {},
        getTrackingData: () => {},
      },
    };
    PropTypes.checkPropTypes(
      { tracking: TrackingPropType },
      props,
      'prop',
      'TestComponent'
    );
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should warn if tracking is not an object', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const props = { tracking: 'notAnObject' };
    PropTypes.checkPropTypes(
      { tracking: TrackingPropType },
      props,
      'prop',
      'TestComponent'
    );
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
