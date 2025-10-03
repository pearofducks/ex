import { defineConfig } from '@nmp-js/huck/config'

export default defineConfig({
  podlet: true,
  async render({ reply }) {
    return reply.podiumSend('Hello world')
  }
})
