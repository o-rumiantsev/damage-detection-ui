import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/store';

export const AppContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <Router>
        <Provider store={store}>{children}</Provider>
      </Router>
    </div>
  );
};
