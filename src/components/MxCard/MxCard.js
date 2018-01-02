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
    return (
      <Card
        {...this.props}
        bordered={false}
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
  cardExtra: PropTypes.object,
  cardActions: PropTypes.array,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default MxCard;
