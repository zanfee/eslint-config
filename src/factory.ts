import { antfu } from '@antfu/eslint-config'
import type { ConfigItem, OptionsConfig } from '@antfu/eslint-config'
import { stylistic } from './configs'

export function bclint(options: OptionsConfig & ConfigItem = {}, ...userConfigs: (ConfigItem | ConfigItem[])[]) {
  const bcConfig = {
    ...stylistic,
  }

  return antfu({
    ...options,
    ...bcConfig,
  }, ...userConfigs)
}
