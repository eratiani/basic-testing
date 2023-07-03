// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const testObj = {
      a: 2,
      b: 3,
      action: Action.Add,
    };
    expect(simpleCalculator(testObj)).toEqual(5);
    // Write your test here
  });

  test('should subtract two numbers', () => {
    const testObj = {
      a: 2,
      b: 3,
      action: Action.Subtract,
    };
    expect(simpleCalculator(testObj)).toEqual(-1);
    // Write your test here
  });

  test('should multiply two numbers', () => {
    const testObj = {
      a: 2,
      b: 3,
      action: Action.Multiply,
    };
    expect(simpleCalculator(testObj)).toEqual(6);
    // Write your test here
  });

  test('should divide two numbers', () => {
    const testObj = {
      a: 2,
      b: 2,
      action: Action.Divide,
    };
    expect(simpleCalculator(testObj)).toEqual(1);
    // Write your test here
  });

  test('should exponentiate two numbers', () => {
    const testObj = {
      a: 2,
      b: 2,
      action: Action.Exponentiate,
    };
    expect(simpleCalculator(testObj)).toEqual(4);
    // Write your test here
  });

  test('should return null for invalid action', () => {
    const testObj = {
      a: 2,
      b: 2,
      action: 'ds',
    };
    expect(simpleCalculator(testObj)).toEqual(null);

    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    const testObj = {
      a: '2',
      b: '2',
      action: Action.Exponentiate,
    };
    expect(simpleCalculator(testObj)).toEqual(null);
    // Write your test here
  });
});
