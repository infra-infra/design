import * as esbuild from 'esbuild';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const buildOptions = {
  entryPoints: [
    path.join(__dirname, '../components/index.ts'),
    {
      out: path.join(__dirname, '../dist',"theme"),
      in: path.join(__dirname, '../components/styles/theme.css'),
    },
  ],
  bundle: true,
  outdir: path.join(__dirname, '../dist'),
  format: 'esm',
  minify: true,
  external: ['react', 'react-dom', '@emotion/css'],
};
if (process.env.NODE_ENV === 'development') {
  const ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  console.log('watching...');
} else {
  const result = await esbuild.build(buildOptions);
  console.log(result);
}
