import type { ConfigItem, OptionsOverrides, OptionsStylistic } from '@antfu/eslint-config'
import { jsonc as antfuJsonc } from '@antfu/eslint-config'

export function jsonc(options: OptionsStylistic & OptionsOverrides = {}): ConfigItem[] {
  return [
    ...antfuJsonc(options),
  ]
}
