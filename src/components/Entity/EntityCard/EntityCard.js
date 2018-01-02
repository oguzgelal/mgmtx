import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon, Tooltip, List, Button } from 'antd';
import MxCard from '../../MxCard/MxCard';
import EntityItemList from '../EntityItemList/EntityItemList';
import styles from './EntityCard.css';

import Scroller from '../../../components/Scroller/Scroller';

class EntityCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: false,
    };
  }

  render() {
    const cardActions = [];

    cardActions.push(
      <Tooltip title="Edit">
        <Icon type="edit" />
      </Tooltip>
    );

    cardActions.push(
      <Tooltip title="Delete">
        <Icon type="delete" />
      </Tooltip>
    );

    cardActions.push(
      <Tooltip title={`Insert ${this.props.card.title} into...`}>
        <Icon type="file-add" />
      </Tooltip>
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
        title={this.props.card.title}
        actions={cardActions}
        extra={cardExtra}
      >
        <Scroller hidden class={styles.scroll}>
          <EntityItemList items={this.props.card.items} />
        </Scroller>
      </MxCard>
    );
  }
}

EntityCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default EntityCard;
