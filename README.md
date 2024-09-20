
# mailto_relation

`mailto_relation`は、ウェブページ上の`mailto:`リンクをカスタムURLで開くGoogle Chrome拡張機能です。特定のメールアドレス宛に指定されたWebアプリケーションを新しいウィンドウで開くことができます。拡張機能の初回起動時にカスタムホスト名の設定をユーザーに求めます。

## 特徴

- 任意の`mailto:`リンクをクリックすると、新しいウィンドウで指定されたURL（例: `https://customHost.relationapp.jp/popout/mail/new/`）を開きます。
- メールアドレスは自動でURLに挿入されます。
- 初回起動時に、ユーザーがカスタムホスト名を入力するように求められます（例: `example` と入力すると `example.relationapp.jp` が使用されます）。
- ウィンドウのサイズは `1460x804` に設定されています。

## インストール手順

1. このリポジトリをクローンします。

    ```bash
    git clone https://github.com/solahsoyalp/mailto-relation.git
    ```

2. Chromeブラウザで`chrome://extensions/`にアクセスします。
3. 右上の「デベロッパーモード」をオンにします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、`dist`フォルダ内の完成した拡張ファイルを選択します。

## 使い方

1. 初回起動時に、カスタムホスト名を入力するよう求められます。
2. ウェブページ上の`mailto:`リンクをクリックすると、次の形式のURLが新しいウィンドウで開きます。

    ```
    https://[customHost].relationapp.jp/popout/mail/new/?message_box_id=1&to=メールアドレス
    ```

    メールアドレスは自動で`mailto:`リンクから取得され、URLに挿入されます。

## 設定画面

- 初回起動時にカスタムホスト名が設定されますが、後から設定画面で変更することも可能です。
- Chromeの拡張機能管理ページ(`chrome://extensions/`)から、`mailto_relation`の「オプション」をクリックしてホスト名を変更してください。

## ファイル構成

- `src/`: ソースファイル (contentScript.js, options.html, options.js)
- `dist/`: 完成した拡張機能のファイルを保存するフォルダ
- `manifest.json`: Chrome拡張機能の設定ファイル
- `.gitignore`: Git無視設定ファイル
- `README.md`: このリポジトリの説明ファイル
- `LICENSE`: MITライセンスファイル

## 開発

1. `src/`フォルダ内のファイルを編集して機能追加や修正を行ってください。
2. `dist/`フォルダに完成した拡張機能を保存し、Chromeに読み込んでテストしてください。
3. 機能が確認できたら、リポジトリにプッシュし、プルリクエストを送る前に必ずテストを行ってください。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細については、[LICENSE](LICENSE)ファイルをご覧ください。
