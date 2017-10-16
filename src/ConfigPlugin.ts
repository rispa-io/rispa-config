import { PluginInstance, RispaContext } from '@rispa/core'
import ConfigPluginConstructor from './ConfigPluginConstructor'

export default function createConfigActivator(config: object): ConfigPluginConstructor  {
  return class extends ConfigPlugin {
    constructor(context: RispaContext) {
      super(context)

      this.setConfig(config)
    }
  }
}

export class ConfigPlugin extends PluginInstance {
  private config: object

  constructor(context) {
    super(context)

    this.config = {}
  }

  getConfig() {
    return this.config
  }

  setConfig(config) {
    return this.config = config
  }
}
