/**
 * test passing valid and invalid parameters to CLI. does not test functionality of cmd controllers!
 */
const consoleErrorSpy = jest.spyOn(console, 'error');
// mock process exit to prevent from closing the test suite on error
const processExitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});
describe('cli', () => {
  beforeEach(() => {
    jest.resetModules();
    originalArgv = process.argv;
  });
  afterEach(() => {
    consoleErrorSpy.mockClear();
    processExitSpy.mockClear();
    process.argv = originalArgv;
  });
  it('pkmn should accept chars', async () => {
    await runCommand('--pkmn', 'tsareena');
    expect(consoleErrorSpy).not.toBeCalled();
  });
  it('pkmn should accept ints', async () => {
    await runCommand('--pkmn', '1');
    expect(consoleErrorSpy).not.toBeCalled();
  });
  it('pkmn should not accept special characters', async () => {
    await runCommand('--pkmn', '!!!');
    // called three times
    // 1: yargs help response (lists all flags that the program takes)
    // 2: undefined (not sure what this is)
    // 3: help message in yargs config
    expect(consoleErrorSpy).toBeCalledTimes(3);
    expect(processExitSpy).toBeCalledTimes(1);
  });
  it('pkmn should not accept empty string', async () => {
    await runCommand('--pkmn', '');
    // called three times
    // 1: yargs help response (lists all flags that the program takes)
    // 2: undefined (not sure what this is)
    // 3: help message in yargs config
    expect(consoleErrorSpy).toBeCalledTimes(3);
    expect(processExitSpy).toBeCalledTimes(1);
  });
});
// mock calls to CLI
// see this lovely blog post:
// https://www.kgajera.com/blog/how-to-test-yargs-cli-with-jest/
async function runCommand(...args) {
  process.argv = ['node', 'leetdex.js', ...args];
  return ({ argv } = require('../leetdex.js'));
}
