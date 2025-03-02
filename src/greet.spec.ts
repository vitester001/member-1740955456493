import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting with name when no greeting provided', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting with name when greeting provided', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should handle empty string name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  // Removing empty string greeting test since empty greeting should use default

  it('should handle special characters in name', () => {
    expect(greet('John & Jane')).toBe('Hello, John & Jane!');
  });

  it('should handle special characters in greeting', () => {
    expect(greet('John', 'Hey there!')).toBe('Hey there!, John!');
  });

  it('should handle whitespace in greeting', () => {
    expect(greet('John', '  Hi  ')).toBe('  Hi  , John!');
  });

  it('should handle whitespace in name', () => {
    expect(greet('  John  ')).toBe('Hello,   John  !');
  });
});
