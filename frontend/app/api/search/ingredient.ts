// do some ajax, get whitelist array of all allowed tags, then set it onto the State
// set "showDropdown" to some value, which will filter the dropdown by that value
const dummy = [
  {
    id: '1',
    name: '스파이스 럼',
    image:
      'https://kr.object.ncloudstorage.com/dalkak/basic/f9512305-d8a9-42c0-bc76-f7b84fcec379.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '2',
    name: '다크 럼(숙성)',
    image:
      'https://kr.object.ncloudstorage.com/dalkak/basic/f9512305-d8a9-42c0-bc76-f7b84fcec379.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '3',
    name: '블루베리 리큐어',
    image:
      'https://kr.object.ncloudstorage.com/dalkak/basic/6786e8b2-814b-40ff-894a-50dd7e42a40a.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '4',
    name: '앱솔루트 큐란트',
    image:
      'https://kr.object.ncloudstorage.com/dalkak/basic/2f1cb4d3-6fb7-4909-8b91-865b7d156c9a.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '5',
    name: '펌킨 스매시',
    image:
      'https://kr.object.ncloudstorage.com/dalkak/basic/6786e8b2-814b-40ff-894a-50dd7e42a40a.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '6',
    name: '멜론 리큐어',
    image:
      'https://kr.object.ncloudstorage.com/dalkak/basic/6786e8b2-814b-40ff-894a-50dd7e42a40a.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '7',
    name: '체리 브랜디',
    image:
      'https://kr.object.ncloudstorage.com/dalkak/basic/e061f653-b609-412b-aa4a-acba46e0a2f6.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '8',
    name: '피노 셰리',
    image:
      'https://kr.object.ncloudstorage.com/dalkak/basic/e061f653-b609-412b-aa4a-acba46e0a2f6.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '9',
    name: '표준량 이상으로 알코올을 함유한 럼',
    image:
      'https://kr.object.ncloudstorage.com/dalkak/basic/f9512305-d8a9-42c0-bc76-f7b84fcec379.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '10',
    name: '로제 와인',
    image:
      'https://kr.object.ncloudstorage.com/dalkak/basic/445811af-750d-49fc-bc2d-29b02d20c5dc.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
];

export const serverDelay = (func: () => void) => (duration: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(func());
    }, duration || 1000);
  });

export const getWhitelistFromServer = serverDelay(() => dummy);

export const getValue = serverDelay(() => ['foo', 'bar', 'baz']);
