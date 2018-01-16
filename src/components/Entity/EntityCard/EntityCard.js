import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon, Tooltip, List, Button } from 'antd';
import MxCard from '../../MxCard/MxCard';
import EntityItemList from '../EntityItemList/EntityItemList';
import Scroller from '../../../components/Scroller/Scroller';
import styles from './EntityCard.css';

class EntityCard extends React.Component {
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
      <Tooltip title={`Insert ${this.props.entity.title} into...`}>
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
        cardTitle={this.props.entity.title}
        cardDesc={this.props.entity.description}
      >
        <div className="card-body">
          <Scroller hidden class={styles.scroll}>
            <EntityItemList items={this.props.entity.items} />
          </Scroller>
        </div>
      </MxCard>
    );
  }
}

EntityCard.propTypes = {
  entity: PropTypes.object.isRequired,
};

export default EntityCard;
