import dotenv from 'dotenv';
import path from 'path';
import fetch from 'node-fetch';
import fs from 'fs';
import util from 'util';
import * as api from './figma/api';

const dotenvFilePath = path.resolve(__dirname, '../../../../.env');

const targetSVGImportPageNames = [
  // SVGとしてインポートしたいpageを指定する
  'icons',
];

const colors = {
  red: '\u001b[31m',
  green: '\u001b[32m',
};

if (!fs.existsSync(dotenvFilePath)) {
  console.error(`${colors.red}
cp .env.sample .env

edit .env file
`);
  process.exit(-1);
}

dotenv.config({ path: dotenvFilePath });

if (!process.env.FIGMA_API_TOKEN) {
  console.error(`${colors.red}
edit .env file

SET FIGMA_API_TOKEN
`);
  process.exit(-1);
}

const componentsPath = path.resolve(__dirname, '../components');

const streamPipeline = util.promisify(require('stream').pipeline);

const main = async () => {
  const figmaFileeJson = await api.fetchFigmaFile();

  figmaFileeJson.document.children.forEach((page) => {
    if (targetSVGImportPageNames.includes(page.name)) {
      page.children.forEach(async (node) => {
        fs.mkdirSync(path.resolve(componentsPath, page.name), { recursive: true });
        fs.mkdirSync(path.resolve(componentsPath, `${page.name}/${node.name}`), {
          recursive: true,
        });

        const svgFileJSON = await api.fetchSVGFile(node.id);
        if (svgFileJSON.err) {
          console.error(`${colors.red}
Figma Server Error?
          `);
          process.exit(-1);
        }

        const downloadSVGURL = svgFileJSON.images[node.id];
        if (!downloadSVGURL) {
          console.error(`${colors.red}
undefind svg file?
                  `);
          process.exit(-1);
        }

        const response = await fetch(downloadSVGURL);

        const svgFilePath = path.resolve(
          componentsPath,
          `${page.name}/${node.name}/${node.name}.svg`,
        );
        await streamPipeline(response.body, fs.createWriteStream(svgFilePath));

        console.info(`${colors.green} write: ${svgFilePath}`);
      });
    }
  });
};

(async () => {
  await main();
})();
