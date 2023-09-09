/// <reference types="vitest" />

import path from "path";
import { defineConfig } from "vite";
import packageJson from "./package.json";
import createExternal from "vite-plugin-external";
import injectExternals from "vite-plugin-inject-externals";
import { viteStaticCopy } from 'vite-plugin-static-copy'

const getPackageName = () => {
  return packageJson.name;
};

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, (char) => char[1].toUpperCase());
  } catch (err) {
    throw new Error("Name property in package.json is missing.");
  }
};

const fileName = {
  es: `${getPackageName()}.mjs`,
  cjs: `${getPackageName()}.cjs`,
  iife: `${getPackageName()}.js`,
};

const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

module.exports = defineConfig({
  base: "./",
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: getPackageNameCamelCase(),
      formats,
      fileName: (format) => fileName[format],
    },
  },
  plugins: [

    injectExternals({
      modules: [
        {
          name: 'p-elements-core',
          global: 'CustomElement'
        },
        {
          name: 'underscore',
          global: '_'
        },
        {
          name: "animejs",
          global: "anime",
        }
      ]
    }),
    createExternal({
      externals: {
        "p-elements-core": "CustomElement",
        "underscore": "_",
        "animejs": "anime",
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/images',
          dest: './'
        },
        {
          src: 'src/manifest.json',
          dest: './'
        },
        {
          src: 'src/index.html',
          dest: './'
        }
      ]
    })
  ],
  test: {
    environment: "jsdom"
  }
});
