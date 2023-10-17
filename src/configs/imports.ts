import type { ConfigItem, OptionsStylistic } from '@antfu/eslint-config'
import { imports as antfuImports } from '@antfu/eslint-config'

export function imports(options: OptionsStylistic = {}): ConfigItem[] {
  return [
    ...antfuImports(options),
  ]
}
