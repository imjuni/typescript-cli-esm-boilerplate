/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    globals: true,
    typecheck: {
      checker: 'tsc',
      tsconfig: './tsconfig.json',
    },
  },
});
