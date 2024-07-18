/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: { target: 'es2022' },
  test: {
    clearMocks: true,
    globals: true,
    typecheck: {
      checker: 'tsc',
      tsconfig: './tsconfig.json',
    },
  },
});
