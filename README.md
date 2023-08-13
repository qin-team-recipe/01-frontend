# 環境設定

1. Node.jsのバージョン `18.16.0`をインストールしてください。

2. 以下コマンドを実行し、npm packageをインストールしてください。

```
yarn
```

3. 以下コマンドを実行し、開発サーバーが立ち上がることを確認してください。

```
yarn dev
```

## VsCode 導入推奨プラグイン

| プラグイン名 | 機能 |
| --- | --- |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | HTML・CSS・JavaScript（TypeScript）等に対応したコードフォーマッター |
| [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) | stylelint（CSSのための静的検証ツール、構文ミスチェック等）の利用を可能にする |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | ESLint（JavaScriptのための静的検証ツール、構文ミスチェック等）の利用を可能にする |
| [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules) | CSS Modulesで実装したCSSのクラス名を自動補完する |
| [CSS Variable Autocomplete](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables) | CSS（SASS・SCSS）で定義したCSSカスタムプロパティ（変数）名を自動補完する |
| [SCSS Everywhere](https://marketplace.visualstudio.com/items?itemName=gencer.html-slim-scss-css-class-completion) | SCSSで定義したCSSのクラス名を自動補完する |


## 環境変数

- 環境変数の設定
  - root（01-frontendディレクトリ）直下に「.env」ファイルを作成する
  - ローカル用は「.env.local」、本番用は「.env.production」
- ローカル用設定
  ```
  API_FRONT_URL=http://localhost:3000
  API_BACK_URL=http://localhost:6000
  ```
