import commonjs from 'rollup-plugin-commonjs';
import rollupBabel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import sourcemaps from 'rollup-plugin-sourcemaps';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  plugins: [
    commonjs(),
    rollupBabel({
      sourceMaps: true,
      inputSourceMap: true,
      sourceMap: "inline",
      presets: [
        ["@babel/preset-env",
          {
            targets: 'ios >= 9, not ie 11, not op_mini all',
            // modules: false
          },
        ]
      ],
      plugins: [
        // ['@babel/plugin-transform-modules-commonjs'],
        ['@babel/plugin-transform-arrow-functions'],
        ['@babel/plugin-proposal-class-properties', { loose : true }]
      ]
    }),
    resolve({
      mainFields: ['browser', 'module', 'main'],
      preferBuiltins: false,
    }),
    json(),
    nodeBuiltins(),
    globals({
      buffer: false,
      dirname: false,
      filename: false,
    }),
    sourcemaps(),
  ],
  output: [
    {
      file: 'public/bundle.js',
			format: 'iife', // immediately-invoked function expression — suitable for <script> tags
			sourcemap: true,
      onwarn(warning, warn) {
        // skip certain warnings
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        // throw on others
        if (warning.code === 'NON_EXISTENT_EXPORT') throw new Error(warning.message);
        // Use default for everything else
        warn(warning);
      }
    },
  ],
  watch: {
    chokidar: true,
    clearScreen: false,
  }
};
