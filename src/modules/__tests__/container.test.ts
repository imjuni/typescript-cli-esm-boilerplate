import Container from '#modules/container.ts';
import { describe, it } from 'vitest';

describe('Container', () => {
  it('pass', () => {
    const c = new Container('hello');
    expect(c.name).toEqual('hello');
  });
});
