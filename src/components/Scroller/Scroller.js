import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';
import styles from './Scroller.css';

const Scroller = (props) => {
  console.log('asdasdasd', props);
  const scrollerClassnames = classNames(
    styles.scroller,
    { [styles.scrollerHidden]: props.hidden },
  );

  const options = {};
  if (props.suppressScrollX) { options.suppressScrollX = props.suppressScrollX; }
  if (props.suppressScrollY) { options.suppressScrollY = props.suppressScrollY; }

  return (
    <PerfectScrollbar className={`${scrollerClassnames} ${props.class}`} option={options} {...props}>
      {props.children}
    </PerfectScrollbar>
  );
};

Scroller.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  class: PropTypes.string,
  hidden: PropTypes.bool,
  suppressScrollX: PropTypes.bool,
  suppressScrollY: PropTypes.bool,
};

export default Scroller;
