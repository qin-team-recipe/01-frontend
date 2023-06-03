import path from "path";
import type { StorybookConfig } from "@storybook/nextjs";

const rootPath = path.resolve(__dirname, "../src/");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require("sass"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config: any) => {
    config.resolve.alias["@"] = rootPath; // srcを@と省略してパスを記載できるように設定
    return config;
  },
};
export default config;
