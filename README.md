# Confetti Starter Kit:

**confetti_starter_kit** is a webpack configured to create modern javascript web applications with confetti support.

## **Installation**

This starter kit could be installed in 2 ways.

1. Clone this repository and start working on the main branch.
2. Using [degit](https://github.com/Rich-Harris/degit).

### Commands while cloning the repository and working on the main branch:

```bash
git clone https://github.com/dev-enforced/confetti-starter-kit.git
cd confetti-starter-kit
npm install
```

### Commands while using degit

```bash
npm install -g degit
```

Follow the below instructions to use this starter kit:

```
degit dev-enforced/confetti-starter-kit#main my-app-name
cd my-app-name
npm install

# to start your application in localhost:3000
using npm --> npm run start
using yarn --> yarn start
```

## **List of Dependencies**

This application contains the following dependencies provided by wepack.

- Babel
- CSS support
- Assets (images)
- Code Splitting
- Caching
- HTML optimisation

Has an extra feature in addition to the above:

- Confetti Launch feature on button click.

## How does the toolkit implement caching?

The toolkit provides out of the box caching functionalities which are implemented in the following two ways:

1. Using `[contenthash]` to cache bundle files.
2. Extracting & caching non-changing third party libraries into vendor bundles.

### Caching using `[contenthash]`

- Webpack provides a way to use [filename substitutions](https://webpack.js.org/guides/caching/#output-filenames) to insert hashes of the file content using `[contenthash]` in the filename to cache files that don't change after a build of your app. This is leveraged in the toolkit to cache bundles by default and this behavior can be changed by updating the [`webpack.config.common.js`](https://github.com/dev-enforced/confetti-starter-kit/blob/main/webpack.config.common.js#L11) file.

### Extracting & caching third party libraries

- By default, the toolkit splits and extracts third party `npm` libraries into `vendor` chunks as these are less likely to change than the source code of your app. This is done using the `cacheGroups` option of the [`SplitChunksPlugin`](https://webpack.js.org/plugins/split-chunks-plugin/) in [`webpack.config.common.js`](https://github.com/dev-enforced/confetti-starter-kit/blob/main/webpack.config.common.js#L63)

## Development Mode

- Run using `npm start` which will create a live server with hot-reload.
- To build and generate files in the development mode, run the following command after local setup: `npm run build-dev`.
- This generates the build files within `./dist` folder but they will not be minified.

## Production mode

- Run `npm run build`, this'll combine and create a `dist` with the resulted code for deployment.
- This generates the build files within ./dist folder and they will be minified.
