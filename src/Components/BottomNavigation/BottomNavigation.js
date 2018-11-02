import React, { Component, Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {} from 'lodash';
import {} from 'modules/utils';
import Routes from 'modules/routes';
import {} from 'modules/const';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

import './BottomNavigation.scss';

class _BottomNavigation extends Component {
	constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }
    
    handleChange = (event, value) => {
        this.setState({ value });
    };

	render() { 
        const { value } = this.state;

		return (
			<BottomNavigation className="bottomNavigation" value={value} onChange={this.handleChange} showLabels>
				<BottomNavigationAction label="Stop" icon={<PauseCircleOutlineIcon />} />
			</BottomNavigation>
		);
	}
}

_BottomNavigation.defaultProps = {};

_BottomNavigation.propTypes = {};

export default _BottomNavigation;
