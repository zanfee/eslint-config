import { antfu, getOverrides } from '@antfu/eslint-config'
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
    xml: enableXml = true,
  } = options

  const configs: Awaitable<FlatConfigItem[]>[] = []

  // Base configs
  if (enableBcstylistic) {
    configs.push(bcstylistic())
  }

  if (enableHtml) {
    configs.push(html({
      overrides: getOverrides(options, 'html' as any),
    }))
  }

  if (enableXml) {
    configs.push(xml({
      overrides: getOverrides(options, 'xml' as any),
    }))
  }

  return antfu(options, ...configs, ...userConfigs)
}
