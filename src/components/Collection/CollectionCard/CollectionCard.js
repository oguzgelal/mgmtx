import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Tooltip, Button, Tabs } from 'antd';
import styles from './CollectionCard.css';
import MxCard from '../../MxCard/MxCard';
import Scroller from '../../../components/Scroller/Scroller';
import CollectionItemList from '../CollectionItemList/CollectionItemList';

class CollectionCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    const cardActions = [];

    cardActions.push(
      <Tooltip title="Edit">
        <Icon type="edit" />
      </Tooltip>,
    );

    cardActions.push(
      <Tooltip title="Delete">
        <Icon type="delete" />
      </Tooltip>,
    );

    cardActions.push(
      <Tooltip title={`Insert ${this.props.collection.title} into...`}>
        <Icon type="file-add" />
      </Tooltip>,
    );

    const cardExtra = (
      <Tooltip title="New Item">
        <Button
          size="small"
          type="primary"
          shape="circle"
          icon="plus"
        />
      </Tooltip>
    );

    return (
      <MxCard
        actions={cardActions}
        extra={cardExtra}
        cardTitle={this.props.collection.title}
        cardDesc={this.props.collection.description}
        className={styles.card}
      >
        <Tabs defaultActiveKey="included" className={styles.tabs} animated>
          <Tabs.TabPane tab="Included" key="included">
            <div className="card-body">
              <Scroller hidden class={styles.scroll}>
                <CollectionItemList items={this.props.collection.items.included} />
              </Scroller>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Excluded" key="excluded">
            <div className="card-body">
              <Scroller hidden class={styles.scroll}>
                <CollectionItemList items={this.props.collection.items.excluded} />
              </Scroller>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </MxCard>
    );
  }
}

CollectionCard.propTypes = {
  collection: PropTypes.object,
};

export default CollectionCard;
