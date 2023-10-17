import type { ConfigItem, OptionsHasTypeScript, OptionsOverrides, OptionsStylistic } from '@antfu/eslint-config'
import { vue as antfuVue } from '@antfu/eslint-config'

export function vue(
  options: OptionsHasTypeScript & OptionsOverrides & OptionsStylistic = {},
): ConfigItem[] {
  return [
    ...antfuVue(options),
  ]
}
