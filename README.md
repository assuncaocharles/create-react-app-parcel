# Create React App Parcel 💩

> create react apps with parcel instead of webpack cos why not

Preconfigured Features that come with your Parcel setup:

* [babel-preset-react-app](https://github.com/facebook/create-react-app/tree/next/packages/babel-preset-react-app) so you can use the exact same JS features that come with create-react-app (eg public class fields)
* improved `App.js` to show off the babel preset features (click on the React logo!)
* serviceWorker available but off by default (similar to the coming create-react-app 2.0 setup)
* [preconfigured build setup](https://github.com/sw-yx/create-react-app-parcel/blob/master/packages/react-scripts-parcel/config/parcel.config.prod.js) based on the [ParcelJS API](https://parceljs.org/api.html)
* nice eject experience that doesnt saddle you with a million webpack plugins
* as far as possible, same DX as create-react-app (eg checks if you use `yarn` or `npm`, environment variables all the same)
    * in particular it's a fork of create-react-app v2.0 so you also get features like [babel-plugin-macros](https://www.youtube.com/watch?v=nlAHtAQlFGk&list=WL&index=38) for free! 🔥

---

# Installing C.R.A.P.

```bash
npm i -g create-react-app-parcel
```

---

# Using C.R.A.P.

```bash
crap my-app
# or create-react-app-parcel my-app
cd my-app
yarn start
```

and presto! (try clicking the react icon)

![image](https://user-images.githubusercontent.com/35976578/39971555-35dfcffa-56cb-11e8-973e-346d265a6638.png)

# C.R.A.P. structure

You will have a very simple folder structure, same as `create-react-app`:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── App.css
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
```

No configuration or complicated folder structures, just the files you need to build your app.

---

# `react-scripts-parcel` API guide

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

⚠️ warning: this functionality is untested for now

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

### `yarn eject`

ejects you out of this shiznit like so

## How this was made

Check out the slide deck at <https://twitter.com/swyx/status/999474452571283456> and <https://www.beautiful.ai/player/-LD4eaMxlqSlCy6biPmZ/Creating-Create-React-App/1?ref=github-crap>. Also check out the [talk video here](https://www.youtube.com/watch?v=Et571vTAtT8)!

<a href="https://www.youtube.com/watch?v=Et571vTAtT8"><img src="https://user-images.githubusercontent.com/6764957/43364597-37d636f8-92eb-11e8-8ae7-ca98e5b805af.png" alt="creating CRAP" width="200"></a>

## Contributing

We'd love to have your helping hand on `create-react-app-parcel`! Ping me on twitter [@swyx](https://twitter.com/swyx) to discuss or file an issue, this is super new

## Acknowledgements

We are grateful to the authors of existing related projects for their ideas and collaboration:

* [create-react-app (@danabramov)](https://github.com/facebook/create-react-app)
* [parcel (@jamiebuilds, @devongovett)](https://github.com/parcel-bundler/parcel)

## License

Create React App Parcel is open source software [licensed as MIT](https://github.com/facebook/create-react-app/blob/master/LICENSE).

## Official Emoji

of course it's the 💩

## Alternatives

There's this dinky little me-too project called [create-react-app](https://github.com/facebook/create-react-app), send them some love, who knows they could be big someday.

Also for **Typescript** users a custom script exists: https://github.com/sw-yx/create-react-app-parcel-typescript 

```
crap my-ts-app --scripts-version=create-react-app-parcel-typescript
```
