import { create } from 'zustand';

import { Filtering } from './type';

// 필터링 상태 관리 store
export const useFilteringStore = create<{
  filtering: Filtering;
  setRegion: (region: string, detail: string[]) => void;
  setMinPrice: (minPrice: number) => void;
  setMaxPrice: (maxPrice: number) => void;
  setMinNumOfPeople: (minNum: number) => void;
  setMaxNumOfPeople: (maxNum: number) => void;
  setSortType: (sortType: string) => void;
  clearFiltering: () => void;
}>((set) => ({
  filtering: {
    region: {
      region: '',
      detail: [],
    },
    price: {
      minPrice: 0,
      maxPrice: 300000,
    },
    numOfPeople: {
      minNumOfPeople: 0,
      maxNumOfPeople: 100,
    },
    sortType: '',
  },
  setRegion: (region, detail) =>
    set((state) => ({
      filtering: {
        ...state.filtering,
        region: { region, detail },
      },
    })),
  setMinPrice: (minPrice) =>
    set((state) => ({
      filtering: {
        ...state.filtering,
        price: { ...state.filtering.price, minPrice },
      },
    })),
  setMaxPrice: (maxPrice) =>
    set((state) => ({
      filtering: {
        ...state.filtering,
        price: { ...state.filtering.price, maxPrice },
      },
    })),
  setMinNumOfPeople: (minNum) =>
    set((state) => ({
      filtering: {
        ...state.filtering,
        numOfPeople: { ...state.filtering.numOfPeople, minNumOfPeople: minNum },
      },
    })),
  setMaxNumOfPeople: (maxNum) =>
    set((state) => ({
      filtering: {
        ...state.filtering,
        numOfPeople: { ...state.filtering.numOfPeople, maxNumOfPeople: maxNum },
      },
    })),
  setSortType: (sortType) =>
    set((state) => ({
      filtering: {
        ...state.filtering,
        sortType,
      },
    })),
  clearFiltering: () =>
    set({
      filtering: {
        region: {
          region: '',
          detail: [],
        },
        price: {
          minPrice: 0,
          maxPrice: 300000,
        },
        numOfPeople: {
          minNumOfPeople: 0,
          maxNumOfPeople: 100,
        },
        sortType: '',
      },
    }),
}));
