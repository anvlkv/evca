// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const browserify = require('@cypress/browserify-preprocessor');

module.exports = (on, config) => {
    const options = browserify.defaultOptions;
    options.browserifyOptions.extensions = ['.js', '.ts'];
    options.browserifyOptions.transform[1][1].presets = ['env'];
    options.browserifyOptions.plugin = ['tsify'];


    on('file:preprocessor', browserify(options))
};