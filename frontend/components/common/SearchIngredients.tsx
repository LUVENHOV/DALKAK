'use client';

import React, { useState, useEffect, useRef } from 'react';
import Tags from '@yaireo/tagify/dist/react.tagify';
import { getWhitelistFromServer, getValue } from './mockServer';
import styles from './SearchIngredients.module.scss';
/// //////////////////////////////////////////////

// Tagify settings object
const baseTagifySettings = {
  placeholder: '재료를 검색해보세요!',
  dropdown: {
    enabled: 0, // always show suggestions dropdown
  },
};

// this is an example React component which implemenets Tagify within
// itself. This example is a bit elaborate, to demonstrate what's possible.
export default function SearchIngredients() {
  const tagifyRef1 = useRef();

  // just a name I made up for allowing dynamic changes for tagify settings on this component
  const [tagifyProps, setTagifyProps] = useState({});
  interface responseType {
    id: string;
    name: string;
    image: string;
    category: {
      id: string;
      name: string;
    };
  }

  // on component mount
  useEffect(() => {
    setTagifyProps({ loading: true });

    getWhitelistFromServer(1000).then((response) => {
      const whitelist: string[] = [];
      response.map((data: responseType) => whitelist.push(data.name));

      setTagifyProps((lastProps) => ({
        ...lastProps,
        whitelist,
        showFilteredDropdown: 'a',
        loading: false,
      }));
    });

    // simulate setting tags value via server request
    getValue(1500).then((response) =>
      setTagifyProps((lastProps) => ({ ...lastProps, defaultValue: response })),
    );

    // simulate state change where some tags were deleted
    setTimeout(
      () =>
        setTagifyProps((lastProps) => ({
          ...lastProps,
          showFilteredDropdown: false,
        })),
      1500,
    );
  }, []);

  // merged tagify settings (static & dynamic)
  const settings = {
    ...baseTagifySettings,
    ...tagifyProps,
  };

  // const onChange = useCallback((e) => {
  //   console.log('CHANGED:', e.detail.value);
  // }, []);

  // access Tagify internal methods example:
  // const clearAll = () => {
  //   tagifyRef1.current && tagifyRef1.current.removeAllTags;
  // };

  // must update Tagify's value according to the re-ordered nodes in the DOM

  return (
    <>
      <button type="button" className={styles.clearAllBtn}>
        Clear All
      </button>
      <Tags
        tagifyRef={tagifyRef1}
        settings={settings}
        // defaultValue="a,b,c"
        {...tagifyProps}
        // onDropdownShow={() => console.log('onDropdownShow')}
        // onDropdownHide={() => console.log('onDropdownHide')}
        // onDropdownSelect={() => console.log('onDropdownSelect')}
        // onDropdownScroll={() => console.log('onDropdownScroll')}
        // onDropdownNoMatch={() => console.log('onDropdownNoMatch')}
        // onDropdownUpdated={() => console.log('onDropdownUpdated')}
      />
    </>
  );
}
