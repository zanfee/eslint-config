import type { FlatConfigItem, OptionsOverrides } from '@antfu/eslint-config'

export async function bcjavascript(options: OptionsOverrides = {}): Promise<FlatConfigItem[]> {
  const {
    overrides = {},
  } = options

  return [
    {
      name: 'bechtle:javascript',
      rules: {
        'no-console': ['warn', { allow: ['warn', 'error'] }],

        ...overrides,
      },
    },
  ]
}
