import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PageContents from '../../components/PageContents/PageContents';
import PageHeader from '../../components/PageHeader/PageHeader';
import EntityList from '../../components/Entity/EntityList/EntityList';

import { getEntityObject } from '../../utils/mock';

class Entities extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

      entities: [
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
        getEntityObject(),
      ],

    };
  }

  render() {
    return (
      <PageContents>
        <PageHeader title={`Entities`} />
        <EntityList cards={this.state.entities} />
      </PageContents>
    );
  }
}

Entities.propTypes = {
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
)(Entities);
