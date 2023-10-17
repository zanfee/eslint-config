import type { ConfigItem, OptionsOverrides, OptionsStylistic } from '@antfu/eslint-config'
import { yaml as antfuYaml } from '@antfu/eslint-config'

export function yaml(
  options: OptionsOverrides & OptionsStylistic = {},
): ConfigItem[] {
  return [
    ...antfuYaml(options),
  ]
}
