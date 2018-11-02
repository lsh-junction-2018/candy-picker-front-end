import React, { Component, Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { } from 'lodash';
import { } from 'modules/utils';
import Routes from 'modules/routes';
import { } from 'modules/const';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Navigation.scss';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Candy Picker
                <div className="candyPickerLogo" />
              </Typography>
            </Toolbar>
          </AppBar>
        );
    }
}

Navigation.defaultProps = {
}

Navigation.propTypes = {
}

export default Navigation;