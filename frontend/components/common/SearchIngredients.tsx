// 'use client';

// import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
// import Tags from '@yaireo/tagify/dist/react.tagify';
// import { getWhitelistFromServer, getValue } from '@/app/api/search/ingredient';
// import styles from './SearchIngredients.module.scss';
// import { ChangeEventData, TagData } from '@yaireo/tagify';

// const baseTagifySettings = {
//   placeholder: '재료를 검색해보세요!',
//   dropdown: {
//     enabled: 0,
//   },
// };

// // this is an example React component which implemenets Tagify within
// // itself. This example is a bit elaborate, to demonstrate what's possible.
// export default function SearchIngredients() {
//   const [keyword, setKeyword] = useState('');
//   const [tagifyProps, setTagifyProps] = useState({});

//   interface responseType {
//     id: string;
//     name: string;
//     image: string;
//     category: {
//       id: string;
//       name: string;
//     };
//   }

//   const handleKeyword = (e: CustomEvent<ChangeEventData<TagData>>) => {
//     // setKeyword(e.target.value);
//     console.log(e);
//   };

//   // on component mount
//   useEffect(() => {
//     setTagifyProps({ loading: true });

//     getWhitelistFromServer(1000).then((response) => {
//       const whitelist: string[] = [];
//       response.map((data: responseType) => whitelist.push(data.name));

//       setTagifyProps((lastProps) => ({
//         ...lastProps,
//         whitelist,
//         showFilteredDropdown: 'a',
//         loading: false,
//       }));
//     });
//   }, []);

//   // merged tagify settings (static & dynamic)
//   const settings = {
//     ...baseTagifySettings,
//     ...tagifyProps,
//   };

//   return (
//     <>
//       <Tags
//         value={keyword}
//         onChange={(e) => handleKeyword(e)}
//         settings={settings}
//         {...tagifyProps}
//         // onDropdownShow={() => console.log('onDropdownShow')}
//         // onDropdownHide={() => console.log('onDropdownHide')}
//         // onDropdownSelect={() => console.log('onDropdownSelect')}
//         // onDropdownScroll={() => console.log('onDropdownScroll')}
//         // onDropdownNoMatch={() => console.log('onDropdownNoMatch')}
//         // onDropdownUpdated={() => console.log('onDropdownUpdated')}
//       />
//     </>
//   );
// }
