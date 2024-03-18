import type { FlatConfigItem, OptionsOverrides } from '@antfu/eslint-config'

export async function bcstylistic(options: OptionsOverrides = {}): Promise<FlatConfigItem[]> {
  const {
    overrides = {},
  } = options
  return [
    {
      name: 'bechtle:stylistic',
      rules: {
        'curly': ['error', 'all'],
        'style/brace-style': ['error', 'stroustrup'],

        ...overrides,
      },
    },
  ]
}
