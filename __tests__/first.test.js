import diff from '../difflogic.js';
import {jest} from '@jest/globals';

let string = `{
        - follow: false
host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
    }`

test('test1', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    diff('__fixtures__/file1.json', '__fixtures__/file2.json');
    expect(consoleSpy).toHaveBeenCalledWith(string);
})