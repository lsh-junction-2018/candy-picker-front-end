import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postCandyPickerCommand } from 'actions/candyPickerAction';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';

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
        console.log(value)
        this.props.postCandyPickerCommand(value === 0 ? 'STOP' : 'RESET');
    };

	render() { 
        const { value } = this.state;

		return (
			<BottomNavigation className="bottomNavigation" value={value} onChange={this.handleChange} showLabels>
				<BottomNavigationAction label="Stop" icon={<PauseCircleOutlineIcon />} />
				<BottomNavigationAction label="RESET" icon={<RepeatIcon />} />
			</BottomNavigation>
		);
	}
}

_BottomNavigation.defaultProps = {};

_BottomNavigation.propTypes = {
	postCandyPickerCommand: PropTypes.func.isRequired,
};

export default connect(
	null,
	{
		postCandyPickerCommand,
	}
)(_BottomNavigation);