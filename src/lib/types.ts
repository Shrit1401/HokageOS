type file = {
  name: string;
  haveContent: boolean;
  isInFolder: boolean;
  content?: string;
  url?: string;
};

type folder = {
  name: string;
  files: file[];
};
