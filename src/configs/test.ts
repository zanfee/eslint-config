import type { ConfigItem, OptionsIsInEditor, OptionsOverrides } from '@antfu/eslint-config'
import { test as antfuTest } from '@antfu/eslint-config'

export function test(options: OptionsIsInEditor & OptionsOverrides = {}): ConfigItem[] {
  return [
    ...antfuTest(options),
  ]
}
