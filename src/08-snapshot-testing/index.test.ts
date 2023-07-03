// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const linkedList = generateLinkedList([1, 2]);
    expect(linkedList).toStrictEqual({
      next: {
        next: {
          next: null,
          value: null,
        },
        value: 2,
      },
      value: 1,
    });
    // Write your test here
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const linkedList = generateLinkedList([1, 2, 3]);
    expect(linkedList).toMatchSnapshot();
  });
  // Write your test here
});
