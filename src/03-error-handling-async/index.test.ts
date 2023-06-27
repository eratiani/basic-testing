// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const value = 'Hello!!!';
    const result = await resolveValue(value);
    expect(result).toBe(value);
    // Write your test here
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const errorMessage = 'Oops, something went wrong!';
    expect(() => throwError(errorMessage)).toThrow(Error);
    expect(() => throwError(errorMessage)).toThrow(errorMessage);
    // Write your test here
  });

  test('should throw error with default message if message is not provided', () => {
    const defaultErrorMessage = 'Oops!';
    expect(() => throwError()).toThrow(Error);
    expect(() => throwError()).toThrow(defaultErrorMessage);
    // Write your test here
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(Error);
    expect(() => throwCustomError()).toThrow(
      'This is my awesome custom error!',
    );
    // Write your test here
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
    await expect(rejectCustomError()).rejects.toThrow(
      'This is my awesome custom error!',
    );
    // Write your test here
  });
});
