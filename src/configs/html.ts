import type { ConfigItem, OptionsOverrides, OptionsStylistic } from '@antfu/eslint-config'
import { parserHtml, pluginHtml } from '../plugins'

export function html(options: OptionsStylistic & OptionsOverrides = {}): ConfigItem[] {
  const {
    overrides = {},
    stylistic = true,
  } = options

  const {
    indent = 2,
  } = typeof stylistic === 'boolean' ? {} : stylistic

  return [
    {
      files: ['**/*.html'],
      languageOptions: {
        parser: parserHtml,
      },
      name: 'bechtle:html',
      plugins: {
        '@html-eslint': pluginHtml,
      },
      rules: {
        '@html-eslint/element-newline': 'error',
        '@html-eslint/indent': ['error', indent],
        '@html-eslint/no-duplicate-attrs': 'error',
        '@html-eslint/no-duplicate-id': 'error',
        '@html-eslint/no-extra-spacing-attrs': ['error', { enforceBeforeSelfClose: true }],
        '@html-eslint/no-multiple-h1': 'error',
        '@html-eslint/no-obsolete-tags': 'error',
        '@html-eslint/quotes': ['error', 'double'],
        '@html-eslint/require-closing-tags': 'error',
        '@html-eslint/require-doctype': 'error',
        '@html-eslint/require-img-alt': 'error',
        '@html-eslint/require-li-container': 'error',
        '@html-eslint/require-title': 'error',

        // Disabled because it caused errors
        'style/spaced-comment': 'off',

        ...overrides,
      },
    },
  ]
}
