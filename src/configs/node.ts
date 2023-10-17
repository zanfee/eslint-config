import type { ConfigItem } from '@antfu/eslint-config'
import { node as antfuNode } from '@antfu/eslint-config'

export function node(): ConfigItem[] {
  return [
    ...antfuNode(),
  ]
}
