// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error

import type { rules as HTMLRules } from '@html-eslint/eslint-plugin'
import type { OptionsConfig as OptionsConfigAntfu } from '@antfu/eslint-config'

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
  bcstylistic?: boolean

  /**
   * Enable HTML support.
   *
   * @default true
   */
  html?: boolean

  /**
   * Enable XML support.
   *
   * @default true
   */
  xml?: boolean

  /**
   * Provide overrides for rules for each integration.
   */
  overrides?: Partial<ExtendedOverrides> & OptionsConfigAntfu['overrides']
}
