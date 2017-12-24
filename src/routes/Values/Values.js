import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PageContents from '../../components/PageContents/PageContents';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageMenu from '../../components/PageMenu/PageMenu';

class Values extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [
        {
          title: 'Variables',
          path: '/values/variables',
          id: 'variables',
        },
        {
          title: 'Constants',
          path: '/values/constants',
          id: 'constants',
        }
      ]
    };
  }

  render() {
    return (
      <PageContents>
        <PageHeader title={`Values`} />
        <PageMenu items={this.state.items} data={this.props.data} />
        {this.props.children}
      </PageContents>
    );
  }
}

Values.propTypes = {
  data: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array
  ])
};

const mapStateToProps = (state, ownProps) => ({
  location: state.location
});

const mapDispatchToProps = dispatch => ({
  //actions: bindActionCreators(..., dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Values);
