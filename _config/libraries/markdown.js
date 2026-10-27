import markdownit from 'markdown-it'
import anchor from 'markdown-it-anchor';
import math from "markdown-it-math/temml";
import attr from 'markdown-it-attrs';

const LINK_ICON =' <svg aria-hidden="true" focusable="false" width="18px" height="18px"><use href="#_link"></use></svg>';

function linkIcons(md) {
  const defaultClose =
    md.renderer.rules.link_close ||
    ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

  md.renderer.rules.link_close = (tokens, idx, options, env, self) => {
    let open = idx - 1;
    while (open >= 0 && tokens[open].type !== "link_open") open--;
    const link = tokens[open];

    const isPermalink = (link?.attrGet("class") || "").split(" ").includes("header-anchor");
    const isBareUrl = link?.info === "auto";

    const icon = link && !isPermalink && !isBareUrl ? LINK_ICON : "";
    return icon + defaultClose(tokens, idx, options, env, self);
  };
}

const BLOCK_TAGS =
  "address|article|aside|blockquote|details|dialog|dd|div|dl|dt|fieldset|figcaption|figure|" +
  "footer|form|h[1-6]|header|hgroup|hr|li|main|nav|ol|p|pre|section|summary|table|tbody|td|" +
  "tfoot|th|thead|tr|ul";
const STARTS_WITH_BLOCK_TAG = new RegExp(`^<\\/?(?:${BLOCK_TAGS})\\b`, "i");

// Paragraphs that are really HTML blocks: render their Markdown, but drop the <p> wrapper
function htmlParagraphs(md) {
  md.core.ruler.push("html_paragraphs", (state) => {
    const t = state.tokens;
    for (let i = 0; i < t.length - 2; i++) {
      if (t[i].type !== "paragraph_open" || t[i + 1].type !== "inline") continue;
      if (!STARTS_WITH_BLOCK_TAG.test(t[i + 1].content)) continue;
      t[i].hidden = true;
      t[i + 2].hidden = true;
    }
  });
}

const md = (() => {

    const options = {
        html: true,
        typographer: true,
        linkify: true
    };

    // const MathJaxConfig = {
    //   tex: {
    //     packages: ['base', 'ams', 'amssymb' ,'boldsymbol', 'newcommand', 'unicode', 'color', 'enclose'], // extensions to use
    //     tags: "ams",
    //   }
    // };
    const mathOptions = {
        inlineDelimiters: ["$", ["$`", "`$"]],
        inlineAllowWhiteSpacePadding: false,
        blockDelimiters: "$$"
    };


    const anchorOptions = {
        permalink: anchor.permalink.linkAfterHeader({
            style: 'visually-hidden',
            assistiveText: title => `Permalink to section titled “${title}”`,
            visuallyHiddenClass: 'sr-only',
            symbol: '🔗',
            wrapper: ['<div class="header_wrapper">', '</div>']
        })
    };

    const parser = markdownit(options)
        .use(math, mathOptions)
        .use(anchor, anchorOptions)
		.use(attr)
        .use(linkIcons)
        .use(htmlParagraphs);
    return parser;
})();

export default md;
