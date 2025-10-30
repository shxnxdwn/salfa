import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { type PageConfig, PageContext } from '../model/context';
import styles from './PageLayout.module.css';

export const HeaderLayout = (props: { config: PageConfig }) => {
  const { title, headerActions } = props.config;

  return (
    <header className={styles.header}>
      <Link to="/products">
        <h1 className={styles.title}>{title}</h1>
      </Link>
      {headerActions && <div className={styles.actions}>{headerActions}</div>}
    </header>
  );
};

export const PageLayout = () => {
  const [config, setConfig] = useState<PageConfig>({ title: '' });

  const contextValue = {
    ...config,
    setPage: setConfig
  };

  return (
    <PageContext.Provider value={contextValue}>
      <div className="container">
        <HeaderLayout config={config} />
        <main>
          <Outlet />
        </main>
      </div>
    </PageContext.Provider>
  );
};
