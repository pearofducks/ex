import { defineConfig } from 'vite'
import VitEik, { outputOptions, getBase } from 'viteik'
import Uno from 'unocss/vite'
import { getPkgJson } from '@nmp-js/huck/config'

const pkg = await getPkgJson()

export default defineConfig({
  base: getBase({ pkg }),
  plugins: [VitEik(), Uno()],
  build: {
    target: 'esnext',
    rollupOptions: {
      input: './client/main.js',
      output: outputOptions,
    },
  },
})

