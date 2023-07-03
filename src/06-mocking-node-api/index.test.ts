// Uncomment the code below and write your tests
import path from 'path';
import fs from 'fs';
import promiseFs from 'fs/promises';
import { doStuffByTimeout, doStuffByInterval, readFileAsynchronously } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  beforeEach(() => {
    jest.spyOn(global, 'setTimeout');
  });
  test('should set timeout with provided callback and timeout', () => {
    const callback = jest.fn();
    doStuffByTimeout(callback, 10);
    expect(setTimeout).toBeCalledWith(callback, 10);
    // Write your test here
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();
    doStuffByTimeout(callback, 10);
    expect(callback).not.toBeCalled();
    jest.runAllTimers();
    expect(setTimeout).toBeCalledTimes(1);

    // Write your test here
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  beforeEach(() => {
    jest.spyOn(global, 'setInterval');
  });
  test('should set interval with provided callback and timeout', () => {
    const callback = jest.fn();
    doStuffByInterval(callback, 10);
    expect(setInterval).toBeCalledWith(callback, 10);
    // Write your test here
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();
    const interval = 100;
    const numOfTimes = 2;
    doStuffByInterval(callback, interval);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(interval * numOfTimes);
    expect(callback).toHaveBeenCalledTimes(numOfTimes);
    // Write your test here
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const joinSpy = jest.spyOn(path, 'join');
    await readFileAsynchronously('new.txt');

    expect(joinSpy).toBeCalled();
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(false);
    const content = await readFileAsynchronously('test.txt');
    expect(content).toBeNull();
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    jest
      .spyOn(promiseFs, 'readFile')
      .mockResolvedValue(Buffer.from('mock value'));
    const content = await readFileAsynchronously('test.txt');
    expect(content).toEqual('mock value');
    // Write your test here
  });
});
