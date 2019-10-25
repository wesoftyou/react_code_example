/* Libs */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash.get';

/* Utils */
import { hasPermission } from 'utils/custom';

/* Constants */ 

import { URLS_CONFIG } from 'config';
import { PERMISSION_NAMES } from '_constants';

function CompanyAdminRoute({
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const redirect = get(props, 'location.state.from.pathname', URLS_CONFIG.auth.signin);
        return hasPermission(PERMISSION_NAMES.CAN_VIEW_COMPANY_ADMIN_PAGES) ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: redirect,
                search: get(props, 'location.state.from.search', ''),
                state: { from: props.location },
              }}
            />
          );
      }}
    />
  );
}

/* Component PropTypes */

CompanyAdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CompanyAdminRoute);
