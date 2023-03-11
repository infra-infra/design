import * as esbuild from 'esbuild';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
esbuild
  .build({
    entryPoints: [
      path.join(__dirname, '../components/index.ts'),
    ],
    bundle: true,
    outdir: path.join(__dirname, '../dist'),
    format: 'esm',
    minify: true,
    external: ['react', 'react-dom']
  })
  .then((result) => {
    console.log('building...', result);
    // handleAssets();
  })
  .catch(console.log);
