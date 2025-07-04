import * as exported from '../index';
import track from '../trackingHoC';
import withTracking from '../withTrackingComponentDecorator';
import trackEvent from '../trackEventMethodDecorator';
import TrackingPropType from '../TrackingPropType';
import useTracking from '../useTracking';
import deepmerge from 'deepmerge';

describe('index.js', () => {
  it('should load the index file', () => {
    expect(exported).toBeDefined();
  });
});

describe('index.js exports', () => {
  it('should export track as default and named', () => {
    expect(exported.default).toBe(track);
    expect(exported.track).toBe(track);
  });

  it('should export withTracking', () => {
    expect(exported.withTracking).toBe(withTracking);
  });

  it('should export trackEvent', () => {
    expect(exported.trackEvent).toBe(trackEvent);
  });

  it('should export TrackingPropType', () => {
    expect(exported.TrackingPropType).toBe(TrackingPropType);
  });

  it('should export useTracking', () => {
    expect(exported.useTracking).toBe(useTracking);
  });

  it('should export deepmerge', () => {
    expect(exported.deepmerge).toBe(deepmerge);
  });
});
