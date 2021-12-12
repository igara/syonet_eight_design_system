import path from 'path';
import fs from 'fs';

const colors = {
  red: '\u001b[31m',
  green: '\u001b[32m',
};

const componentPathKeyValue = process.argv.join().match(/path=\S*/);
if (!(componentPathKeyValue && componentPathKeyValue.length)) {
  console.error(`${colors.red}
not found 'paths=xxxxx'

example)
yarn templates path=projects/syonet_eight_design_system/src/components/xxxx
or
yarn templates path=projects/syonet_eight_www/components/xxxx
`);
  process.exit(-1);
}

const componentPath = componentPathKeyValue[0].replace('path=', '');

const projects = {
  syonet_eight_design_system: {
    paths: {
      components: 'projects/syonet_eight_design_system/src/components',
    },
    title: 'design_system',
  },
  syonet_eight_www: {
    paths: {
      components: 'projects/syonet_eight_www/components',
    },
    title: 'www',
  },
};

const projectNames = Object.keys(projects);
const foundProjectName = projectNames.find((projectName) => {
  const projectComponentPath = projects[projectName].paths.components;
  return new RegExp(projectComponentPath).test(componentPath);
});

if (!foundProjectName) {
  console.error(`${colors.red}
not found projects 'paths=xxxxx'

example)
yarn templates path=projects/syonet_eight_design_system/src/components/xxxx
or
yarn templates path=projects/syonet_eight_www/components/xxxx
`);
  process.exit(-1);
}

const camelCase = (str: string) => {
  const s = str.charAt(0).toLowerCase() + str.slice(1);
  return s.replace(/[-_](.)/g, (_, group1) => {
    return group1.toUpperCase();
  });
};

const pascalCase = (str: string) => {
  var camel = camelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
};

const dirNames = componentPath.split('/');
const filename = dirNames[dirNames.length - 1];
const componentNames = {
  filename,
  varname: pascalCase(filename),
};

const componentFullPath = path.resolve(__dirname, `../../../../${componentPath}`);

fs.mkdirSync(componentFullPath, {
  recursive: true,
});

console.info(`${colors.green}
mkdir ${componentFullPath}`);

const templates = {
  'index.ts': fs
    .readFileSync(path.resolve(__dirname, './templates/index.ts'))
    .toString()
    .replace(/xxxxx/g, componentNames.filename)
    .replace(/XXXXX/g, componentNames.varname),
  'xxxxx.stories.mdx': fs
    .readFileSync(path.resolve(__dirname, './templates/xxxxx.stories.mdx'))
    .toString()
    .replace(/xxxxx/g, componentNames.filename)
    .replace(/XXXXX/g, componentNames.varname)
    .replace(
      /TITLE/g,
      `${projects[foundProjectName].title}${componentPath
        .replace(projects[foundProjectName].paths.components, '')
        .replace(new RegExp(`/${componentNames.filename}`), '')}`,
    ),
  'xxxxx.styles.ts': fs
    .readFileSync(path.resolve(__dirname, './templates/xxxxx.styles.ts'))
    .toString()
    .replace(/xxxxx/g, componentNames.filename)
    .replace(/XXXXX/g, componentNames.varname),
  'xxxxx.tsx': fs
    .readFileSync(path.resolve(__dirname, './templates/xxxxx.tsx'))
    .toString()
    .replace(/xxxxx/g, componentNames.filename)
    .replace(/XXXXX/g, componentNames.varname),
  '__tests__/xxxxx/xxxxx.test.tsx': fs
    .readFileSync(path.resolve(__dirname, './templates/__tests__/xxxxx/xxxxx.test.tsx'))
    .toString()
    .replace(/xxxxx/g, componentNames.filename)
    .replace(/XXXXX/g, componentNames.varname),
};

fs.mkdirSync(`${componentFullPath}/__tests__/${componentNames.filename}`, {
  recursive: true,
});
fs.writeFileSync(
  `${componentFullPath}/__tests__/${componentNames.filename}/${componentNames.filename}.test.tsx`,
  templates['__tests__/xxxxx/xxxxx.test.tsx'],
);
fs.writeFileSync(`${componentFullPath}/index.ts`, templates['index.ts']);
fs.writeFileSync(
  `${componentFullPath}/${componentNames.filename}.stories.mdx`,
  templates['xxxxx.stories.mdx'],
);
fs.writeFileSync(
  `${componentFullPath}/${componentNames.filename}.styles.ts`,
  templates['xxxxx.styles.ts'],
);
fs.writeFileSync(
  `${componentFullPath}/${componentNames.filename}.tsx`,
  templates['xxxxx.tsx'],
);

console.info(`${colors.green}
writeFile ${componentFullPath}/__tests__/${componentNames.filename}/${componentNames.filename}.test.tsx
writeFile ${componentFullPath}/index.ts
writeFile ${componentFullPath}/${componentNames.filename}.stories.mdx
writeFile ${componentFullPath}/${componentNames.filename}.styles.ts
writeFile ${componentFullPath}/${componentNames.filename}.tsx
`);
