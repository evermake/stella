import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
    },
    ignores: [
      'src/stella/**',
    ],
  },
  {
    rules: {
      'ts/consistent-type-definitions': 'off',
      'curly': ['error', 'all'],
      'style/brace-style': ['error', '1tbs'],
      'no-console': 'off',
    },
  },
)
