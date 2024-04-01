import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { IRefrigeratorType, IIngredientType } from '@/type/refrigeratorTypes';

// const dummyRefr = [
//   {
//     id: 308,
//     name: '라임 주스',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/d3eecafb-5559-476d-bf05-4236ea07dae5.png',
//     category: {
//       id: 3,
//       name: 'beverage',
//     },
//   },
//   {
//     id: 390,
//     name: '직접 착즙한 라임주스',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/d3eecafb-5559-476d-bf05-4236ea07dae5.png',
//     category: {
//       id: 3,
//       name: 'beverage',
//     },
//   },
//   {
//     id: 514,
//     name: '라임즙',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/da399a39-e5bb-453f-b71d-06e7f5053141.png',
//     category: {
//       id: 7,
//       name: 'spice',
//     },
//   },
//   {
//     id: 515,
//     name: '신선한 라임즙',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/da399a39-e5bb-453f-b71d-06e7f5053141.png',
//     category: {
//       id: 7,
//       name: 'spice',
//     },
//   },
//   {
//     id: 539,
//     name: '라임 코디얼',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/ccb9f93b-682a-4876-b39b-099efe89b0ae.png',
//     category: {
//       id: 8,
//       name: 'syrup',
//     },
//   },
//   {
//     id: 68,
//     name: '하드 사이다',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/732b6ef8-0b87-40c4-8da0-e1ee3a84f444.png',
//     category: {
//       id: 1,
//       name: 'alcohol',
//     },
//   },
//   {
//     id: 72,
//     name: '레포사도 데킬라',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/d38947c2-6a15-4890-acee-a179ffcb6eb0.png',
//     category: {
//       id: 1,
//       name: 'alcohol',
//     },
//   },
//   {
//     id: 176,
//     name: '사케',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/d2ab905a-1a60-48e6-8f73-8dce0bebad58.png',
//     category: {
//       id: 1,
//       name: 'alcohol',
//     },
//   },
//   {
//     id: 191,
//     name: '앱솔루트 베리 아사이',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/2f1cb4d3-6fb7-4909-8b91-865b7d156c9a.png',
//     category: {
//       id: 1,
//       name: 'alcohol',
//     },
//   },
//   {
//     id: 197,
//     name: '룩사르도 마라스키노',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/6786e8b2-814b-40ff-894a-50dd7e42a40a.png',
//     category: {
//       id: 1,
//       name: 'alcohol',
//     },
//   },
//   {
//     id: 199,
//     name: '마라스키노 룩사르도',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/6786e8b2-814b-40ff-894a-50dd7e42a40a.png',
//     category: {
//       id: 1,
//       name: 'alcohol',
//     },
//   },
//   {
//     id: 223,
//     name: '카샤사',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/6786e8b2-814b-40ff-894a-50dd7e42a40a.png',
//     category: {
//       id: 1,
//       name: 'alcohol',
//     },
//   },
//   {
//     id: 276,
//     name: '사과',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/cb86f720-74fc-4497-8d4b-a703de8088e3.png',
//     category: {
//       id: 2,
//       name: 'fruit',
//     },
//   },
//   {
//     id: 259,
//     name: '레몬',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/46e98c37-db68-442f-b533-0cebbc9224de.png',
//     category: {
//       id: 2,
//       name: 'fruit',
//     },
//   },
//   {
//     id: 302,
//     name: '레몬 아이스티',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/07baa350-67fa-435a-86a9-eb70411c71ca.png',
//     category: {
//       id: 3,
//       name: 'beverage',
//     },
//   },
//   {
//     id: 305,
//     name: '비터 레몬',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/60783475-b19a-4c61-9e99-3c72c8a31d94.png',
//     category: {
//       id: 3,
//       name: 'beverage',
//     },
//   },
//   {
//     id: 339,
//     name: '레몬 토닉 워터',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/97b9e686-a73d-4b54-9fd2-fd496dcf5d85.png',
//     category: {
//       id: 3,
//       name: 'beverage',
//     },
//   },
//   {
//     id: 342,
//     name: '레몬에이드',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/60783475-b19a-4c61-9e99-3c72c8a31d94.png',
//     category: {
//       id: 3,
//       name: 'beverage',
//     },
//   },
//   {
//     id: 356,
//     name: '레몬 주스',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/60783475-b19a-4c61-9e99-3c72c8a31d94.png',
//     category: {
//       id: 3,
//       name: 'beverage',
//     },
//   },
//   {
//     id: 425,
//     name: '레몬 커드',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/9da8aaa8-b2d0-4470-8f58-4e50a76222d7.png',
//     category: {
//       id: 4,
//       name: 'food',
//     },
//   },
//   {
//     id: 431,
//     name: '레몬 아이스캔디',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/46e98c37-db68-442f-b533-0cebbc9224de.png',
//     category: {
//       id: 4,
//       name: 'food',
//     },
//   },
//   {
//     id: 452,
//     name: '레몬그라스',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/858fd3ac-d930-4d90-bb92-572df96c3a96.png',
//     category: {
//       id: 5,
//       name: 'vegetable',
//     },
//   },
//   {
//     id: 465,
//     name: '말린 레몬',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/46e98c37-db68-442f-b533-0cebbc9224de.png',
//     category: {
//       id: 5,
//       name: 'vegetable',
//     },
//   },
//   {
//     id: 513,
//     name: '레몬즙',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/46e98c37-db68-442f-b533-0cebbc9224de.png',
//     category: {
//       id: 7,
//       name: 'spice',
//     },
//   },
//   {
//     id: 529,
//     name: '라임과 레몬그라스 코디얼',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/ccb9f93b-682a-4876-b39b-099efe89b0ae.png',
//     category: {
//       id: 8,
//       name: 'syrup',
//     },
//   },
//   {
//     id: 560,
//     name: '나선형 레몬 껍질',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/ccb9f93b-682a-4876-b39b-099efe89b0ae.png',
//     category: {
//       id: 8,
//       name: 'syrup',
//     },
//   },
//   {
//     id: 576,
//     name: '레몬 껍질',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/9de19058-accb-4fcc-ae52-774f498ffb2f.png',
//     category: {
//       id: 9,
//       name: 'decoration',
//     },
//   },
// ];
// const dummyMemo = [
//   {
//     id: 244,
//     name: '아마로 노니노',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/6786e8b2-814b-40ff-894a-50dd7e42a40a.png',
//     category: {
//       id: 1,
//       name: 'alcohol',
//     },
//   },
//   {
//     id: 249,
//     name: '아로마 비터',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/7b9507b8-42e3-4188-91da-a5bd2dddc4b6.png',
//     category: {
//       id: 1,
//       name: 'alcohol',
//     },
//   },
//   {
//     id: 274,
//     name: '복숭아',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/ce0ba329-441a-468e-9fe1-66d9813bd743.png',
//     category: {
//       id: 2,
//       name: 'fruit',
//     },
//   },
//   {
//     id: 280,
//     name: '아세로라',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/a4127b5b-211b-46e8-92a3-1307df8945f1.png',
//     category: {
//       id: 2,
//       name: 'fruit',
//     },
//   },
//   {
//     id: 281,
//     name: '아보카도',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/ed7d9042-e229-426f-8fd3-b27a858b5181.png',
//     category: {
//       id: 2,
//       name: 'fruit',
//     },
//   },
//   {
//     id: 302,
//     name: '레몬 아이스티',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/07baa350-67fa-435a-86a9-eb70411c71ca.png',
//     category: {
//       id: 3,
//       name: 'beverage',
//     },
//   },
//   {
//     id: 311,
//     name: '애플 아이스티',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/07baa350-67fa-435a-86a9-eb70411c71ca.png',
//     category: {
//       id: 3,
//       name: 'beverage',
//     },
//   },
//   {
//     id: 327,
//     name: '아이스 티',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/07baa350-67fa-435a-86a9-eb70411c71ca.png',
//     category: {
//       id: 3,
//       name: 'beverage',
//     },
//   },
//   {
//     id: 340,
//     name: '박하 아이스티',
//     image:
//       'https://kr.object.ncloudstorage.com/dalkak/basic/07baa350-67fa-435a-86a9-eb70411c71ca.png',
//     category: {
//       id: 3,
//       name: 'beverage',
//     },
//   },
// ];

const useRefrigeratorStore = create(
  persist<IRefrigeratorType>(
    (set, get) => ({
      // refgList: [...dummyRefr],
      // memoList: [...dummyMemo],
      refgList: [],
      memoList: [],
      addRefrList: (ingredient: IIngredientType) => {
        if (get().refgList.includes(ingredient)) {
          return;
        }
        const updatedList = [...get().refgList, ingredient];
        set({ refgList: updatedList });
      },
      removeRefrList: (ingredient: IIngredientType) => {
        const updatedList = get().refgList.filter((i) => i !== ingredient);
        set({ refgList: updatedList });
      },
      addMemoList: (ingredient: IIngredientType) => {
        if (get().memoList.includes(ingredient)) {
          return;
        }
        const updatedList = [...get().memoList, ingredient];
        set({ memoList: updatedList });
      },
      removeMemoList: (ingredient: IIngredientType) => {
        const updatedList = get().memoList.filter((i) => i !== ingredient);
        set({ memoList: updatedList });
      },
    }),
    {
      name: 'refrigerator',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useRefrigeratorStore;
