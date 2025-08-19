export type CATEGORYTYPE = {
  name: string;
  image: string;
  starting: number;
  Packages: PACKAGETYPE[];
};

export type PACKAGETYPE = {
  name: string;
  image: string;
  starting: number;
  days: number;
};
