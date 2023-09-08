// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");

const getPackageName = () => {
  return packageJson.name;
};

const config = {
  entries: [
    {
      filePath: "./src/index.tsx",
      outFile: `./dist/${getPackageName()}.d.ts`,
      noCheck: true,
    },
  ],
};

module.exports = config;
