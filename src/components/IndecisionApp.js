import React from 'react';
import Header from './Header.js';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Action from './Action.js';
import OptionModal from './OptionModal.js';

export class IndecisionApp extends React.Component {
	state = {
		options        : [],
		selectedOption : undefined
	};

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => {
			return {
				options : prevState.options.filter((option) => {
					return optionToRemove !== option;
				})
			};
		});
	};
	handlePick = () => {
		let random = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[random];
		// alert(option)
		this.setState(() => ({
			selectedOption : option
		}));
	};
	handleCloseModal = () => {
		this.setState(() => ({
			selectedOption : undefined
		}));
	};
	handleAddOption = (option) => {
		if (!option) {
			return 'Enter Valid value to add item';
		}
		else if (this.state.options.indexOf(option) > -1) {
			return 'This Option already Exists';
		}
		this.setState((preState) => ({ options: preState.options.concat(option) }));
	};

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => {
					return {
						options : options
					};
				});
			}
		} catch (e) {
			// DO NOTHING AT ALL
		}
		// console.log('fecthing Data')
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
			// console.log('saving Data')
		}
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	render() {
		// const appTitle = 'Indecision';
		const appTitleSubtitle = 'Put your life in the hands of a Computer';
		return (
			<div>
				<Header subTitle={appTitleSubtitle} />
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption handleAddOption={this.handleAddOption} />

				<OptionModal selectedOption={this.state.selectedOption} handleCloseModal={this.handleCloseModal} />
			</div>
		);
	}
}
