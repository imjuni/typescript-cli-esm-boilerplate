import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import readPkg from 'read-pkg';
import dts from 'rollup-plugin-dts';
import { swc } from 'rollup-plugin-swc3';

const pkg = readPkg.sync();

export default [
  {
    input: 'src/cli.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      banner: '#!/usr/bin/env node',
    },
    plugins: [
      nodeResolve({
        resolveOnly: (module) => {
          return (
            pkg?.dependencies?.[module] != null &&
            pkg?.devDependencies?.[module] != null &&
            pkg?.peerDependencies?.[module] != null
          );
        },
      }),
      typescript({
        tsconfig: 'tsconfig.prod.json',
      }),
      swc(),
    ],
  },
  {
    input: 'dist/src/cli.d.ts',
    output: {
      dir: 'dist',
      format: 'esm',
    },
    plugins: [dts()],
  },
];
