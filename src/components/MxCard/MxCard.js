import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Card } from 'antd';
import styles from './MxCard.css';

class MxCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: !!props.active,
    };

    this.cardToggled = this.cardToggled.bind(this);
  }

  cardToggled(e) {
    // TODO: Fix this
    if (e.target.className === 'ant-card-head-title') {
      this.setState({ active: !this.state.active });
    }
  }

  render() {
    const cardTitle = (
      <Card.Meta
        title={this.props.cardTitle}
        description={this.props.cardDesc}
      />
    );

    return (
      <Card
        title={cardTitle}
        bordered={false}
        actions={this.props.actions}
        extra={this.props.extra}
        className={cx(
          styles.card,
          { [styles.active]: this.state.active },
        )}
        onClick={this.cardToggled}
      >
        {this.props.children}
      </Card>
    );
  }
}

MxCard.propTypes = {
  children: PropTypes.object,
  actions: PropTypes.array,
  extra: PropTypes.object,
  cardTitle: PropTypes.string,
  cardDesc: PropTypes.string,
  active: PropTypes.bool,
};

export default MxCard;
