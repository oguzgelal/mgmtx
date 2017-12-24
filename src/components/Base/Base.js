import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';

import { isLoggedIn } from '../../utils/misc';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

import styles from './Base.css';

const Base = (props) => {
  const data = props.data || {};

  const sidebar = ((data.showSidebar && isLoggedIn(props.user)) ?
    <Sidebar user={props.user} data={props.data} /> :
    ''
  );

  const footer = ((data.showFooter) ?
    <Footer /> :
    ''
  );

  return (
    <Layout className={styles.mainLayout}>
      {sidebar}
      <Layout>
        <Layout.Content className={styles.contents}>
          {props.children}
        </Layout.Content>
        {footer}
      </Layout>
    </Layout>
  );
};

Base.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object,
  user: PropTypes.object,
};

export default Base;
