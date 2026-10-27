const COMBINING = {
  acute: "́", grave: "̀", circ: "̂", tilde: "̃", uml: "̈",
  cedil: "̧", ring: "̊", caron: "̌", macr: "̄", breve: "̆",
  dot: "̇", dblac: "̋", ogon: "̨",
};
const NAMED = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", ldquo: "“", rdquo: "”",
  szlig: "ß", aelig: "æ", AElig: "Æ", oelig: "œ", OElig: "Œ", oslash: "ø", Oslash: "Ø",
  lstrok: "ł", Lstrok: "Ł", dstrok: "đ", Dstrok: "Đ", inodot: "ı", eth: "ð", thorn: "þ",
};
 
function decodeEntities(s = "") {
  return String(s)
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&([A-Za-z])(acute|grave|circ|tilde|uml|cedil|ring|caron|macr|breve|dot|dblac|ogon);/g,
      (_, letter, accent) => (letter + COMBINING[accent]).normalize("NFC"))
    .replace(/&(\w+);/g, (m, name) => NAMED[name] ?? m);
}
 
const ACCENT_CMD = {
  "́": "'", "̀": "`", "̂": "^", "̃": "~", "̈": '"',
  "̧": "c", "̊": "r", "̌": "v", "̄": "=", "̆": "u",
  "̇": ".", "̋": "H", "̨": "k",
};
const LETTERS = {
  "ß": "{\\ss}", "æ": "{\\ae}", "Æ": "{\\AE}", "œ": "{\\oe}", "Œ": "{\\OE}",
  "ø": "{\\o}", "Ø": "{\\O}", "ł": "{\\l}", "Ł": "{\\L}", "đ": "{\\dj}", "Đ": "{\\DJ}",
  "ı": "{\\i}", " ": "~", "–": "--", "—": "---",
  "‘": "`", "’": "'", "“": "``", "”": "''",
};
 
function unicodeToLatex(s) {
  return s
    .normalize("NFD")
    // letter followed by one or more combining marks
    .replace(/([A-Za-z])([̀-ͯ]+)/g, (_, base, marks) => {
      let out = base;
      for (const m of marks) {
        const cmd = ACCENT_CMD[m];
        if (!cmd) continue;
        out = /[a-z]/i.test(cmd) ? `\\${cmd}{${out}}` : `\\${cmd}${out}`;
      }
      return `{${out}}`;
    })
    .replace(/[^\x00-\x7F]/g, (ch) => LETTERS[ch] ?? ch);
}
 
const stripMarkup = (s = "") =>
  String(s)
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/(^|[^*])\*([^*]+)\*/g, "$1$2")
    .replace(/<[^>]+>/g, "")
    .trim();

const toLatex = (s = "") =>
  unicodeToLatex(
    decodeEntities(stripMarkup(s)).replace(/(?<!\\)([&%#])/g, "\\$1")
  );

function titleToLatex(s = "") {
  const text = decodeEntities(stripMarkup(s)).normalize("NFC").replace(/\.\s*$/, "");
  let first = true;
  const protectedText = text
    .split(/(\$[^$]*\$)/)
    .map((part) => {
      if (part.startsWith("$") && part.endsWith("$") && part.length > 1) return part;
      return part.replace(/\p{L}/gu, (ch) => {
        const isFirst = first;
        first = false;
        return !isFirst && /\p{Lu}/u.test(ch) ? `{${ch}}` : ch;
      });
    })
    .join("");
  return unicodeToLatex(protectedText.replace(/(?<!\\)([&%#])/g, "\\$1"));
}

const toAscii = (s = "") =>
  decodeEntities(stripMarkup(s))
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[ß]/g, "ss").replace(/[æÆ]/g, "ae").replace(/[øØ]/g, "o").replace(/[łŁ]/g, "l")
    .toLowerCase().replace(/[^a-z0-9]/g, "");
 
const STOPWORDS = new Set(["a", "an", "the", "on", "of", "in", "for", "and", "to", "some", "with", "from"]);

function citeKey(pub) {
  const firstAuthor = stripMarkup(pub.authors || "").split(/\s+and\s+|,\s*(?=[^,]*\band\b)/)[0];
  const surname = toAscii(firstAuthor.split(",")[0]) || "anon";
  return `${surname}${pub.year || ""}`;
}


export default function bibtex(pub) {
    if (!pub) return "";
    const published = (pub.status=='published');
    let type;
    if (!published) type = 'misc';
    else type = pub.type;
    const fields = [
    ["author", toLatex(pub.authors)],
    ["title", titleToLatex((pub.title))],
  ];
  if (published) {
    fields.push(
      ["journal", toLatex(pub.journal)],
      ["fjournal", toLatex(pub.fjournal)],
      ["volume", pub.volume],
      ["number", pub.number],
      ["pages", pub.pages],
    );
  }
  fields.push(["year", pub.year]);
  if (!published) fields.push(["note", pub.inpreparation ? "In preparation" : "Preprint"]);
  fields.push(["doi", pub.doi]);
  if (pub.preprint && pub.preprint.startsWith('http')) fields.push(["url", pub.preprint]);
  fields.push(["mrnumber", pub.mrnumber], ["zblnumber", pub.zblnumber]);

  const present = fields.filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "");
  const width = Math.max(...present.map(([k]) => k.length));
  const body = present.map(([k, v]) => `\t${k.padEnd(width)} = {${String(v).trim()}}`).join(",\n");
  return `@${type}{${citeKey(pub)},\n${body}\n}`;
}