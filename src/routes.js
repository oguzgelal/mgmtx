import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

// Views
import Landing from './routes/Landing/Landing';
import Dashboards from './routes/Dashboards/Dashboards';

// Components
import PrivateRoute from './components/Routes/PrivateRoute/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute/PublicRoute';

class Routes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = ({
    })
  }

  render() {
    return (
      <Switch>

        <PublicRoute
          exact
          path="/"
          userRedirectPath="/dashboards"
          component={Landing}
          data={{
            showSidebar: false,
            showFooter: true,
          }}
        />

        <PrivateRoute
          exact
          path="/dashboards"
          user={this.props.user}
          component={Dashboards}
          data={{
            showSidebar: true,
            showFooter: true,
          }}
        />

      </Switch>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes));
