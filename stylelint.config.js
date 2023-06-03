module.exports = {
  plugin: ["stylelint-scss"],
  extends: [
    "stylelint-config-recommended-scss", // scssのための拡張ルール追加
    "stylelint-config-recess-order", // cssプロパティの自動ソートを設定
    "stylelint-config-prettier", // Prettierとの競合ルールをOFFにする
  ],
  rules: {
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
  },
};
