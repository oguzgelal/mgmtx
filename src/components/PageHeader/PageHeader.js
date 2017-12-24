import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageHeader.css';

const PageHeader = props => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        {props.title}
      </div>
      <div className={styles.headerButtons}>
        {
          /*
            <div className={styles.headerButton}>Button1</div>
            <div className={styles.headerButton}>Button2</div>
            <div className={styles.headerButton}>Button3</div>
          */
        }

      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHeader;
