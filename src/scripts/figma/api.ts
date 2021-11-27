import fetch from 'node-fetch';

const fileKey = '0kMl83e8cWChWpnSaTsmfc';

type FigmaNode = {
  id: string;
  name: string;
  children: FigmaNode[];
};

type FigmaFileJson = {
  document: {
    children: FigmaNode[];
  };
};

export const fetchFigmaFile = async (): Promise<FigmaFileJson> => {
  const response = await fetch(`https://api.figma.com/v1/files/${fileKey}`, {
    headers: {
      'X-FIGMA-TOKEN': process.env.FIGMA_API_TOKEN,
    },
  });
  const json = await response.json();

  return json;
};

type SVGFileJson = {
  err: string | null;
  images: {
    [nodeID: string]: string;
  };
};

export const fetchSVGFile = async (nodeID: string): Promise<SVGFileJson> => {
  const response = await fetch(
    `https://api.figma.com/v1/images/${fileKey}/?ids=${nodeID}&format=svg`,
    {
      headers: {
        'X-FIGMA-TOKEN': process.env.FIGMA_API_TOKEN,
      },
    },
  );
  const json = await response.json();

  return json;
};
