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
## 構成
- フロントエンド
  - React.js (React Hooks) + TypeScript
- バックエンド
  - express.js
  - MongoDB

## 外観
![top](https://user-images.githubusercontent.com/64416398/158944782-1d5b1ec7-ff96-4f64-93f4-4af216024f59.png)

## 機能
### 検索機能
![image](https://user-images.githubusercontent.com/64416398/158945979-6bbe83e1-b618-4fbf-adc5-d47ac204612a.png)
### フォントを変更
![image](https://user-images.githubusercontent.com/64416398/158944970-a38c49a6-8d96-4747-9b76-7ff2c134113b.png)  
### ノートの手動ソート
https://user-images.githubusercontent.com/64416398/158945131-cdf4d589-6926-4f8d-b51f-ba7f453ee1c9.mp4
### 行の手動ソート
https://user-images.githubusercontent.com/64416398/158945324-2cbc36ae-a393-42b2-842a-1c5e00e39d24.mp4
### その他
- サイドバー開閉ボタン
- 新規ノート作成、削除
- 新規ノート作成時のリダイレクト
- 右上のドロワーメニュー
- リンクをコピー
- 上下キーによる行のフォーカス移動
- 行が空のとき、BackSpace・Deleteキーで行削除
- 行追加・削除時のフォーカス移動
- タイトル編集時、サイドバーにも編集を反映
