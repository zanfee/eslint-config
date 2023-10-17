import type { ConfigItem } from '@antfu/eslint-config'
import { sortKeys as antfuSortKeys } from '@antfu/eslint-config'

/**
 * Optional sort-keys plugin
 *
 * @see https://github.com/namnm/eslint-plugin-sort-keys
 */
export function sortKeys(): ConfigItem[] {
  return [
    ...antfuSortKeys(),
  ]
}
