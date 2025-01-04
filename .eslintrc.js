module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'perfectionist'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-empty-interface': 0,
    'no-console': 0,
    camelcase: 0,
    'no-use-before-define': 1,

    'perfectionist/sort-named-imports': [
      1,
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-named-exports': [
      1,
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-exports': [
      1,
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-imports': [
      1,
      {
        order: 'asc',
        type: 'line-length',
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
          'custom-screens',
          'custom-components',
          'custom-providers',
          'custom-routes',
          'custom-zustand',
          'custom-axios',
          'custom-server',
          'custom-hooks',
          'custom-utils',
          'custom-type',
          'custom-assets',
          'custom-config',
        ],
        'custom-groups': {
          value: {
            'custom-screens': '@screens/**',
            'custom-components': '@components/**',
            'custom-providers': '@providers/**',
            'custom-routes': '@routes/**',
            'custom-zustand': '@zustand/**',
            'custom-axios': '@axios/**',
            'custom-layout': '@layout/**',
            'custom-server': '@server/**',
            'custom-hooks': '@hooks/**',
            'custom-utils': '@utils/**',
            'custom-type': '@type/**',
            'custom-assets': '@assets/**',
            'custom-config': '@config/**',
          },
        },
        'internal-pattern': ['src/**'],
      },
    ],
  },
};
