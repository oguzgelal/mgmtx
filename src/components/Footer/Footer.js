import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';

import styles from './Footer.css';

const Footer = props => {
  return (
    <Layout.Footer className={styles.footer}>
      MgmtX ©2017 Created by Oguz Gelal
    </Layout.Footer>
  );
};

Footer.propTypes = {
};

export default Footer;
