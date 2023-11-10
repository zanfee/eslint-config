import type { ConfigItem, StylisticConfig } from '@antfu/eslint-config'
import { stylistic as antfuStylistic } from '@antfu/eslint-config'

export function stylistic(options: StylisticConfig = {}): ConfigItem[] {
  return [
    ...antfuStylistic({
      ...options,
      quotes: 'single',
    }),
    {
      name: 'bechtle:stylistic',
      rules: {

      },
    },
  ]
}
