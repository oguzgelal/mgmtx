import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PageContents from '../../components/PageContents/PageContents';
import PageHeader from '../../components/PageHeader/PageHeader';

class Dashboards extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <PageContents>
        <PageHeader title={`Dashboards`} />
      </PageContents>
    );
  }
}

Dashboards.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
  //authors: state.authors
});

const mapDispatchToProps = dispatch => ({
  //actions: bindActionCreators(..., dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboards);
