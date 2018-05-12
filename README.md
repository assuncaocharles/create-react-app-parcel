# Create React App Parcel

> a fun experiment to create react apps with parcel instead of webpack cos why not

> Latest version 0.0.17

---

# Installing C.R.A.P.

```bash
npm i -g create-react-app-parcel
```

---

# Using C.R.A.P.

```bash
crap my-app
cd my-app
yarn start
```

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

## Acknowledgements

We are grateful to the authors of existing related projects for their ideas and collaboration:

* [create-react-app (@danabramov)](https://github.com/facebook/create-react-app)
* [parcel (@jamiebuilds, @developit)](https://github.com/parcel-bundler/parcel)

## License

Create React App Parcel is open source software [licensed as MIT](https://github.com/facebook/create-react-app/blob/master/LICENSE).
