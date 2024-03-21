// do some ajax, get whitelist array of all allowed tags, then set it onto the State
// set "showDropdown" to some value, which will filter the dropdown by that value
const dummy = [
  {
    id: '1',
    name: '스파이스 럼',
    image: 'https://cdn-icons-png.flaticon.com/512/2722/2722533.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '2',
    name: '다크 럼(숙성)',
    image: 'https://cdn-icons-png.flaticon.com/512/2722/2722533.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '3',
    name: '블루베리 리큐어',
    image: 'https://cdn-icons-png.flaticon.com/512/2722/2722533.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '4',
    name: '앱솔루트 큐란트',
    image: 'https://cdn-icons-png.flaticon.com/512/2722/2722533.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '5',
    name: '펌킨 스매시',
    image: 'https://cdn-icons-png.flaticon.com/512/2722/2722533.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '6',
    name: '멜론 리큐어',
    image: 'https://cdn-icons-png.flaticon.com/512/2722/2722533.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '7',
    name: '체리 브랜디',
    image: 'https://cdn-icons-png.flaticon.com/512/2722/2722533.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '8',
    name: '피노 셰리',
    image: 'https://cdn-icons-png.flaticon.com/512/2722/2722533.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '9',
    name: '표준량 이상으로 알코올을 함유한 럼',
    image: 'https://cdn-icons-png.flaticon.com/512/2722/2722533.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
  {
    id: '10',
    name: '로제 와인',
    image: 'https://cdn-icons-png.flaticon.com/512/2722/2722533.png',
    category: {
      id: '1',
      name: 'alcohol',
    },
  },
];

export const serverDelay = (func) => (duration) => new Promise((resolve, reject) => setTimeout(() => {
  resolve(func());
}, duration || 1000));

export const getWhitelistFromServer = serverDelay(() => dummy);

export const getValue = serverDelay(() => ['foo', 'bar', 'baz']);
