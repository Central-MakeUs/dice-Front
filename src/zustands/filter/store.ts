import { create } from 'zustand';

import { Filtering } from './type';

// 필터링 상태 관리 store
export const useFilteringStore = create<{
  filtering: Filtering;
  setRegion: (region: string, detail: string[]) => void;
  setMinPrice: (minPrice: number) => void;
  setMaxPrice: (maxPrice: number) => void;
  setNumOfPeople: (num: number) => void;
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
    numOfPeople: 0,
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
  setNumOfPeople: (num) =>
    set((state) => ({
      filtering: {
        ...state.filtering,
        numOfPeople: num,
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
        numOfPeople: 0,
        sortType: '',
      },
    }),
}));
