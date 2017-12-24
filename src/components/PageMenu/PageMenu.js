import React from 'react';
import PropTypes from 'prop-types';

import { Menu, Icon } from 'antd';

import history from '../../config/history';
import styles from './PageMenu.css';

class PageMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  // Menu item clicked
  handleSelect = (e) => {
    history.push(e.key);
  }

  render() {

    const menuItems = [];
    this.props.items.map(i => {
      menuItems.push(
        <Menu.Item className={styles.menuItem} key={i.path}>
          {i.title}
        </Menu.Item>
      );
    });

    return (
      <Menu
        className={styles.menuContainer}
        selectedKeys={[this.props.data.path]}
        mode="horizontal"
        onSelect={this.handleSelect}>
        {menuItems}
      </Menu>
    );
  }
}

PageMenu.propTypes = {
  items: PropTypes.array,
  data: PropTypes.object,
};

export default PageMenu;
