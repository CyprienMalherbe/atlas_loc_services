import eslint from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'static',
      'reports',
      'docker',
    ],
  },
  ...pluginVue.configs['flat/recommended'],
  eslint.configs.recommended,
  stylistic.configs['recommended-flat'],
  {
    files: [
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.vue',
    ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest', // default
        sourceType: 'module', // default
        requireConfigFile: false,
      },
      globals: {
        window: 'readonly',
        location: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        fetch: 'readonly',
        navigator: 'readonly',
        sessionStorage: 'readonly',
        URL: 'readonly',
        File: 'readonly',
        FileReader: 'readonly',
      },
    },
    rules: {
      '@stylistic/arrow-parens': 'off',
      '@stylistic/brace-style': 'off',
      '@stylistic/indent': ['error', 2],
      '@stylistic/multiline-ternary': 'off',
      '@stylistic/semi': 'error',
      '@stylistic/space-before-function-paren': 'off',
      'comma-dangle': ['warn', 'always-multiline'],
      'curly': 'error',
      'max-len': ['warn', { code: 120 }],
      'no-irregular-whitespace': 'off',
      'no-prototype-builtins': 'off',
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          args: 'after-used',
        },
      ],
      'no-warning-comments': [
        'warn',
        {
          terms: ['TODO', 'FIXME'],
          location: 'anywhere',
        },
      ],
      'quote-props': ['warn', 'as-needed', { unnecessary: false }],
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION',
            'CONDITIONALS',
            'LIST_RENDERING',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'], 'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: false,
        },
      ],
      'vue/custom-event-name-casing': 'off',
      'vue/experimental-script-setup-vars': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-arrow-functions-in-watch': 'off',
      'vue/no-custom-modifiers-on-v-model': 'off',
      'vue/no-dupe-v-else-if': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/no-mutating-props': 'off',
      'vue/no-v-for-template-key': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/one-component-per-file': 'off',
      'vue/valid-v-slot': ['error', { allowModifiers: true }],
      'vue/v-slot-style': 'off',
    },
  },
]
