import React from 'react';
import { Router, Route, Switch, withRouter, Redirect } from 'dva/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Views
import Landing from './routes/Landing/Landing';
import Dashboards from './routes/Dashboards/Dashboards';
import Entities from './routes/Entities/Entities';
import Collections from './routes/Collections/Collections';
import Variables from './routes/Values/Variables/Variables';
import Constants from './routes/Values/Constants/Constants';
import Actions from './routes/Automate/Actions/Actions';
import Workflows from './routes/Automate/Workflows/Workflows';
import Endpoints from './routes/Automate/Endpoints/Endpoints';
import Triggers from './routes/Automate/Triggers/Triggers';

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

        {/* Home */}

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

        {/* Dashboards */}

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

        {/* Entities */}

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

        {/* Collections */}

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

        {/* Values */}

        <Redirect
          exact
          from='/values'
          to='/values/variables'
        />

        <PrivateRoute
          exact
          path="/values/variables"
          user={this.props.user}
          component={Variables}
          data={{
            path: this.props.location.pathname,
            showSidebar: true,
            showFooter: false,
          }}
        />

        <PrivateRoute
          exact
          path="/values/constants"
          user={this.props.user}
          component={Constants}
          data={{
            path: this.props.location.pathname,
            showSidebar: true,
            showFooter: false,
          }}
        />

        {/* Automate */}

        <Redirect
          exact
          from='/automate'
          to='/automate/actions'
        />

        <PrivateRoute
          exact
          path="/automate/actions"
          user={this.props.user}
          component={Actions}
          data={{
            path: this.props.location.pathname,
            showSidebar: true,
            showFooter: false,
          }}
        />

        <PrivateRoute
          exact
          path="/automate/workflows"
          user={this.props.user}
          component={Workflows}
          data={{
            path: this.props.location.pathname,
            showSidebar: true,
            showFooter: false,
          }}
        />

        <PrivateRoute
          exact
          path="/automate/endpoints"
          user={this.props.user}
          component={Endpoints}
          data={{
            path: this.props.location.pathname,
            showSidebar: true,
            showFooter: false,
          }}
        />

        <PrivateRoute
          exact
          path="/automate/triggers"
          user={this.props.user}
          component={Triggers}
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
