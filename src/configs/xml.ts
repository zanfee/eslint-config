import type { FlatConfigItem, OptionsOverrides, OptionsStylistic } from '@antfu/eslint-config'
import { parserHtml, pluginHtml } from '../plugins'

export async function xml(options: OptionsStylistic & OptionsOverrides = {}): Promise<FlatConfigItem[]> {
  const {
    overrides = {},
    stylistic = true,
  } = options

  const {
    indent = 2,
  } = typeof stylistic === 'boolean' ? {} : stylistic

  return [
    {
      files: ['**/*.xml'],
      languageOptions: {
        parser: parserHtml,
      },
      name: 'bechtle:xml',
      plugins: {
        html: pluginHtml,
      },
      rules: {
        'html/element-newline': 'error',
        'html/indent': ['error', indent],
        'html/no-duplicate-attrs': 'error',
        'html/no-duplicate-id': 'error',
        'html/no-extra-spacing-attrs': ['error', { enforceBeforeSelfClose: true }],
        'html/no-obsolete-tags': 'error',
        'html/quotes': ['error', 'double'],
        'html/require-img-alt': 'error',
        'html/require-li-container': 'error',
        'html/require-title': 'error',

        // Disabled because it caused errors
        'style/spaced-comment': 'off',

        ...overrides,
      },
    },
  ]
}
