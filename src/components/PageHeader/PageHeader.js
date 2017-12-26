import React from 'react';
import PropTypes from 'prop-types';

import { Button, Input } from 'antd';

import styles from './PageHeader.css';

const PageHeader = props => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        {props.title}
      </div>
      <div className={styles.headerItems}>
        <div className={styles.headerItem}>
          <Input.Search
            placeholder="search"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </div>
        <div className={styles.headerItem}>
          <Button type="default">New</Button>
        </div>

      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHeader;
