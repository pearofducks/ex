import WarpElement from '@warp-ds/elements-core'
import { createContext } from '@lit/context'
import { property, state } from 'lit/decorators.js'
import { provide, consume } from '@lit/context'
import { getConfigFromString } from '@nmp-js/huck/client'
import type { Config } from '../types.d.ts'

export const configContext = createContext<Config>('config')

export class AppRoot extends WarpElement {
  @property({ type: String, attribute: 'init-config' }) initConfig

  @provide({ context: configContext })
  @state()
  config: Config

  connectedCallback() {
    super.connectedCallback()
    this.config = getConfigFromString(this.initConfig)
  }
}

export class Root extends WarpElement {
  @consume({ context: configContext })
  @property({ attribute: false })
  config: Config
}

