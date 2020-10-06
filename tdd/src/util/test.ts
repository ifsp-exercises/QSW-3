interface IExpectResponse {
  toBe: Function;
}

const it = (description: string, callback: Function): void => {
  console.log(`➔ The function ${description}`);
  callback();
};

const expect = (result: unknown): IExpectResponse => ({
  toBe: (expected: unknown) => {
    if (result === expected) {
      console.log('\x1b[32m', 'Test passed ✅');
    } else {
      console.log('\x1b[31m', 'Test failed ❌ ');
      console.log(`The test expected "${expected}", but received "${result}".`);
    }
  },
});

export { expect, it };
