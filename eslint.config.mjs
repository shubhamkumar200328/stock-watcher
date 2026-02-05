import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js recommended rules
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Custom overrides
  {
    rules: {
      // Allow `any` where unavoidable (APIs, 3rd-party libs)
      '@typescript-eslint/no-explicit-any': 'off',

      // Ignore unused vars if prefixed with _
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // Optional: allow console logs (useful for server actions)
      'no-console': 'off',
    },
  },

  // Ignore generated folders
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
];

export default eslintConfig;
