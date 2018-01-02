import React from 'react';
import PropTypes from 'prop-types';

import { List, Icon, Tooltip } from 'antd';
import styles from './CollectionItemList.css';

class CollectionItemList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <List
        className={styles.list}
        dataSource={this.props.items}
        renderItem={item => (
          <List.Item className={styles.subList}>

            <Tooltip title={item.type === 'entity' ? 'Entity' : 'Collection'}>
              <div className={styles.subIcon}>
                <Icon type={item.type === 'entity' ? 'profile' : 'appstore-o'} />
              </div>
            </Tooltip>

            <div className={styles.subTitle}>
              {item.data.title}
            </div>

          </List.Item>
        )}
      />
    );
  }
}

CollectionItemList.propTypes = {
  items: PropTypes.array,
};

export default CollectionItemList;
