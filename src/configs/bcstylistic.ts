import type { FlatConfigItem } from '@antfu/eslint-config'

export async function bcstylistic(): Promise<FlatConfigItem[]> {
  return [
    {
      name: 'bechtle:stylistic',
      rules: {

      },
    },
  ]
}
