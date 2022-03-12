# notion-clone

## 使い方
```sh
docker-compose up -d

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

## やったこと
- ノート新規作成
- ノート削除
- サイドバー開閉ボタン

## やってないこと
- ユーザ認証
- 文章の一部分のみスタイルを適用

## 工夫したこと
- 学習目的でuseContext, useReducer, useMemoを使用した
  - props drillingを一部回避 (useContext + useReducer)
  - 再レンダリングを極力減らした (useMemo)
- SCSSを使ったスタイルコーディング
