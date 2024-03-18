import type { FlatConfigItem, OptionsOverrides, OptionsStylistic } from '@antfu/eslint-config'
import pluginHtml from '@html-eslint/eslint-plugin'
import parserHtml from '@html-eslint/parser'

export async function xml(options: OptionsStylistic & OptionsOverrides = {}): Promise<FlatConfigItem[]> {
  const {
    overrides = {},
    stylistic = true,
  } = options

  const {
    indent = 2,
    quotes = 'double',
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
        'html/quotes': ['error', quotes],

        // Disabled because it caused errors
        'style/spaced-comment': 'off',

        ...overrides,
      },
    },
  ]
}
