import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

// Views
import Landing from './routes/Landing/Landing';
import Dashboards from './routes/Dashboards/Dashboards';
import Entities from './routes/Entities/Entities';
import Collections from './routes/Collections/Collections';
import Values from './routes/Values/Values';
import Automate from './routes/Automate/Automate';


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
            path: this.props.location.pathname,
            showSidebar: false,
            showFooter: true,
          }}
        />

        {/* Platform */}

        <PrivateRoute
          exact
          path="/dashboards"
          user={this.props.user}
          component={Dashboards}
          data={{
            path: this.props.location.pathname,
            showSidebar: true,
            showFooter: false,
          }}
        />

        <PrivateRoute
          exact
          path="/dashboards/:id"
          user={this.props.user}
          component={Dashboards}
          data={{
            path: this.props.location.pathname,
            showSidebar: true,
            showFooter: false,
          }}
        />

        <PrivateRoute
          exact
          path="/entities"
          user={this.props.user}
          component={Entities}
          data={{
            path: this.props.location.pathname,
            showSidebar: true,
            showFooter: false,
          }}
        />

        <PrivateRoute
          exact
          path="/collections"
          user={this.props.user}
          component={Collections}
          data={{
            path: this.props.location.pathname,
            showSidebar: true,
            showFooter: false,
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
