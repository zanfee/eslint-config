import type { ConfigItem, OptionsComponentExts, OptionsOverrides, OptionsTypeScriptParserOptions, OptionsTypeScriptWithTypes } from '@antfu/eslint-config'
import { typescript as antfuTypescript } from '@antfu/eslint-config'

export function typescript(
  options?: OptionsComponentExts & OptionsOverrides & OptionsTypeScriptWithTypes & OptionsTypeScriptParserOptions,
): ConfigItem[] {
  return [
    ...antfuTypescript(options),
  ]
}
