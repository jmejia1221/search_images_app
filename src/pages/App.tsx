import React, { FC } from "react";

// components
import Header from "../components/Header";

// components > Modules
import SearchImages from "../components/modules/SearchImages";

// Styles
import styles from './App.module.scss';

const App: FC = () => {
  return (
      <div className={styles.App}>
          <Header title="Search Images App" />
          <SearchImages />
      </div>
  );
}

export default App;
