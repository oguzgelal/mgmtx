import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'antd';
import CollectionCard from '../CollectionCard/CollectionCard';
import styles from './CollectionList.css';

class CollectionList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <List
        className={styles.list}
        grid={{ gutter: 0, column: 1 }}
        dataSource={this.props.collections}
        renderItem={collection => (
          <List.Item className={styles.listItem}>
            <CollectionCard collection={collection} />
          </List.Item>
        )}
      />
    );
  }
}

CollectionList.propTypes = {
  collections: PropTypes.array,
};

export default CollectionList;
