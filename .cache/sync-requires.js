const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/raja/Documents/Code/port-may2020/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/raja/Documents/Code/port-may2020/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/raja/Documents/Code/port-may2020/src/pages/index.js"))),
  "component---src-pages-movies-js": hot(preferDefault(require("/Users/raja/Documents/Code/port-may2020/src/pages/movies.js"))),
  "component---src-pages-steelbeauty-js": hot(preferDefault(require("/Users/raja/Documents/Code/port-may2020/src/pages/steelbeauty.js"))),
  "component---src-pages-uber-js": hot(preferDefault(require("/Users/raja/Documents/Code/port-may2020/src/pages/uber.js"))),
  "component---src-pages-weekend-js": hot(preferDefault(require("/Users/raja/Documents/Code/port-may2020/src/pages/weekend.js")))
}

