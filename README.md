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


# 公式のRedux + JSテンプレートまたはCreateReactApp用のRedux + TSテンプレートを使用
`npx create-react-app my-app --template redux`

## installs
1. 基本になるものをinstalls 
### sass
`npm install node sass`
### firebase
`npm install firebase`
### router
`npm i react-router-dom` 
### moment (date format)
`npm install moment`  
### date-fns
`npm install @date-io/date-fns`
### nanoid (id generate)
`npm install --save nanoid`
### React Icons (アイコン)
`npm install react-icons --save`
### React Hook Form (フォーム入力のチェック（バリデーション）)
`npm install react-hook-form`
### Yup (バリデーション用のスキーマ )
`npm install @hookform/resolvers yup`
### yup-locale-ja (日本語化)
`npm install yup yup-locale-ja`
### react-datepicker
`npm install react-datepicker --save`
### MUI(material-ui v5)
`npm install @mui/material @emotion/react @emotion/styled`
### npm install @mui/icons-material
`npm install @mui/icons-material`
### npm install @mui/lab
`npm install @mui/lab`

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
2. .envを作成する()
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
   
3. config.jsの作成
  2-1 プロジェクトのsrcにfirebaseフォルダーを作成してconfig.jsファイルを作成する。
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


# firestore serverTimestampの表示 
```
const timeStamp = serverTimestamp()
const timestampDate = moment(timeStamp.toDate()).format('YYYY/MM/DD HH:mm')
```
### react-hook-form  
Material-UIコンポーネントでのReactフックフォームの使用 
https://levelup.gitconnected.com/using-react-hook-form-with-material-ui-components-ba42ace9507a

### Redux Toolkit Quick Start(ReduxToolkitクイックスタート)
https://redux-toolkit.js.org/tutorials/quick-start

1. ReduxToolkitおよびReact-Reduxパッケージをプロジェクトに追加します。 
`npm install @reduxjs/toolkit react-redux`
2. Reduxのストアを作成します。 
  2-1 src/app/store.jsという名前のファイルを作成します 
  2-2 ReduxToolkitからconfigureStoreをインポートし、空のReduxストアを作成しエクスポートすることから始めます。 
`app / store.js`
```
  import { configureStore } from '@reduxjs/toolkit'

  export const store = configureStore({
    reducer: {},
  })
```
3. 反応するようにReduxのストアを提供
`index.js`
```
  import React from 'react'
  import ReactDOM from 'react-dom'
  import './index.css'
  import App from './App'

  import { store } from './app/store'
  import { Provider } from 'react-redux'

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
```

4. Reduxのスライスを作成します。 
  4-1 src/features/counter/counterSlice.jsを作成する 
  4-2 スライスを作成する
    4-2-1 スライスを識別する文字列名、 
    4-2-2 初期状態値、 
    4-2-3 状態の更新方法を定義する1つ以上のレデューサー関数 
  4-3 生成されたReduxアクションクリエーターとレデューサー関数をスライス全体にエクスポートできます。 
`features / counter / counterSlice.js`
```
  import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    value: 0,
  }

  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
  })

  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = counterSlice.actions

  export default counterSlice.reducer
```
5. スライスレデューサーをショップに追加します 
  5-1 カウンタースライスからレデューサー関数をインポートしてストアに追加する必要があります。reducerパラメータ内にフィールドを定義することにより、このスライスリデューサー関数を使用してその状態へのすべての更新を処理するようにストアに指示します。 
`app / store.js`
```
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```
6. Reduxの状態とコンポーネントを反応させるアクションの使用 
  6-1 src/features/counter/Counter.jsファイルを作成 
  6-2 これで、React-Reduxフックを使用して、ReactコンポーネントがReduxストアと対話できるようになりました。 
  6-3 useSelectorを使用してストアからデータを読み取り 
  6-4 useDispatchを使用してアクションをディスパッチできます 
