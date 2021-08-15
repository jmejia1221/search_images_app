import React, { FC } from "react";

// components > Modules
import SearchImages from "../components/modules/SearchImages";

// Styles
import styles from './App.module.scss';

const App: FC = () => {
  return (
      <div className={styles.App}>
          <SearchImages />
      </div>
  );
}

export default App;
