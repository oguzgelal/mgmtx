import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'dva';
import { Popconfirm, Button } from 'antd';

import CounterModel from '../models/counterModel';

import styles from './IndexPage.css';

class IndexPage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  increment() {
    this.props.counterActions.incrementCounter();
  }

  decrement() {
    this.props.counterActions.decrementCounter();
  }

  reset() {
    this.props.counterActions.resetCounter();
  }

  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.counter}>
          {'Counter: ' + this.props.counter.current}
        </div>
        <div className={styles.buttons}>
          <div>
            <Button onClick={() => this.increment()} loading={this.props.counter.increasing}>Increment</Button>
          </div>
          <div>
            <Button onClick={() => this.decrement()} loading={this.props.counter.decreasing}>Decrement</Button>
          </div>
          <div>
            <Popconfirm title="Are you sure ?" onConfirm={() => this.reset()}>
              <Button type="danger">Reset</Button>
            </Popconfirm>
          </div>
        </div>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    counterActions: bindActionCreators(CounterModel.actions, dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
