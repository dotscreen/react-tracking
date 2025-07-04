import React from 'react';

const wTCDmock = jest.fn(() => () => {});
jest.setMock('../withTrackingComponentDecorator', wTCDmock);

const tEMDmock = jest.fn(() => () => {});
jest.setMock('../trackEventMethodDecorator', tEMDmock);

describe('tracking HoC', () => {
  const trackingHoC = require('../trackingHoC').default;

  it('detects a class', () => {
    const testClass = { testClass: true };
    const options = {};

    @trackingHoC(testClass, options)
    class TestClass extends React.Component {}

    new TestClass();

    expect(wTCDmock).toHaveBeenCalledWith(testClass, options);
  });

  it('detects a class method', () => {
    const testMethod = { testMethod: true };
    class TestMethod {
      @trackingHoC(testMethod)
      blah = () => {};
    }

    const myTest = new TestMethod();
    myTest.blah();

    expect(tEMDmock).toHaveBeenCalledWith(testMethod);
  });

  it('works on stateless functional components', () => {
    const testStateless = { testStateless: true };
    const options = {};
    function TestComponent() {
      return <div />;
    }

    trackingHoC(testStateless, options)(TestComponent);

    expect(wTCDmock).toHaveBeenCalledWith(testStateless, options);
  });
});
