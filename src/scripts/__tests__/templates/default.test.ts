import fs from 'fs';

const spyConsoleError = jest.spyOn(global.console, 'error').mockImplementation();
const spyConsoleInfo = jest.spyOn(global.console, 'info').mockImplementation();
const spyFSWriteFileSync = jest.spyOn(fs, 'writeFileSync').mockImplementation();
const spyFSMkdirSync = jest.spyOn(fs, 'mkdirSync').mockImplementation();
const processArgv = process.argv;

describe('template script', () => {
  beforeEach(() => {
    jest.resetModules();
    spyConsoleError.mockReset();
    spyConsoleInfo.mockReset();
    spyFSWriteFileSync.mockReset();
    spyFSMkdirSync.mockReset();
    process.argv = processArgv;
  });

  test('yarn templateのパス指定がないとき', async () => {
    const templates = (await import('../../templates')) as any;

    const status = templates.default.main();
    expect([
      [
        `\u001b[31m
    not found 'path=xxxxx'

    example)
    yarn templates path=projects/syonet_eight_design_system/src/components/xxxx
    or
    yarn templates path=projects/syonet_eight_www/src/components/xxxx
    `,
      ],
    ]).toEqual(spyConsoleError.mock.calls);
    expect([]).toEqual(spyConsoleInfo.mock.calls);

    expect(1).toBe(status);
  });

  test('yarn templateのパス指定が適切ではないとき', async () => {
    process.argv = [
      'node',
      'projects/syonet_eight_design_system/src/scripts/templates.ts',
      'path=projects/syonet_eight_yyyy/src/components/xxxx/yyyy',
    ];

    const templates = (await import('../../templates')) as any;

    const status = templates.default.main();
    expect([
      [
        `\u001b[31m
    not found projects 'path=projects/syonet_eight_xxxxx'

    example)
    yarn templates path=projects/syonet_eight_design_system/src/components/xxxx
    or
    yarn templates path=projects/syonet_eight_www/src/components/xxxx
    `,
      ],
    ]).toEqual(spyConsoleError.mock.calls);
    expect([]).toEqual(spyConsoleInfo.mock.calls);
    expect(1).toBe(status);
  });

  test('yarn templateのパス指定が適切であるとき（design_system）', async () => {
    process.argv = [
      'node',
      'projects/syonet_eight_design_system/src/scripts/templates.ts',
      'path=projects/syonet_eight_design_system/src/components/hoge/fuga',
    ];

    const templates = (await import('../../templates')) as any;

    const status = templates.default.main();
    expect([]).toEqual(spyConsoleError.mock.calls);
    expect(2).toBe(spyConsoleInfo.mock.calls.length);
    expect(3).toBe(spyFSMkdirSync.mock.calls.length);
    expect(6).toBe(spyFSWriteFileSync.mock.calls.length);
    expect(`import React from 'react';
import TestingLibrary from '@testing-library/react';
import { Fuga } from '../../';

describe('Fuga', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<Fuga />);
    expect(
      '<div><div css="You have tried to stringify object returned from \`css\` function. It isn\\'t supposed to be used directly (e.g. as value of the \`className\` prop), but rather handed to emotion so it can handle it (e.g. as value of \`css\` prop)."></div></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
`).toBe(spyFSWriteFileSync.mock.calls[0][1]);
    expect(`export * from './fuga';
`).toBe(spyFSWriteFileSync.mock.calls[1][1]);
    expect(`import { Meta, Story, Source, Props } from '@storybook/addon-docs';
import withMock from 'storybook-addon-mock';
import { Fuga } from '../';

<Meta title="design_system/hoge/fuga/default" component={Fuga} decorators={[withMock]} />

# design_system/hoge/fuga/default

fuga の説明

<Story
  name="default"
  args={{}}
  parameters={{
    nextRouter: {
      path: '',
      asPath: '',
      query: {},
    },
    mockData: [],
  }}></Story>

<Source>
  <Fuga />
</Source>

<Props story="default" />
`).toBe(spyFSWriteFileSync.mock.calls[2][1]);
    expect(`import { css } from '@emotion/react';

export const styles = {
  fuga: () => css\`\`,
};
`).toBe(spyFSWriteFileSync.mock.calls[3][1]);
    expect(`import React from 'react';
import * as Styles from './fuga.styles';
import { SerializedStyles, css } from '@emotion/react';

interface Props {
  css?: SerializedStyles;
}

export const Fuga: React.FC<Props> = (props) => {
  const attributes = {
    css: css\`
      \${Styles.styles.fuga()}
      \${props.css}
    \`,
  };
  return <div {...attributes}></div>;
};
`).toBe(spyFSWriteFileSync.mock.calls[4][1]);
    expect(`import React from 'react';

export const useXXXState = (flag?: boolean) => {
  return React.useState(flag);
};

export const useXXXCallback = () => {
  return React.useCallback(() => {}, []);
};

export const useXXXEffect = (args: {}) => {
  return React.useEffect(() => {}, [args]);
};
`).toBe(spyFSWriteFileSync.mock.calls[5][1]);
    expect(0).toBe(status);
  });

  test('yarn templateのパス指定が適切であるとき（www）', async () => {
    process.argv = [
      'node',
      'projects/syonet_eight_design_system/src/scripts/templates.ts',
      'path=projects/syonet_eight_www/src/components/hoge/fuga',
    ];

    const templates = (await import('../../templates')) as any;

    const status = templates.default.main();
    expect([]).toEqual(spyConsoleError.mock.calls);
    expect(2).toBe(spyConsoleInfo.mock.calls.length);
    expect(3).toBe(spyFSMkdirSync.mock.calls.length);
    expect(6).toBe(spyFSWriteFileSync.mock.calls.length);
    expect(`import React from 'react';
import TestingLibrary from '@testing-library/react';
import { Fuga } from '../../';

describe('Fuga', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<Fuga />);
    expect(
      '<div><div css="You have tried to stringify object returned from \`css\` function. It isn\\'t supposed to be used directly (e.g. as value of the \`className\` prop), but rather handed to emotion so it can handle it (e.g. as value of \`css\` prop)."></div></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
`).toBe(spyFSWriteFileSync.mock.calls[0][1]);
    expect(`export * from './fuga';
`).toBe(spyFSWriteFileSync.mock.calls[1][1]);
    expect(`import { Meta, Story, Source, Props } from '@storybook/addon-docs';
import withMock from 'storybook-addon-mock';
import { Fuga } from '../';

<Meta title="www/hoge/fuga/default" component={Fuga} decorators={[withMock]} />

# www/hoge/fuga/default

fuga の説明

<Story
  name="default"
  args={{}}
  parameters={{
    nextRouter: {
      path: '',
      asPath: '',
      query: {},
    },
    mockData: [],
  }}></Story>

<Source>
  <Fuga />
</Source>

<Props story="default" />
`).toBe(spyFSWriteFileSync.mock.calls[2][1]);
    expect(`import { css } from '@emotion/react';

export const styles = {
  fuga: () => css\`\`,
};
`).toBe(spyFSWriteFileSync.mock.calls[3][1]);
    expect(`import React from 'react';
import * as Styles from './fuga.styles';
import { SerializedStyles, css } from '@emotion/react';

interface Props {
  css?: SerializedStyles;
}

export const Fuga: React.FC<Props> = (props) => {
  const attributes = {
    css: css\`
      \${Styles.styles.fuga()}
      \${props.css}
    \`,
  };
  return <div {...attributes}></div>;
};
`).toBe(spyFSWriteFileSync.mock.calls[4][1]);
    expect(`import React from 'react';

export const useXXXState = (flag?: boolean) => {
  return React.useState(flag);
};

export const useXXXCallback = () => {
  return React.useCallback(() => {}, []);
};

export const useXXXEffect = (args: {}) => {
  return React.useEffect(() => {}, [args]);
};
`).toBe(spyFSWriteFileSync.mock.calls[5][1]);
    expect(0).toBe(status);
  });
});
