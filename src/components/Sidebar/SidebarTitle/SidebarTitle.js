import React from 'react';
import PropTypes from 'prop-types';

import styles from './SidebarTitle.css';

const SidebarTitle = props => {
  return (
    <div className={styles.sidebarTitle}>
      <div className={styles.sidebarTitleText}>{props.title}</div>
      {
        props.icon &&
        <div className={styles.sidebarTitleIcon} onClick={props.iconAction}>{props.icon}</div>
      }
      <div>
      </div>
    </div>
  );
};

SidebarTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  iconAction: PropTypes.func,
};

export default SidebarTitle;
