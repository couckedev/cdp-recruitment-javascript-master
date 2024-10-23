const parseArgsFn = require('./parse-args.function');

test("should transform ['--someArg=someArgValue', '--anotherArg=anotherArgValue'] into [{ name: 'someArg', value: 'someArgValue' }, { name: 'anotherArg', value: 'anotherArgValue' }]", () => {
    expect(parseArgsFn(['--someArg=someArgValue', '--anotherArg=anotherArgValue'])).toStrictEqual([{ name: 'someArg', value: 'someArgValue' }, { name: 'anotherArg', value: 'anotherArgValue' }]);
});

test('should return empty array if no args have been passed to parseArgs function', () => {
    expect(parseArgsFn([])).toStrictEqual([]);
})