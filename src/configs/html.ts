import type { FlatConfigItem, OptionsOverrides, OptionsStylistic } from '@antfu/eslint-config'
import pluginHtml from '@html-eslint/eslint-plugin'
import parserHtml from '@html-eslint/parser'

export async function html(options: OptionsStylistic & OptionsOverrides = {}): Promise<FlatConfigItem[]> {
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
      files: ['**/*.html'],
      languageOptions: {
        parser: parserHtml,
      },
      name: 'bechtle:html',
      plugins: {
        html: pluginHtml,
      },
      rules: {
        'html/element-newline': 'error',
        'html/indent': ['error', indent],
        'html/no-duplicate-attrs': 'error',
        'html/no-duplicate-id': 'error',
        'html/no-extra-spacing-attrs': ['error', { enforceBeforeSelfClose: true }],
        'html/no-multiple-h1': 'error',
        'html/no-obsolete-tags': 'error',
        'html/quotes': ['error', quotes],
        'html/require-closing-tags': 'error',
        'html/require-doctype': 'error',
        'html/require-img-alt': 'error',
        'html/require-lang': 'error',
        'html/require-li-container': 'error',
        'html/require-title': 'error',

        // Disabled because it caused errors
        'style/spaced-comment': 'off',

        ...overrides,
      },
    },
  ]
}
