// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error

import type { rules as HTMLRules } from '@html-eslint/eslint-plugin'
import type { OptionsConfig as OptionsConfigAntfu, OptionsOverrides, StylisticConfig } from '@antfu/eslint-config'

export interface ExtendedOverrides {
  html?: HTMLRules
  xml?: HTMLRules
}

export interface OptionsConfig extends OptionsConfigAntfu {
  /**
   * Enable Bechtle's stylistic rules.
   *
   * @default true
   */
  bcstylistic?: boolean | (StylisticConfig & OptionsOverrides)

  /**
   * Enable HTML support.
   *
   * @default true
   */
  html?: boolean | OptionsOverrides

  /**
   * Enable XML support.
   *
   * @default true
   */
  xml?: boolean | OptionsOverrides

  /**
   * Provide overrides for rules for each integration.
   *
   * @deprecated use `overrides` option in each integration key instead
   */
  overrides?: Partial<ExtendedOverrides> & OptionsConfigAntfu['overrides']
}
