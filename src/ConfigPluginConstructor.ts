import { RispaContext } from '@rispa/core'
import { ConfigPlugin } from './ConfigPlugin'

type ConfigPluginConstructor = { new(context: RispaContext): ConfigPlugin }

export default ConfigPluginConstructor
