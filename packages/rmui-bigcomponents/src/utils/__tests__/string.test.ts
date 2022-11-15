import { capitalize } from '../string';

describe('string', () => {
    it('capitalize', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
});
