import fs from 'fs';

const visualizationsData = fs.readFileSync(`${process.cwd()}/src/_data/visualizations_list.json`, 'utf-8')
const visualizations = JSON.parse(visualizationsData);

const websData = fs.readFileSync(`${process.cwd()}/src/_data/websites_list.json`, 'utf-8')
const websites = JSON.parse(websData);

export default {
    "visualizations":visualizations, 
    "websites":websites
};