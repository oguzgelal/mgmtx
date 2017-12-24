import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, message } from 'antd';

import history from '../../config/history';
import SidebarTitle from './SidebarTitle/SidebarTitle';

import styles from './Sidebar.css';

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      collapsed: false,
      items: [
        {
          title: 'Entities',
          path: '/entities',
          icon: 'profile',
        },
        {
          title: 'Collections',
          path: '/collections',
          icon: 'appstore-o',
        },
        {
          title: 'Values',
          path: '/values',
          icon: 'book',
        },
        {
          title: 'Automate',
          path: '/automate',
          icon: 'setting',
        },
      ],

      dashboards: [
        {
          id: 'calorie-tracker',
          title: 'Calorie Tracker',
          group: false,
        },
        {
          id: 'side-projects',
          title: 'Side Projects',
          group: true,
          children: [
            {
              id: 'clouds-against-humanity',
              title: 'Clouds Against Humanity',
              group: false,
            },
            {
              id: 'trackist',
              title: 'Track.ist',
              group: false,
            },
            {
              id: 'school',
              title: 'School',
              group: true,
              children: [
                {
                  id: 'school-works',
                  title: 'School Works',
                  group: false,
                },
                {
                  id: 'group-projects',
                  title: 'Group Projects',
                  group: false,
                }
              ]
            }
          ]
        },
        {
          id: 'email',
          title: 'Email',
          group: false,
        },
        {
          id: 'calendar',
          title: 'Calendar',
          group: false,
        },
      ]
    };
  }

  // Menu collapsed / uncollapsed
  toggleCollapse = (collapsed) => {
    const s = this.state;
    s.collapsed = !s.collapsed;
    this.setState(s);
  }

  // Menu item clicked
  handleSelect = (e) => {
    history.push(e.key);
  }

  // Get array of highlighted items
  getHighlighted = (path) => {
    let t = ''; let c = [];
    path.split('/').map(p => {
      if (p !== '') {
        t += `/${p}`;
        c.push(t);
      }
    });
    return c;
  }

  // Create main menu items
  createMenuItems = (items) => {
    if (!items) { return null; }
    var res = [];

    items.map(item => {
      res.push(
        <Menu.Item key={item.path}>
          <Icon type={item.icon} />
          <span className="nav-text">{item.title}</span>
        </Menu.Item>
      )
    })

    return res;
  }

  // Create dashboard items recursively
  createDashboardItems = (dashboards) => {
    if (!dashboards) { return null; }
    var res = [];

    dashboards.map(dashboard => {
      if (dashboard.group) {
        res.push(
          <Menu.SubMenu key={dashboard.id} title={<span><Icon type="folder" /><span>{dashboard.title}</span></span>}>
            {this.createDashboardItems(dashboard.children)}
          </Menu.SubMenu>
        );
      }
      else {
        res.push(
          <Menu.Item key={`/dashboards/${dashboard.id}`}>
            <Icon type="picture" />
            <span className="nav-text">{dashboard.title}</span>
          </Menu.Item>
        );
      }
    });

    return res;
  }

  render() {

    // Sidebar header
    const header = (
      <div className={styles.header}>
        {
          !this.state.collapsed &&
          <div className={styles.headerText}>Hi, Oguz</div>
        }
        <div className={styles.headerIcon} onClick={this.toggleCollapse}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </div>
      </div>
    );

    // Sidebar main items
    const menuItems = this.createMenuItems(this.state.items);

    // Sidebar dashboards title
    const dashboardsTitle = (
      !this.state.collapsed &&
      <SidebarTitle
        title="Dashboards"
        icon={<Icon type="plus" />}
        iconAction={() => { message.info('Adding new view'); }}
      />
    );

    // Sidebar dashboard items
    const dashboards = this.createDashboardItems(this.state.dashboards);

    return (
      <Layout.Sider
        collapsed={this.state.collapsed}
        width={styles.sidebarWidth}
        className={styles.sidebar}>

        {/* Header */}
        {header}

        {/* Sidebar Contents */}

        <Menu
          theme="light"
          mode="inline"
          className={styles.menu}
          onSelect={this.handleSelect}
          selectedKeys={this.getHighlighted(this.props.data.path)}
          inlineCollapsed={this.state.collapsed}>

          <Menu.Divider className={`${styles.divider} ${styles.dividerTop}`} />

          {/* Components */}
          {menuItems}

          <Menu.Divider className={styles.divider} />

          {/* Dashboards */}
          {dashboardsTitle}
          {dashboards}

        </Menu>
      </Layout.Sider>
    );
  }
}

Sidebar.propTypes = {
  user: PropTypes.object,
  data: PropTypes.object
};

export default Sidebar;
