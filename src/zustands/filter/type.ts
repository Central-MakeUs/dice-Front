export type Filtering = {
  region: {
    region: string;
    detail: string[];
  };
  price: {
    minPrice: number;
    maxPrice: number;
  };
  numOfPeople: number;
  sortType: string;
};
