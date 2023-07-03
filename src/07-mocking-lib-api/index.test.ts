// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  test('should create instance with provided base url', async () => {
    (axios.create as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ data: 'test data' }),
    });

    const response = await throttledGetDataFromApi('/posts');

    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });

    expect(response).toBe('test data');
    // Write your test here
  });

  test('should perform request to correct provided url', async () => {
    const mockedResponse = { data: 'test data' };
    (axios.create as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue(mockedResponse),
    });

    const result = await throttledGetDataFromApi('/posts');
    jest.runAllTimers();
    expect(axios.create().get).toHaveBeenCalledWith('/posts');
    expect(result).toEqual('test data');
    // Write your test here
  });

  test('should return response data', async () => {
    (axios.create as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ data: 'test data' }),
    });

    const response = await throttledGetDataFromApi('/users');

    expect(response).toBe('test data');
    // Write your test here
  });
});
