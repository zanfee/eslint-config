import type { ConfigItem } from '@antfu/eslint-config'
import { ignores as antfuIgnores } from '@antfu/eslint-config'

export function ignores(): ConfigItem[] {
  return [
    ...antfuIgnores(),
  ]
}