`features / counter / Counter.js`
```
  import React from 'react'
  import { useSelector, useDispatch } from 'react-redux'
  import { decrement, increment } from './counterSlice'

  export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    )
  }
```


### Redux-ToolkitにFirebaseのTimestampをいれるときのエラー処理 
https://www.ok-data.com/entry/redux-toolkit%E3%81%ABfirebase%E3%81%AEtimestamp%E3%82%92%E3%81%84%E3%82%8C%E3%82%8B%E3%81%A8%E3%81%8D%E3%81%AE%E3%82%A8%E3%83%A9%E3%83%BC%E5%87%A6%E7%90%86/

### Redux-ToolkitにMterial-uiのdatetimepickerをいれるときのエラー処理 
1. エラーメッセージ 
```
  A non-serializable value was detected in an action, in the path: `payload.data.datePicker`. Value: Sat Oct 23 2021 09:00:07 GMT+0900 (日本標準時) 
  Take a look at the logic that dispatched this action:  {type: 'puttering/setData', payload: {…}} 
  (See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants) 
  (To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)
```
2. datePicker: Sat Oct 23 2021 09:00:07 GMT+0900 (日本標準時)はオブジェト 
3. Reduxの主要な使用原則の1つは、シリアル化できない値を状態またはアクションに入れないことです。シリアライズdevのチェックミドルウェアは自動的にそれはあなたの行動や状態の非直列化可能な値を検出し、いつでも警告が表示されます。誤ってミスをしないように、このミドルウェアをアクティブのままにしておくことをお勧めします。ただし、これらの警告をオフにする必要がある場合は、特定のアクションタイプ、またはアクションと状態のフィールドを無視するようにミドルウェアを構成することで、ミドルウェアをカスタマイズできます。 
`src/app/store.js`
```
  configureStore({
    //...
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ['puttering/setData'],
          // Ignore these field paths in all actions
          ignoredActionPaths: ['puttering/setData', 'payload.data.datePicker'],
          // Ignore these paths in the state
          ignoredPaths: ['payload.data.datePicker'],
        },
      }),
  })

```
4. ignoredActionsで警告をオフ 
  4-1 エラーメッセージに表示されているTypeを確認する。 
  `Take a look at the logic that dispatched this action:  {type: 'puttering/setData', payload: {…}}`
  4-2 serializableCheckのignoredActionsに指定する 
  ```
  serializableCheck: {
          // Ignore these action types
          ignoredActions: ['puttering/setData'],
        },
  ```
### Material-ui datetimepicker
1. date-fnsを使ってフォーマットする。 
  1-1 Installation
    `npm install date-fns --save`
  1-2 import
    `import { format, formatDistance, formatRelative, subDays } from 'date-fns'`
  1-3. format
    `{format(datePicker, 'yyyy/MM/dd/ HH:mm')}`
2. Intl.DateTimeFormatを使ってフォーマットする。 
  2-1 format
  `{new Intl.DateTimeFormat().format(datePicker)}`

# react-hook-form
## UI ライブラリを使用してバリデーションをエラーを適用する 
1. インストール
`npm install react-hook-form`
2. インポート 
`import { useForm, Controller } from "react-hook-form";` 
3. useForm()を使用する 
`const { handleSubmit, control} = useForm()`
4. ボタンを押した時の処理
```
const onSubmit = data => {
        console.log('input form data',data) 
        //{email: '山田太郎'}
    }
```
5. フォームのonSubmitからhandleSubmitを実行する 
```
<form onSubmit={handleSubmit(onSubmit)}>
    <div>
        <Button type='submit'>
            SUBMIT
        </Button>
    </div>
</form>
```
6. UI ライブラリを使用するために、Controllerでラップする。 
```
<Controller
    name="username"
    control={control}
    defaultValue=""
    render={({ field: { onChange, value }, fieldState: { error } }) =>
        <TextField
            id="username" 
            label="ユーザー名"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            fullWidth
            margin="normal"
        />
    }
/>
```
7. バリデーションを設定する 
```
rules={{
    required:'ユーザー名は必須です。',
    maxLength : {
        value: 20,
        message: 'ユーザー名は２０文字以内です。' 
    }
}}
```

