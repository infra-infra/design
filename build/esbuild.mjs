import * as esbuild from 'esbuild';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as autoprefixer from 'autoprefixer';
import * as postcssPresetEnv from 'postcss-preset-env';
import postcssPlugin from './postcss-with-esbuild.mjs';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const buildOptions = {
  entryPoints: [
    path.join(__dirname, '../components/index.ts'),
    path.join(__dirname, '../components/styles/index.scss'),
  ],
  bundle: true,
  outdir: path.join(__dirname, '../dist'),
  format: 'esm',
  minify: true,
  plugins: [
    postcssPlugin({
      plugins: [autoprefixer.default, postcssPresetEnv.default],
    }),
  ],
  external: ['react', 'react-dom'],
};
if (process.env.NODE_ENV === 'development') {
  const ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  console.log('watching...');
} else {
  const result = await esbuild.build(buildOptions);
  console.log(result);
}
