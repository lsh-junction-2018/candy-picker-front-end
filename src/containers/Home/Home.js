/**
 * Home page container
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { ReactComponent as CandyIcon } from 'assets/Candy.svg';
import { COMMANDS } from 'modules/const';
import { postCandyPickerCommand } from 'actions/candyPickerAction';
import './Home.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		this.handlePostCandyCommand = this.handlePostCandyCommand.bind(this);
	}

	handlePostCandyCommand(command) {
    console.log('dd')
		this.props.postCandyPickerCommand(command);
	}

	render() {
		return (
			<div className="homepage">
				<div>
					<Button
						className="blueCandy"
						variant="fab"
						onClick={() => this.handlePostCandyCommand(COMMANDS.blue)}
					>
						<CandyIcon />
					</Button>
				</div>
				<div>
					<Button
						className="yellowCandy"
						variant="fab"
						onClick={() => this.handlePostCandyCommand(COMMANDS.yellow)}
					>
						<CandyIcon />
					</Button>
				</div>
				<div>
					<Button
						className="redCandy"
						variant="fab"
						onClick={() => this.handlePostCandyCommand(COMMANDS.red)}
					>
						<CandyIcon />
					</Button>
				</div>
			</div>
		);
	}
}

Home.defaultProps = {};

Home.propTypes = {
	postCandyPickerCommand: PropTypes.func.isRequired,
};

export default connect(
	null,
	{
		postCandyPickerCommand,
	}
)(Home);
