import type { ConfigItem, OptionsComponentExts, OptionsOverrides } from '@antfu/eslint-config'
import { markdown as antfuMarkdown } from '@antfu/eslint-config'

export function markdown(options: OptionsComponentExts & OptionsOverrides = {}): ConfigItem[] {
  return [
    ...antfuMarkdown(options),
  ]
}
