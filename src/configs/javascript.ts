import type { ConfigItem, OptionsIsInEditor, OptionsOverrides } from '@antfu/eslint-config'
import { javascript as antfuJavascript } from '@antfu/eslint-config'

export function javascript(options: OptionsIsInEditor & OptionsOverrides = {}): ConfigItem[] {
  return [
    ...antfuJavascript(options),
  ]
}
