import { Container } from '#modules/container.js';
import { describe, expect, it } from 'vitest';

describe('Container', () => {
  it('pass', () => {
    const c = new Container('hello');
    expect(c.name).toEqual('hello');
  });
});
