import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { IRefrigeratorType } from '@/type/refrigeratorTypes';

const authorization =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJpYXQiOjE3MTE3ODk1MDgsImV4cCI6MTcxMjE0OTUwOCwiaWQiOjN9.rxVLMICLt23rj4vV_btj7QtObPgxszooG-rzQG_et3A';

const useRefrigeratorStore = create(
  persist<IRefrigeratorType>(
    (set, get) => ({
      refgList: [],
      memoList: [],
      setRefgList: async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/refrigerator`,
          {
            headers: { authorization },
          },
        );
        const json = await res.json();
        set({ refgList: await json.data });
      },
      setMemoList: async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/basket`, {
          headers: { authorization },
        });
        const json = await res.json();
        set({ memoList: await json.data });
      },
      addRefrList: (id: number) => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/refrigerator`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization,
          },
          body: JSON.stringify({
            ingredient_id: id,
          }),
        })
          .then((res) => res.json())
          .then((json) => {
            if (json.code === 201) {
              useRefrigeratorStore.getState().setRefgList();
            }
          });
      },
      removeRefrList: (id: number) => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/refrigerator/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            authorization,
          },
        })
          .then((res) => res.json())
          .then((json) => {
            if (json.code === 200) {
              useRefrigeratorStore.getState().setRefgList();
            }
          });
      },
      addMemoList: (id: number) => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/basket`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization,
          },
          body: JSON.stringify({
            ingredient_id: id,
          }),
        })
          .then((res) => res.json())
          .then((json) => {
            if (json.code === 201) {
              useRefrigeratorStore.getState().setMemoList();
            }
          });
      },
      removeMemoList: (id: number) => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/basket/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            authorization,
          },
        })
          .then((res) => res.json())
          .then((json) => {
            if (json.code === 200) {
              useRefrigeratorStore.getState().setMemoList();
            }
          });
      },
      memoToRefr: async (id: number) => {
        useRefrigeratorStore.getState().addRefrList(id);
        useRefrigeratorStore.getState().removeMemoList(id);
        useRefrigeratorStore.getState().setRefgList();
        useRefrigeratorStore.getState().setMemoList();
      },

      //   const res = await fetch(
      //     `${process.env.NEXT_PUBLIC_BASE_URL}/refrigerator`,
      //     {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //         authorization,
      //       },
      //       body: JSON.stringify({
      //         ingredient_id: id,
      //       }),
      //     },
      //   );
      //   const json = res.json();
      //   if ((await json).code === 200) {
      //     const resDelete = await fetch(
      //       `${process.env.NEXT_PUBLIC_BASE_URL}/basket/${id}`,
      //       {
      //         method: 'DELETE',
      //         headers: {
      //           'Content-Type': 'application/json',
      //           authorization,
      //         },
      //       },
      //     );
      //     const jsonDelete = await resDelete.json();
      //     if ((await jsonDelete).code === 200) {
      //       // const updatedList = [...get().refgList, ingredient];
      //       // set({ refgList: updatedList });
      //     }
      //   }
      // },
      refrToMemo: async (id: number) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/basket`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization,
          },
          body: JSON.stringify({
            ingredient_id: id,
          }),
        });
        const json = await res.json();
        if (json.code === 200) {
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/refrigerator/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              authorization,
            },
          });
        }
      },
    }),
    {
      name: 'refrigerator',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useRefrigeratorStore;
