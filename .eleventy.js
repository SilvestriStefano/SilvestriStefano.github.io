import shortcodes from './_config/shortcodes/shortcodes.js';
import asyncShortcodes from './_config/shortcodes/async/asyncShortcodes.js';
import md from './_config/libraries/markdown.js';
import eleventyNavigation from '@11ty/eleventy-navigation';	

export default function(eleventyConfig) {
  // Passthrough
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/img/favicon/*.(svg|ico)");
  eleventyConfig.addPassthroughCopy("./src/assets/img/social/*.png");
  eleventyConfig.addPassthroughCopy("./src/assets/files/*.pdf");
  
  // Plugin
  eleventyConfig.addPlugin( eleventyNavigation );

  // Libraries
  eleventyConfig.setLibrary('md', md);
    
  //Shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  for (let key in shortcodes) eleventyConfig.addShortcode(key, shortcodes[key]);
  for (let key in asyncShortcodes) eleventyConfig.addAsyncShortcode(key, asyncShortcodes[key]); 

  return {
    dir: {
      input: "src",
      output: "public",
      },
    markdownTemplateEngine: "njk",
    templateFormats: ["md"," njk"]
    };
};