import type { ConfigItem } from '@antfu/eslint-config'
import { comments as antfuComments } from '@antfu/eslint-config'

export function comments(): ConfigItem[] {
  return [
    ...antfuComments(),
  ]
}
