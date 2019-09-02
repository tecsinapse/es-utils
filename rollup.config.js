import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';
import localResolve from 'rollup-plugin-local-resolve';

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        name: pkg.name,
        globals: {
          lodash: 'lodash',
        },
        format: 'cjs',
        sourcemap: true,
      },
    ],

    plugins: [
      peerDepsExternal(),
      builtins(),
      babel({
        exclude: ['node_modules/**'],
        extensions: ['.js'],
      }),
      localResolve(),
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/lodash/lodash.js': ['uniqBy'],
        },
      }),

      filesize(),
    ],
    onwarn(warning, warn) {
      // skip certain warnings
      if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
      }
      // Use default for everything else
      warn(warning);
    },
  },
];
