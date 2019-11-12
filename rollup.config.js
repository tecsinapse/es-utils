import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

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
      babel({
        exclude: ['node_modules/**'],
        extensions: ['.js'],
      }),
      resolve({
        jsnext: true,
        main: true,
      }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/lodash/lodash.js': ['uniqBy'],
        },
      }),
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
