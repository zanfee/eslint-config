import type { ConfigItem, OptionsStylistic } from '@antfu/eslint-config'
import { jsdoc as antfuJsdoc } from '@antfu/eslint-config'

export function jsdoc(options: OptionsStylistic = {}): ConfigItem[] {
  return [
    ...antfuJsdoc(options),
  ]
}
