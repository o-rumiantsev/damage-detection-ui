import React from 'react';
import { Provider } from 'react-redux';
import { Map } from 'src/components/Map';
import { store } from 'src/store';
import { FeaturesContext } from 'src/store/features';
import { useGetFeaturesQuery } from 'src/services/features';
import styles from './App.module.css';

export const App = () => {
  const { data, isLoading, isSuccess } = useGetFeaturesQuery();

  return (
    <div className={styles.container}>
      <Provider store={store}>
        <FeaturesContext.Provider value={{ data, isLoading, isSuccess }}>
          <Map />
        </FeaturesContext.Provider>
      </Provider>
    </div>
  );
};
