const markdown = require('markdown-it');

module.exports = (() => {

  const options = {
    html: true,
    breaks: true,
    typographer: true,
    linkify: true
  };
  
  // const MathJaxConfig = {
  //   tex: {
  //     packages: ['base', 'ams', 'amssymb' ,'boldsymbol', 'newcommand', 'unicode', 'color', 'enclose'], // extensions to use
  //     tags: "ams",
  //   }
  // };

  const plugins = [
    require("markdown-it-mathjax3")
  ];

  const parser = markdown(options);

  if (plugins) {
    for (const plugin of plugins) {
      if (Array.isArray(plugin)) {
        // Allow array of options to be passed.
        parser.use(...plugin);
      } else {
        parser.use(plugin);
      }
    }
  }

  return parser;
})();
