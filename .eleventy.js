const fs = require("fs");
const path = require("path");
// const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  // Passthrough
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/img/favicon/*.(svg|ico)");
  eleventyConfig.addPassthroughCopy("./src/assets/img/social/*.png");
  eleventyConfig.addPassthroughCopy("./src/assets/files/*.pdf");
  
  // Plugin
  eleventyConfig.addPlugin( require("@11ty/eleventy-navigation") );

  // Libraries
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown.js'));
    
  //Shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  fs.readdirSync("./lib/shortcodes").forEach(function(pathString) {
    if (pathString=="async") {
        fs.readdirSync(`./lib/shortcodes/${pathString}`).forEach(function(fileString) {
            if (fileString.endsWith(".js")) {
                const fName = path.parse(fileString).name;
                eleventyConfig.addAsyncShortcode(fName, require(`./lib/shortcodes/async/${fName}.js`));
            }
        })
    };
    if (pathString.endsWith(".js")) {
        const fileName = path.parse(pathString).name;
        eleventyConfig.addShortcode(fileName, require(`./lib/shortcodes/${fileName}.js`));
    }
  });
    

  // Minify HTML 
  // https://www.11ty.dev/docs/config/#transforms
//   eleventyConfig.addTransform("htmlmin", function(content) {
//     if( this.page.outputPath && this.page.outputPath.endsWith(".html") ) {
//       let minified = htmlmin.minify(content, {
//         useShortDoctype: true,
//         removeComments: true,
//         collapseWhitespace: true,
//         conservativeCollapse: true
//       });
//       return minified;
//     }

//     return content;
//   });

  return {
    dir: {
      input: "src",
      output: "public",
      },
    markdownTemplateEngine: "njk",
    templateFormats: ["md"," njk"]
    };
};