import { describe, it, expect } from 'vitest';
import {camelToDisplay} from '@lib/stringUtils';

describe('camelToDisplay', () => {
    it('converts a simple camelCase string', () => {
        expect(camelToDisplay('helloWorld')).toBe('Hello World');
    });

    it('handles a string with multiple uppercase letters', () => {
        expect(camelToDisplay('helloBeautifulWorld')).toBe('Hello Beautiful World');
    });

    it('preserves already capitalized letters at the start (PascalCase)', () => {
        expect(camelToDisplay('HelloWorld')).toBe('Hello World');
    });

    it('converts a single lowercase word', () => {
        expect(camelToDisplay('hello')).toBe('Hello');
    });

    it('handles an empty string', () => {
        expect(camelToDisplay('')).toBe('');
    });

    it('works with strings that have no uppercase letters (just ensures capitalization of first letter)', () => {
        expect(camelToDisplay('helloworld')).toBe('Helloworld');
    });

    it('maintains spacing if the string already contains spaces', () => {
        // Though not a typical use case, we just ensure behavior is stable:
        expect(camelToDisplay('hello World')).toBe('Hello  World');
        // Note: This might be considered a quirk. If you don't want double spaces,
        // you may refine your regex to handle this scenario.
    });

    it('converts acronyms properly', () => {
        expect(camelToDisplay('helloNASAWorld')).toBe('Hello N A S A World');
        // If this is not desired and you want something like "Hello NASA World",
        // you may need a more refined regex or logic in your function.
    });
});
