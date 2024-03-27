import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { IRefrigeratorType, IIngredientType } from '@/type/refrigeratorTypes';

const useRefrigeratorStore = create(
  persist<IRefrigeratorType>(
    (set, get) => ({
      refrigerator: [
        {
          id: 1,
          name: '사과',
          image: '',
          category: {
            id: 2,
            name: '과일',
          },
        },
        {
          id: 2,
          name: '오렌지',
          image: '',
          category: {
            id: 2,
            name: '과일',
          },
        },
        {
          id: 3,
          name: '파파야',
          image: '',
          category: {
            id: 2,
            name: '과일',
          },
        },
        {
          id: 4,
          name: '후추',
          image: '',
          category: {
            id: 7,
            name: '향신료',
          },
        },
        {
          id: 5,
          name: '벌꿀 시럽',
          image: '',
          category: {
            id: 8,
            name: '시럽',
          },
        },
        {
          id: 6,
          name: '사이다',
          image: '',
          category: {
            id: 3,
            name: '음료',
          },
        },
        {
          id: 7,
          name: '앱솔루트 그레이프프루트',
          image: '',
          category: {
            id: 1,
            name: '술',
          },
        },
        {
          id: 8,
          name: '조니워커',
          image: '',
          category: {
            id: 1,
            name: '술',
          },
        },
      ],
      memo: [
        {
          id: 9,
          name: '초코 시럽',
          image: '',
          category: {
            id: 8,
            name: '시럽',
          },
        },
        {
          id: 10,
          name: '콜라',
          image: '',
          category: {
            id: 3,
            name: '음료',
          },
        },
        {
          id: 11,
          name: '앱솔루트 시트러스',
          image: '',
          category: {
            id: 1,
            name: '술',
          },
        },
        {
          id: 12,
          name: '레드 와인',
          image: '',
          category: {
            id: 1,
            name: '술',
          },
        },
      ],
      getFoodList: () => get().refrigerator.filter((i) => i.category.id !== 1),
      getAlcoholList: () =>
        get().refrigerator.filter((i) => i.category.id === 1),
      addRefrList: (ingredient: IIngredientType) =>
        get().refrigerator.push(ingredient),
      removeRefrList: (id: number) =>
        set({ refrigerator: get().refrigerator.filter((i) => i.id !== id) }),
      addMemoList: (ingredient: IIngredientType) => get().memo.push(ingredient),
      removeMemoList: (id: number) =>
        set({ memo: get().memo.filter((i) => i.id !== id) }),
    }),
    {
      name: 'refrigerator',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useRefrigeratorStore;
