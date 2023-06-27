// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initialBalance = 1000;
    const account = getBankAccount(initialBalance);

    expect(account.getBalance()).toBe(initialBalance);
    // Write your test here
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const initialBalance = 1000;
    const account = getBankAccount(initialBalance);
    const withdrawAmount = 2000;

    expect(() => account.withdraw(withdrawAmount)).toThrow(
      InsufficientFundsError,
    );
    // Write your test here
  });

  test('should throw error when transferring more than balance', () => {
    const initialBalance = 1000;
    const account = getBankAccount(initialBalance);
    const account2 = getBankAccount(initialBalance);
    const transferAmount = 2000;
    expect(() => account.transfer(transferAmount, account2)).toThrow(
      InsufficientFundsError,
    );

    // Write your test here
  });

  test('should throw error when transferring to the same account', () => {
    const initialBalance = 1000;
    const account = getBankAccount(initialBalance);
    const transferAmount = 2000;
    expect(() => account.transfer(transferAmount, account)).toThrow(
      TransferFailedError,
    );
    // Write your test here
  });

  test('should deposit money', () => {
    const initialBalance = 1000;
    const depositBalance = 1000;
    const account = getBankAccount(initialBalance);
    const expectedBalance = initialBalance + depositBalance;

    account.deposit(initialBalance);

    expect(account.getBalance()).toBe(expectedBalance);
    // Write your test here
  });

  test('should withdraw money', () => {
    const initialBalance = 1000;
    const withdrawBalance = 900;
    const account = getBankAccount(initialBalance);
    const expectedBalance = initialBalance - withdrawBalance;

    account.withdraw(withdrawBalance);

    expect(account.getBalance()).toBe(expectedBalance);

    // Write your test here
  });

  test('should transfer money', () => {
    const initialBalance = 1000;
    const account1 = getBankAccount(initialBalance);
    const account2 = getBankAccount(initialBalance);
    const transferAmount = 500;
    const expectedBalance1 = initialBalance - transferAmount;
    const expectedBalance2 = initialBalance + transferAmount;

    account1.transfer(transferAmount, account2);

    expect(account1.getBalance()).toBe(expectedBalance1);
    expect(account2.getBalance()).toBe(expectedBalance2);
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(1000);

    const balance = await account.fetchBalance();
    if (balance != null) {
      expect(typeof balance).toBe('number');
    } else {
      expect(balance).toBeNull();
    }
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(1000);
    const newBalance = 1500;
    account.fetchBalance = jest.fn().mockResolvedValue(newBalance);

    await account.synchronizeBalance();

    expect(account.getBalance()).toBe(newBalance);
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(1000);
    account.fetchBalance = jest.fn().mockResolvedValue(null);

    await expect(account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
    // Write your tests here
  });
});
