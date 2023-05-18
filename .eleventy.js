module.exports = function (eleventyConfig) {
  // Passthrough
    //fonts
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
    //css
  eleventyConfig.addPassthroughCopy("./src/assets/css/");
    //js
  eleventyConfig.addPassthroughCopy("./src/assets/js/");
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
  eleventyConfig.addShortcode("navlist", require("./lib/shortcodes/navlist.js"));
  eleventyConfig.addShortcode("primaryNav", require("./lib/shortcodes/primaryNavigation.js"));
  eleventyConfig.addShortcode("secondaryNav", require("./lib/shortcodes/secondaryNavigation.js"));
  eleventyConfig.addShortcode("breadcrumbs", require("./lib/shortcodes/breadcrumb.js"));
  eleventyConfig.addShortcode("accordionItem", require("./lib/shortcodes/accordionItem.js"));
  eleventyConfig.addAsyncShortcode('image', require('./lib/shortcodes/image.js'));
  eleventyConfig.addAsyncShortcode("showcase", require("./lib/shortcodes/showcase.js"));
  eleventyConfig.addAsyncShortcode('imageBg', require('./lib/shortcodes/imageBg.js'));
  eleventyConfig.addAsyncShortcode('imageGroup', require('./lib/shortcodes/figureGroup.js'));
    
  return {
    dir: {
      input: "src",
      output: "public",
      },
    markdownTemplateEngine: "njk",
    templateFormats: ["md"," njk"]
    };
};