8. 簡単な使用例（全体のコード） 
```
import React from 'react'
import { TextField, Button } from '@mui/material';
import { useForm, Controller } from "react-hook-form";

const EditProfile = () => {
    const { handleSubmit, control} = useForm()
    const onSubmit = data => {
        console.log('input form data',data)
    }
    return (
        <div className="page-fexed-container">  
            <div>UI ライブラリを使用してする</div>
            <div>バリデーションを適用する</div>
            <div>エラーを適用する</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) =>
                            <TextField
                                id="username" 
                                label="ユーザー名"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                fullWidth
                                margin="normal"
                            />
                        }
                        rules={{
                            required:'ユーザー名は必須です。',
                            maxLength : {
                                value: 20,
                                message: 'ユーザー名は２０文字以内です。' 
                            }
                        }}
                    />
                    <Button type='submit'>
                        SUBMIT
                    </Button>
                </div>
            </form>

        </div>
    )
}
export default EditProfile
```

# Firebase Authentication
## メールリンク認証
https://firebase.google.com/docs/auth/web/email-link-auth?hl=ja

1. Firebase プロジェクトでメールリンク ログインを有効にする 
  1-1 Firebase コンソールで [Authentication] セクションを開きます。 
  1-2 [Sign-in method] タブで [メール / パスワード] を有効にします。メールリンク ログインを使用するには、メール / パスワードによるログインを有効にする必要があります。 
  1-3 同じセクションで、ログイン方法として [メールリンク（パスワードなしでログイン）] を有効にします。
  1-4 [保存] をクリックします。 
2. ユーザーのメールアドレスに認証リンクを送信する(ウェブの場合) 
  1-1 ActionCodeSettings オブジェクトを作成します。 
    1-1-1 テスト環境の場合
    ```
      const actionCodeSettings = {
        url: 'http://localhost:3000/updateemail',
        handleCodeInApp: true,
      };
    ```
    1-1-2 firebaseのホスティングの場合 
    ```
      const actionCodeSettings = {
        url: 'https://redux-toolkit-firebase-bdbac.web.app/updateemail',
        handleCodeInApp: true,
      };
    ```
    2-1 ユーザーのメールアドレスに認証リンクを送信し、ユーザーが同じデバイスでメールによるログインを完了する場合に備えてこのメールアドレスを保存します。 
    ```
      import { getAuth, sendSignInLinkToEmail } from "firebase/auth"

      const auth = getAuth();
      sendSignInLinkToEmail(auth, profile.email, actionCodeSettings)
        .then(() => {
            window.localStorage.setItem('emailForSignIn', profile.email);
            console.log('sendSignInLinkToEmail window.localStorage.setItem email: ',profile.email)
            alert(profile.email + 'へログインのリクエストを送信しました。メールを開いてリンク（ACTIVITIESにログイン）をクリックしてください。ブラウザに表示されたページからメールアドレスの変更を完了してください。') 
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message 
            console.log(errorCode)
            console.log(errorMessage)
        });
    ```

3. ウェブページでログインを完了する
  3-1 メールリンクで使用するディープリンクの形式は、帯域外メール アクションで使用される形式（メールアドレスの確認、パスワードのリセット、メールアドレスの変更取り消しなどで使用される形式）と同じです。Firebase Auth は isSignInWithEmailLink API を提供することにより、リンクがメールリンクによるログインかどうかを判断する作業を簡易にします。 
  
  ```
  import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth"
   
  if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn')
      if (!email) {
          email = window.prompt('確認のためにメールアドレスを入力してください');
        }
      signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem('emailForSignIn');
        console.log(result.user);
        console.log('サインインが完了しました。');
        alert('サインインが完了しました。')
        // サイインイン後の処理.......
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
      });
      }
  ```
4. 


