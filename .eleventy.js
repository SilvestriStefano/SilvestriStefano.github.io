const fs = require("fs");
const path = require("path");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  // Passthrough
    //fonts
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
    //css
  eleventyConfig.addPassthroughCopy("./src/assets/css/");
    //favicon
  eleventyConfig.addPassthroughCopy("./src/assets/img/favicon/*.(svg|ico)");
    //social images
  eleventyConfig.addPassthroughCopy("./src/assets/img/social/*.png");
   //
  eleventyConfig.addPassthroughCopy("./src/assets/files/*.pdf");
  
  // Plugin
    // navigation
  eleventyConfig.addPlugin( require("@11ty/eleventy-navigation") );

  // Libraries
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown.js'));
    
  //Shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  fs.readdirSync("./lib/shortcodes").forEach(function(fp) {
    if (fp=="async") {
        fs.readdirSync(`./lib/shortcodes/${fp}`).forEach(function(file) {
            if (file.endsWith(".js")) {
                const fName = path.parse(file).name;
                eleventyConfig.addAsyncShortcode(fName, require(`./lib/shortcodes/async/${fName}.js`));
            }
        })
    };
    if (fp.endsWith(".js")) {
        const fileName = path.parse(fp).name;
        eleventyConfig.addShortcode(fileName, require(`./lib/shortcodes/${fileName}.js`));
    }
  });
    

  eleventyConfig.addTransform("htmlmin", function(content) {
    // Prior to Eleventy 2.0: use this.outputPath instead
    if( this.page.outputPath && this.page.outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
      output: "public",
      },
    markdownTemplateEngine: "njk",
    templateFormats: ["md"," njk"]
    };
};