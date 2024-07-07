import markdownit from 'markdown-it'
import anchor from 'markdown-it-anchor';
import plugin from 'markdown-it-mathjax3';

const md = (() => {

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


    const anchorOptions = {
        permalink: anchor.permalink.linkAfterHeader({
            style: 'visually-hidden',
            assistiveText: title => `Permalink to section titled “${title}”`,
            visuallyHiddenClass: 'sr-only',
            wrapper: ['<div class="header_wrapper">', '</div>']
        })
    };

    const parser = markdownit(options)
        .use(plugin)
        .use(anchor, anchorOptions);
    return parser;
})();

export default md;
