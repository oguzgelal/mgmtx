import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Endpoints extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    //return ();
  }
}

Endpoints.propTypes = {
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
)(Endpoints);