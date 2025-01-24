export type Filtering = {
  region: {
    region: string;
    detail: string[];
  };
  price: {
    minPrice: number;
    maxPrice: number;
  };
  numOfPeople: {
    minNumOfPeople: number;
    maxNumOfPeople: number;
  };
  sortType: string;
};
