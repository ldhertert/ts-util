import { isObject, flatten } from '../../src/lang/objects';

test('isObject detects object', () => {
    expect(isObject({})).toBe(true);
});

test('isObject rejects primitives', () => {
    expect(isObject(false)).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject('string')).toBe(false);
});

test('isObject rejects undefined', () => {
    expect(isObject(undefined)).toBe(false);
});

test('flatten returns paths for all leaf objects', () => {
    const original = {
        complex: true,
        object: {
            it: "even",
            has: "nested"
        },
        objects: [
            { test: 1 },
            { test: 2 }
        ]
    }
    const result = flatten(original)
    expect(result.includes('objects[1].test')).toBeTruthy()
    expect(result.length).toBe(5)
})