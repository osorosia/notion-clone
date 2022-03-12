# notion-clone
Notion (https://www.notion.so/) のクローンを作成しました。

## 使い方
```sh
docker-compose up -d
# TODO
#  -> http://localhost:3000/

# shell 1
cd backend
npm install
npm run dev

# shell 2
cd frontend
npm install
npm start
```

## ↓↓どこまでやるか未定

## 構成
- フロントエンド
  - React.js (React Hooks)
- バックエンド
  - express.js
  - MongoDB

## やったこと
- Dockerで開発環境を構築
- ノート新規作成、削除、編集
- サイドバー開閉ボタン

## やってないこと
- ユーザ認証
- 文章の一部分のみスタイルを適用

## 工夫したこと
- 学習目的でuseContext, useReducer, useMemoを使用した
  - useContext, useReducer
    - props drillingを回避
  - useMemo
    - 再レンダリングを極力減らした
- SCSSを使ったスタイルコーディング
