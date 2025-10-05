import { defineConfig, createConfig, isLocal } from '@nmp-js/huck/config'
import { eik } from '@nmp-js/huck/eik'

export default defineConfig({
  podlet: true,
  local: {
    viteConfig: './vite.config.ts',
    home: {
      '/home': '/?adId=102',
    },
  },
  async setup({ podlet }) {
    if (isLocal) podlet.js({ value: '/client/main.ts', type: 'module' })
    else {
      await eik({ js: ['/main.ts'], podium: podlet })
    }
  },
  async render({ reply, req }) {
    const adId = req.query.adId
    const config = createConfig({ adId }, { raw: true })
    reply.podiumSend(`<my-app init-config=${config}></my-app>`)
  }
})
