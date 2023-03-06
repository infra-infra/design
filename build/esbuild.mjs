import * as esbuild from 'esbuild';
import * as path from 'path';
import * as fs from 'fs/promises';
import * as autoprefixer from 'autoprefixer';
import * as postcssPresetEnv from 'postcss-preset-env';
import postcssPlugin from './postcss-with-esbuild.mjs';
import { fileURLToPath } from 'url';

async function handleAssets() {
  await fs.copyFile(
    path.join(__dirname, '../components/styles/theme.scss'),
    path.join(__dirname, '../dist/theme.scss')
  );
  await fs.copyFile(
    path.join(__dirname, '../components/styles/light.scss'),
    path.join(__dirname, '../dist/light.scss')
  );
  await fs.copyFile(
    path.join(__dirname, '../components/styles/dark.scss'),
    path.join(__dirname, '../dist/dark.scss')
  );
  await fs.copyFile(
    path.join(__dirname, '../dist/styles/index.css'),
    path.join(__dirname, '../dist/bundle.min.css')
  );
  await fs.rm(path.join(__dirname, '../dist/styles/index.css'));
  await fs.rm(path.join(__dirname, '../dist/styles/index.js'));
  await fs.rmdir(path.join(__dirname, '../dist/styles'));
}

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
esbuild
  .build({
    entryPoints: [
      path.join(__dirname, '../components/index.ts'),
      path.join(__dirname, '../components/styles/index.ts'),
    ],
    bundle: true,
    outdir: path.join(__dirname, '../dist'),
    format: 'esm',
    minify: process.env.NODE_ENV !== 'development',
    external: ['react', 'react-dom'],
    plugins: [
      postcssPlugin({
        plugins: [autoprefixer.default, postcssPresetEnv.default],
      }),
    ],
  })
  .then((result) => {
    console.log('building...', result);
    handleAssets();
  })
  .catch(console.log);
