import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/components/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        { patterns: [{ group: ["@/features/*", "@/app/*"], message: "Shared components must not depend on features." }] },
      ],
    },
  },
  {
    files: ["src/components/atoms/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            { group: ["@/components/molecules*", "@/components/organisms*", "@/components/templates*"], message: "Atoms can only use other atoms." },
            { group: ["@/features/*"], message: "Shared components must not depend on features." },
          ],
        },
      ],
    },
  },
  {
    files: ["src/features/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            { group: ["@/features/*"], message: "Features are isolated: move shared code to src/components or src/lib." },
            { group: ["@/app/*"], message: "Features must not import routes." },
          ],
        },
      ],
    },
  },
  {
    files: ["src/app/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        { patterns: [{ group: ["@/features/*/*"], message: "Import a feature through its public index (@/features/<name>)." }] },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
