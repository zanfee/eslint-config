import { antfu } from '@antfu/eslint-config'
import type { Awaitable, FlatConfigItem, UserConfigItem } from '@antfu/eslint-config'
import { bcstylistic, html, xml } from './configs'
import type { OptionsConfig } from './types'

/**
 * Construct an array of ESLint flat config items.
 */
export function bclint(options: OptionsConfig & FlatConfigItem = {}, ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]): Promise<UserConfigItem[]> {
  const {
    bcstylistic: enableBcstylistic = true,
    html: enableHtml = true,
    overrides = {},
    xml: enableXml = true,
  } = options

  const configs: Awaitable<FlatConfigItem[]>[] = []

  // Base configs
  if (enableBcstylistic) {
    configs.push(bcstylistic())
  }

  if (enableHtml) {
    configs.push(html({
      overrides: overrides.html,
    }))
  }

  if (enableXml) {
    configs.push(xml({
      overrides: overrides.xml,
    }))
  }

  return antfu(options, ...configs, ...userConfigs)
}
