import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json'
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
    external: ['react', 'prop-types', '@mui/material'],
    plugins: [
        resolve(),
        json(),
        peerDepsExternal(),
        postcss({
            extract: true,
            namedExports: true,
            modules: true,
            use: ['less'],
        }),
        babel({
            exclude: "node_modules/**",
            presets: ["@babel/preset-react"],
            babelHelpers: 'bundled'
        }),
        resolve(),
        commonjs(),
        terser()
    ]
}