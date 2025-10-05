import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { AppRoot } from './config'

@customElement('my-element')
export class MyElement extends AppRoot {
  render() {
    return html`
      <div>Hello, from the client! The config you passed to createConfig is below:</div>
      <pre><code>${JSON.stringify(this.config, null, 2)}</code></pre>
    `
  }
}

