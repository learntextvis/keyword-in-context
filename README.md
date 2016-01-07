# Concordance

# Dev Workflow

Uses webpack for building and webpack-dev-server during development. These can be accessed via npm scripts

`npm start` - to start the server in dev mode (with a watcher). Go to localhost:8080 when this is running to start execution from index.html. You can change the value in sample_data and refresh to see a change in the vis.

`npm run build` - execute the build. Results currently go into a build subfolder and library dependencies are extracted to a .deps file.

See `webpack.config.js` for details.
