import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Divider, message } from 'antd';

import SidebarTitle from './SidebarTitle/SidebarTitle';

import styles from './Sidebar.css';

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      collapsed: false
    };
  }

  toggleCollapse = (collapsed) => {
    const s = this.state;
    s.collapsed = !s.collapsed;
    this.setState(s);
  }

  render() {
    return (
      <Layout.Sider
        collapsed={this.state.collapsed}
        width={styles.sidebarWidth}
        className={styles.sidebar}
      >

        {/* Header */}

        <div className={styles.header}>
          {
            !this.state.collapsed &&
            <div className={styles.headerText}>Hi, Oguz</div>
          }
          <div className={styles.headerIcon} onClick={this.toggleCollapse}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </div>
        </div>

        <Divider style={{ marginTop: 0 }} className={styles.divider} />

        <Menu
          theme="light"
          mode="inline"
          className={styles.menu}
          inlineCollapsed={this.state.collapsed}>

          {/* Components */}

          <Menu.Item key="entities">
            <Icon type="profile" />
            <span className="nav-text">Entities</span>
          </Menu.Item>

          <Menu.Item key="collections">
            <Icon type="appstore-o" />
            <span className="nav-text">Collections</span>
          </Menu.Item>

          <Menu.Item key="variables">
            <Icon type="book" />
            <span className="nav-text">Variables</span>
          </Menu.Item>

          <Menu.Item key="automate">
            <Icon type="setting" />
            <span className="nav-text">Automate</span>
          </Menu.Item>

          <Divider className={styles.divider} />

          {
            !this.state.collapsed &&
            <SidebarTitle
              title="Views"
              icon={<Icon type="plus" />}
              iconAction={() => { message.info('Adding new view'); }}
            />
          }

          {/* Dashboards */}

          <Menu.Item key="i1">
            <Icon type="picture" />
            <span className="nav-text">Calorie Tracker</span>
          </Menu.Item>

          <Menu.SubMenu
            key="s1"
            title={
              <span>
                <Icon type="folder" />
                <span>Side Projects</span>
              </span>
            }
          >

            <Menu.Item key="i2">
              <Icon type="picture" />
              <span className="nav-text">Clouds Against Humanity</span>
            </Menu.Item>

            <Menu.Item key="i3">
              <Icon type="picture" />
              <span className="nav-text">Track.ist</span>
            </Menu.Item>

            <Menu.SubMenu
              key="s1s1"
              title={
                <span>
                  <Icon type="folder" />
                  <span>School</span>
                </span>
              }
            >

              <Menu.Item key="s1d1s1">
                <Icon type="picture" />
                <span className="nav-text">School Works</span>
              </Menu.Item>

              <Menu.Item key="s1d1s2">
                <Icon type="picture" />
                <span className="nav-text">Group Projects</span>
              </Menu.Item>

            </Menu.SubMenu>

          </Menu.SubMenu>

          <Menu.Item key="d2">
            <Icon type="picture" />
            <span className="nav-text">Email</span>
          </Menu.Item>

          <Menu.Item key="d3">
            <Icon type="picture" />
            <span className="nav-text">Calendar</span>
          </Menu.Item>

        </Menu>

      </Layout.Sider>
    );
  }
}

Sidebar.propTypes = {
  user: PropTypes.object
};

export default Sidebar;
