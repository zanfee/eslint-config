import { antfu, getOverrides } from '@antfu/eslint-config'
import type { Awaitable, FlatConfigItem, UserConfigItem } from '@antfu/eslint-config'
import { bcjavascript, bcstylistic, html, xml } from './configs'
import type { OptionsConfig } from './types'

/**
 * Construct an array of ESLint flat config items.
 *
 * @param {OptionsConfig & FlatConfigItem} options
 *  The options for generating the ESLint configurations.
 * @param {Awaitable<UserConfigItem | UserConfigItem[]>[]} userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns {Promise<UserConfigItem[]>}
 *  The merged ESLint configurations.
 */
export function bclint(options: OptionsConfig & FlatConfigItem = {}, ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]): Promise<UserConfigItem[]> {
  const {
    bcjavascript: enableBcjavascript = true,
    bcstylistic: enableBcstylistic = true,
    html: enableHtml = true,
    xml: enableXml = true,
  } = options

  const stylisticOptions = options.stylistic === false
    ? false
    : typeof options.stylistic === 'object'
      ? options.stylistic
      : {}

  const configs: Awaitable<FlatConfigItem[]>[] = []

  // Base configs
  if (enableBcjavascript) {
    configs.push(bcjavascript({
      overrides: getOverrides(options, 'bcjavascript' as any),
    }))
  }

  if (enableBcstylistic) {
    configs.push(bcstylistic({
      overrides: getOverrides(options, 'bcstylistic' as any),
    }))
  }

  if (enableHtml) {
    configs.push(html({
      overrides: getOverrides(options, 'html' as any),
      stylistic: stylisticOptions,
    }))
  }

  if (enableXml) {
    configs.push(xml({
      overrides: getOverrides(options, 'xml' as any),
      stylistic: stylisticOptions,
    }))
  }

  return antfu(options, ...configs, ...userConfigs)
}
