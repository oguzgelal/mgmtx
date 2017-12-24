import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageContents.css';

class PageContents extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <div className={styles.contents}>
        {this.props.children}
      </div>
    );
  }
}

PageContents.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array])
};

export default PageContents;
