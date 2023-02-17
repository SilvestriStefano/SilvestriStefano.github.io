const fs = require('fs');

const talksData = fs.readFileSync(`${process.cwd()}/src/_data/talk_list.json`, 'utf-8')
const talks = JSON.parse(talksData);

const postersData = fs.readFileSync(`${process.cwd()}/src/_data/poster_list.json`, 'utf-8')
const posters = JSON.parse(postersData);

const pubData = fs.readFileSync(`${process.cwd()}/src/_data/publication_list.json`, 'utf-8')
const publications = JSON.parse(pubData);

const awardsData = fs.readFileSync(`${process.cwd()}/src/_data/awards_list.json`, 'utf-8')
const awards = JSON.parse(awardsData);

const maths={"talks":talks,"posters":posters,"publications":publications,"awards":awards};

module.exports = maths;