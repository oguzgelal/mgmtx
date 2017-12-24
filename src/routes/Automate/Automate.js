import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PageContents from '../../components/PageContents/PageContents';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageMenu from '../../components/PageMenu/PageMenu';

class Automate extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [
        {
          title: 'Actions',
          path: '/automate/actions',
          id: 'actions',
        },
        {
          title: 'Workflows',
          path: '/automate/workflows',
          id: 'workflows',
        },
        {
          title: 'Endpoints',
          path: '/automate/endpoints',
          id: 'endpoints',
        },
        {
          title: 'Triggers',
          path: '/automate/triggers',
          id: 'triggers',
        },
      ]
    };
  }

  render() {
    return (
      <PageContents>
        <PageHeader title={`Automate`} />
        <PageMenu items={this.state.items} data={this.props.data} />
        {this.props.children}
      </PageContents>
    );
  }
}

Automate.propTypes = {
  data: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array
  ])
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
)(Automate);
