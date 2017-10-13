import { PluginApi } from '@rispa/core'
import { ConfigPlugin } from './ConfigPlugin'

class ConfigPluginApi extends PluginApi<ConfigPlugin> {
  static pluginName = '@rispa/config'

  public getConfig() {
    return this.instance.getConfig()
  }
}

export default ConfigPluginApi
