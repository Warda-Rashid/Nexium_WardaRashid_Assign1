// eslint.config.mjs

import nextPlugin from '@next/eslint-plugin-next'; // Import the Next.js ESLint plugin directly
import tseslint from 'typescript-eslint'; // For TypeScript support
import globals from 'globals'; // For defining global variables (like 'browser')

export default tseslint.config(
  {
    // Apply Next.js recommended and TypeScript recommended configurations
    extends: [
      nextPlugin.configs.recommended,
      nextPlugin.configs['core-web-vitals'],
      ...tseslint.configs.recommended,
    ],
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parserGlobals: globals.browser, // Make browser globals available
    },
    rules: {
      // THIS IS THE CRUCIAL LINE TO DISABLE THE UNESCAPED ENTITIES ERROR
      "react/no-unescaped-entities": "off",
      // You might also want to explicitly disable or warn for unused vars if it was an issue before
      // "@typescript-eslint/no-unused-vars": "off", // or "warn"
    },
  },
  // Add any other global configurations if needed (e.g., for ignores)
  {
    ignores: [".next/**", "node_modules/**", "public/**", "out/**"],
  }
);