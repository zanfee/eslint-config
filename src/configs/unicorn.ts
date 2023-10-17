import type { ConfigItem } from '@antfu/eslint-config'
import { unicorn as antfuUnicorn } from '@antfu/eslint-config'

export function unicorn(): ConfigItem[] {
  return [
    ...antfuUnicorn(),
  ]
}
