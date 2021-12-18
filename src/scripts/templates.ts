import path from 'path';
import fs from 'fs';

export const main = () => {
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
    return 1;
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
    not found projects 'paths=projects/syonet_eight_xxxxx'

    example)
    yarn templates path=projects/syonet_eight_design_system/src/components/xxxx
    or
    yarn templates path=projects/syonet_eight_www/components/xxxx
    `);
    return 1;
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
    'stories/default.stories.mdx': fs
      .readFileSync(path.resolve(__dirname, './templates/stories/default.stories.mdx'))
      .toString()
      .replace(/xxxxx/g, componentNames.filename)
      .replace(/XXXXX/g, componentNames.varname)
      .replace(
        /TITLE/g,
        `${projects[foundProjectName].title}${componentPath.replace(
          projects[foundProjectName].paths.components,
          '',
        )}`,
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
    'xxxxx.hooks.ts': fs
      .readFileSync(path.resolve(__dirname, './templates/xxxxx.hooks.ts'))
      .toString(),
    '__tests__/xxxxx/default.test.tsx': fs
      .readFileSync(
        path.resolve(__dirname, './templates/__tests__/xxxxx/default.test.tsx'),
      )
      .toString()
      .replace(/xxxxx/g, componentNames.filename)
      .replace(/XXXXX/g, componentNames.varname),
  };

  fs.mkdirSync(`${componentFullPath}/__tests__/${componentNames.filename}`, {
    recursive: true,
  });
  fs.writeFileSync(
    `${componentFullPath}/__tests__/${componentNames.filename}/default.test.tsx`,
    templates['__tests__/xxxxx/default.test.tsx'],
  );
  fs.writeFileSync(`${componentFullPath}/index.ts`, templates['index.ts']);
  fs.mkdirSync(`${componentFullPath}/stories`, {
    recursive: true,
  });
  fs.writeFileSync(
    `${componentFullPath}/stories/dafault.stories.mdx`,
    templates['stories/default.stories.mdx'],
  );
  fs.writeFileSync(
    `${componentFullPath}/${componentNames.filename}.styles.ts`,
    templates['xxxxx.styles.ts'],
  );
  fs.writeFileSync(
    `${componentFullPath}/${componentNames.filename}.tsx`,
    templates['xxxxx.tsx'],
  );
  fs.writeFileSync(
    `${componentFullPath}/${componentNames.filename}.hooks.ts`,
    templates['xxxxx.hooks.ts'],
  );

  console.info(`${colors.green}
  writeFile ${componentFullPath}/__tests__/${componentNames.filename}/default.test.tsx
  writeFile ${componentFullPath}/index.ts
  writeFile ${componentFullPath}/${componentNames.filename}.stories.mdx
  writeFile ${componentFullPath}/stories/default.styles.ts
  writeFile ${componentFullPath}/${componentNames.filename}.tsx
  writeFile ${componentFullPath}/${componentNames.filename}.hooks.ts
  `);

  return 0;
};

if (process.execArgv.includes('esbuild-register')) {
  // yarnによるnpm script起動想定
  const status = main();
  process.exit(status);
}
