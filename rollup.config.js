import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import {babel} from '@rollup/plugin-babel';

const packageJson = require('./package.json');

export default {
    input: 'src/index.js',
    output: [
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        postcss({
            extract: false,
            modules: true,
            use: ['less'],
        }),
        babel({babelHelpers: 'bundled'}),
        resolve(),
        commonjs(),
        terser()
    ]
}