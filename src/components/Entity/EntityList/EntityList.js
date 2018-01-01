import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

import EntityCard from '../EntityCard/EntityCard';
import styles from './EntityList.css';

class EntityList extends React.Component {
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
        dataSource={this.props.cards}
        renderItem={card => (
          <List.Item className={styles.listItem}>
            <EntityCard card={card} />
          </List.Item>
        )}
      />
    );
  }
}

EntityList.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default EntityList;
