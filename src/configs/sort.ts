import type { ConfigItem } from '@antfu/eslint-config'
import { sortPackageJson as antfuSortPackageJson, sortTsconfig as antfuSortTsconfig } from '@antfu/eslint-config'

/**
 * Sort package.json
 *
 * Requires `jsonc` config
 */
export function sortPackageJson(): ConfigItem[] {
  return [
    ...antfuSortPackageJson(),
  ]
}
/**
 * Sort tsconfig.json
 *
 * Requires `jsonc` config
 */

export function sortTsconfig(): ConfigItem[] {
  return [
    ...antfuSortTsconfig(),
  ]
}
