This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# redux-toolkit-firabse 
node v12.18.0
npm 7.8.0

## installs
1. 基本になるものをinstalls 
### sass
`npm install node sass`
### 
`npm install --save normalize-scss`

### router
`npm i react-router-dom`

### material-ui
`npm install @material-ui/core`
`npm install @material-ui/icons`

### react-transition-form 
`npm install react-transition-group --save`

# git clone で作成する
（上記の 基本になるものをinstallsは、すでにインストール済み）

`git clone https://github.com/hiramatsuYoshiaki/react-start.git`
`npm i`
`cd react-start`
`npm start`



# firebase setup---------------------------
1. firebase プロジェクトの作成とデプロイ
   ブラウザ
   2-1. firebase コンソールでプロジェクト追加
   2-2. アナリティクスの設定 1/3 　プロジェクト名を入力(blog-app）
   2-3. アナリティクスの設定 2/3 　[続行]ボタンを押す
   2-4. アナリティクスの設定 3/3 　[プロジェクトを作成]ボタンを押す
   2-5. プロジェクトのホーム画面（アプリに firebase を追加して利用を開始しましょう）のウェブボタンをクリック
   2-6. ウェブアプリに firebase を追加、アプリのニックネーム(blog-app)に入力、このアプリの firebase Hosting も設定にチェックを入れて、[アプリを登録]ボタンを押す
   2-7. firebase SDK の追加[次へ]ボタンを押す
   2-8. firebase CLI のインストール[次へ]ボタンを押す
   2-9. firebase Hosting へのデプロイ[コンソールへ進む]ボタンを押す
   2-10. コンソールの歯車アイコンのメニューの[プロジェクトの設定]をクリック
   2-10. リソースロケーションの鉛筆アイコンをクリック
   2-10. デフォルトのリソースロケーションの設定で asia-northeast1 を選択し[完了]ボタンを押す
   2-10. コンソールのメニューの cloud firestore をクリック
   2-10. Cloud Firesore 画面で[データベースの作成]ボタンを押す
   2-10. セキュリティー保護ルール画面で、本番環境で開始にチェックが入っていることを確認し、[次へ]を押す
   2-10. ロケーション設定画面で[完了]を押す
   ターミナル
   2-10. `$ firebase login`
   2-10. `$ firebase init`

   ```
    PS D:\develop-react\blog-app> firebase init

        ######## #### ########  ######## ########     ###     ######  ########
        ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
        ######    ##  ########  ######   ########  #########  ######  ######
        ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
        ##       #### ##     ## ######## ########  ##     ##  ######  ########

    You're about to initialize a Firebase project in this directory:

    D:\develop-react\blog-app

    ? Are you ready to proceed? Yes
    ? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. Firestore: Deploy rules and create indexes for Firestore, Hosting: Configure and deploy Firebase Hosting sites, Storage: Deploy Cloud Storage security rules

    === Project Setup

    First, let's associate this project directory with a Firebase project.
    You can create multiple project aliases by running firebase use --add,
    but for now we'll just set up a default project.

    ? Please select an option: Use an existing project
    ? Select a default Firebase project for this directory: blog-app-4302d (blog-app)
    i  Using project blog-app-4302d (blog-app)

    === Firestore Setup

    Firestore Security Rules allow you to define how and when to allow
    requests. You can keep these rules in your project directory
    and publish them with firebase deploy.

    ? What file should be used for Firestore Rules? firestore.rules

    Firestore indexes allow you to perform complex queries while
    maintaining performance that scales with the size of the result
    set. You can keep index definitions in your project directory
    and publish them with firebase deploy.

    ? What file should be used for Firestore indexes? firestore.indexes.json

    === Hosting Setup

    Your public directory is the folder (relative to your project directory) that
    will contain Hosting assets to be uploaded with firebase deploy. If you
    have a build process for your assets, use your build's output directory.

    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ? Set up automatic builds and deploys with GitHub? No
    +  Wrote build/index.html

    === Storage Setup

    Firebase Storage Security Rules allow you to define how and when to allow
    uploads and downloads. You can keep these rules in your project directory
    and publish them with firebase deploy.

    ? What file should be used for Storage Rules? storage.rules

    i  Writing configuration info to firebase.json...
    i  Writing project information to .firebaserc...

    +  Firebase initialization complete!
   ```

   2-10. `$ npm run build`

   2-10. `$ firebase deploy`
   `Hosting URL: https://blog-app-4302d.web.app`

   2-11. `$ npm install firebase`

# create-react-app コマンドで作ったリポジトリを GitHub に上げる方法

1. New repository でリポジトリを作る(Repository name:react-start-firebase)
2. この時 Initialize this repository with a README をチェックしない
3. Create repositoryボタンを押す。
4. ローカルリポジトリで以下の手順を実行する。

```
git add -A
git commit -m "first commit"
git branch -M main
git remote -v
origin  https://github.com/hiramatsuYoshiaki/react-start-firebase.git (fetch)
origin  https://github.com/hiramatsuYoshiaki/react-start-firebase.git (push)
git remote set-url origin https://hiramatsuYoshiaki:<トークン>@github.com/hiramatsuYoshiaki/react-start-firebase.git
git remote -v
origin  https://hiramatsuYoshiaki:<トークン>@github.com/hiramatsuYoshiaki/react-start.git (fetch)
origin  https://hiramatsuYoshiaki:<トークン>@github.com/hiramatsuYoshiaki/react-start.git (push)
git push -u origin main
```
# firebase ルールの更新

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
```

`firebase deploy --only firestore:rules`

# firebase を使用するためのセットアップ。
1. .gitignoreに.envを追加する
    .gitignoreファイルに.envを追記して、gitリポジトリにプッシュします。リポジトリにプッシュした後、.envファイルをプロジェクトディレクトリに追加します。
  1-1 gitignoreに.envを追加する
      ```
      # misc
        .env
        .DS_Store
        .env.local
        .env.development.local
        .env.test.local
        .env.production.local
      ```
  1-2 githubにpushする。
    ```
      git add -A
      git commit -m ".gitignore added .env"
      git push 
    ```
2. .envを作成する
  1-1 プロジェクトのルートに.envを作成する。
  1.2 プロジェクトのホーム画面の歯車アイコンのメニューの[プロジェクトの設定]をクリック
  1-3 SDK の設定と構成に表示されているfirebaseConfigの内容から.envを作成する。
  ```
    REACT_APP_API_KEY="..."
    REACT_APP_AUTH_DOMAIN="..."
    REACT_APP_PROJECT_ID="..."
    REACT_APP_STORAGE_BUCKET="..."
    REACT_APP_MESSAGING_SENDER_ID="..."
    REACT_APP_APP_ID="..."
    REACT_APP_MEASUREMENT_ID="..."
    REACT_APP_GOOGLE_MAPS_API_KEY='...'
  ```
  
2. config.jsの作成
  2-1 プロジェクトのルートにfirebaseフォルダーを作成してconfig.jsファイルを作成する。
  ```
    export const firebaseConfig = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID
    };  
  ```
3. index.jsの作成 
  3-1 firebaseフォルダーにindex.jsファイルを作成する。
  ```
    import firebase from "firebase/app"
    import "firebase/auth";
    import "firebase/firestore";
    import "firebase/functions";
    import "firebase/storage";
    import {firebaseConfig} from "./config";

    firebase.initializeApp(firebaseConfig); 
    export const auth = firebase.auth();
    export const db = firebase.firestore();
    export const functions = firebase.functions();
    export const storage = firebase.storage();
    export const fb = firebase;
    export const FirebaseFieldValue = firebase.firestore.FieldValue
    export const FirebaseTimestamp = firebase.firestore.Timestamp;  

  ```
# Cloud Firestore を使ってみる 
version9
https://firebase.google.com/docs/firestore/quickstart?hl=ja#web-v9_4
# ウェブサイトで Firebase Authentication を使ってみる 
version9
https://firebase.google.com/docs/auth/web/start?hl=ja

# バージョン8からモジュラーWebSDKにアップグレードします 
現在FirebaseWeb SDKバージョン8以前を使用しているアプリは、このガイドの手順を使用してバージョン9への移行を検討する必要があります。

1. index.jsの変更
v8
  ```
    import firebase from "firebase/app"
    import "firebase/auth";
    import "firebase/firestore";
    ```

v9
```
  import firebase from "firebase/compat/app"//v9
  import "firebase/compat/auth";//v9
  import "firebase/compat/firestore";//v9
```


https://firebase.google.com/docs/web/modular-upgrade


