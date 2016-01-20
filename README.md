# Keyword-In-Context

# Usage

## React Projects

This module is implemented as a react component and can be used as such. Example code below

```jsx
<KeywordInContext
  caseSensitive={config.caseSensitive}
  contextSize={config.contextSize}
  text={data[0].text}
  query={query}
  limit={config.limit}
/>
```

See ... for documentation of parameters.

## Non-React Projects

If you want to use this project without using react yourself, there is an imperative API provided. An example is included below.

`Sample HTML file`
```html
<!DOCTYPE html>
<meta charset="utf-8">
<html>
<head>
  <title></title>

  <script type="text/javascript" src="dist/keyword_in_context.deps.js"></script>
  <script type="text/javascript" src="dist/keyword_in_context.js"></script>
</head>

<body>
  <div id='main'></div>
</body>
</html>

```

`Sample javascript file`
```js
var config = {
  "contextSize": 20,
  "caseSensitive": false,
  "query": "",
  "limit": 100
};

var data = [
  {
    "name": "Alice in Wonderland" ,
    "text": "Alice was beginning to get very tired of sitting by her sister"
  }
];

var container = document.querySelector("#main");

var query = 'of';

var opts = {
  config: config,
  data: data,
  container: container,
  query: query
}
KeywordInContext.show(opts)

```

# Dev Workflow

Uses webpack for building and webpack-dev-server during development. These can be accessed via npm scripts

`npm start` - to start the server in dev mode (with a watcher). Go to localhost:8080/demo.html when this is running to start execution from html.html. You can change the value in sample_data and refresh to see a change in the vis.

`npm run build` - execute the build. Results currently go into a dist subfolder and library dependencies are extracted to a .deps file.

See `webpack.config.js` for details.
