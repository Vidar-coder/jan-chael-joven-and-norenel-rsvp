import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "google-apps-script/**",
      "app/dashboard/page-backup.tsx",
      "app/dashboard/page-new.tsx",
      "app/dashboard/page-old.tsx",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/no-unescaped-entities": "off",
      // Raw <img> is intentional for many galleries, masonries, and decorative assets
      "@next/next/no-img-element": "off",
      "react-hooks/exhaustive-deps": "warn",
      "prefer-const": "warn",
      "import/no-anonymous-default-export": "warn",
    },
  },
];

export default eslintConfig;
