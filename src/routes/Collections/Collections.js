import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PageContents from '../../components/PageContents/PageContents';
import PageHeader from '../../components/PageHeader/PageHeader';
import CollectionList from '../../components/Collection/CollectionList/CollectionList';

import { getCollectionObject } from '../../utils/mock';

class Collections extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

      collections: [
        getCollectionObject(),
        getCollectionObject(),
        getCollectionObject(),
        getCollectionObject(),
        getCollectionObject(),
        getCollectionObject(),
        getCollectionObject(),
      ],
    };
  }

  render() {
    return (
      <PageContents>
        <PageHeader title="Collections" />
        <CollectionList collections={this.state.collections} />
      </PageContents>
    );
  }
}

Collections.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
  // authors: state.authors
});

const mapDispatchToProps = (dispatch) => ({
  // actions: bindActionCreators(..., dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Collections);
