import React, { useContext } from 'react';
import { useObserver, useAsObservableSource } from 'mobx-react-lite';

export const useStoreData = (
  context,
  storeSelector,
  dataSelector
) => {
  const value = useContext(context);
  if (!value) {
    throw new Error();
  }
  const store = storeSelector(value);
  return useObserver(() => {
    return dataSelector(store);
  })
}