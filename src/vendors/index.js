
require('react');
require('react-dom');
require('redux');
require('redux-thunk');
require('react-redux');
require('react-router');
require('react-router-redux');
require('react-slick');
//require('platform');
require('lodash');
//require('when');
require('url');

// Make sure the shim/polifyll files get delivered to the public folder so the
// html file can require them. We add the .noparse just to prevent
// webpack from 'piping' the files in the js loader which would
// get them through babel, which is not desirable (since babel will only
// modularize .js files, therefore .noparse is an unknown extension that is
// not gonna get through, is not an awesome solution but good enough for now).
// The ONLY goal of calling the files here is to get them in the bundle.
require('file?name=es5-shim.js!./polyfills/es5-shim.min.js.noparse');
require('file?name=es5-sham.js!./polyfills/es5-sham.min.js.noparse');
require('file?name=console-polyfill.js!./polyfills/console-polyfill.js.noparse');
