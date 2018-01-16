import React from 'react';
import PropTypes from 'prop-types';

import { List, Icon, Tooltip } from 'antd';
import styles from './EntityItemList.css';

class EntityItemList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  renderActions(item) {
    const listItemActions = [];

    listItemActions.push(
      <Tooltip title="Edit">
        <Icon type="edit" />
      </Tooltip>
    );
    listItemActions.push(
      <Tooltip title="Delete">
        <Icon type="delete" />
      </Tooltip>
    );
    listItemActions.push(
      <Tooltip title={`Insert ${item.title} into...`}>
        <Icon type="file-add" />
      </Tooltip>
    );

    return listItemActions;
  }

  render() {
    return (
      <List
        size="small"
        className={styles.list}
        dataSource={this.props.items}
        renderItem={item => (
          <List.Item actions={this.renderActions(item)} placement="left">
            {item.title}
          </List.Item>
        )}
      />
    );
  }
}

EntityItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default EntityItemList;
