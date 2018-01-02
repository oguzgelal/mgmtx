import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Card } from 'antd';
import styles from './MxCard.css';

class MxCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: false,
    };
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
          { [styles.active]: this.state.active }
        )}
        onClick={() => {
          this.setState({
            active: !this.state.active
          });
        }}
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
};

export default MxCard;
