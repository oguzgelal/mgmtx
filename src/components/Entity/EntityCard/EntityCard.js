import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Card, Icon, Tooltip, List, Button } from 'antd';
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
          shape="circle"
          icon="plus"
        />
      </Tooltip>
    );

    return (
      <Card
        title={this.props.card.title}
        actions={cardActions}
        extra={cardExtra}
        onClick={() => {
          let activeState = this.state.active;
          this.setState({ active: !activeState });
        }}
        className={cx(
          styles.card,
          { [styles.active]: this.state.active }
        )}
      >
        <Scroller hidden class={styles.scroll}>
          <EntityItemList items={this.props.card.items} />
        </Scroller>
      </Card>
    );
  }
}

EntityCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default EntityCard;
