import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: "dist/cjs/index.js",
                format: 'cjs',
                sourcemap: true,
                name: 'react-lib'
            },
            {
                file: "dist/esm/index.js",
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            image(),
            external(),
            resolve(),
            commonjs(),
            terser(),
            typescript({ tsconfig: './tsconfig.json' }),
        ]
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: "esm" }],
        external: [/\.css$/],
        plugins: [dts()],
    },
]