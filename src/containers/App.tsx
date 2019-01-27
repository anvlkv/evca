import React, { Component } from 'react';
import './App.scss';
import { Calendar } from '../presentational/calendar/calendar';
import ReactDOM from 'react-dom';
import { debounce } from 'ts-debounce';


export interface AppState {
	now: Date;
	width: number;
	height: number;
}

export class App extends Component<{}, AppState> {
	private intervalId: any;

	constructor(props: {}) {
		super(props);

		this.state = {
			now: new Date(),
			width: 0,
			height: 0,
		};
	}

	componentDidMount() {
		this.intervalId = setInterval(
			() => this.tick(),
			1,
		);

		this.updateWindowDimensions();
		window.addEventListener('resize', debounce(this.updateWindowDimensions.bind(this), 150));
	}

	componentWillUnmount() {
		if (this.intervalId) clearInterval(this.intervalId);
		window.removeEventListener('resize', debounce(this.updateWindowDimensions.bind(this), 150));
	}

	render() {
		return (
			<div className={'App'}>
				<Calendar date={this.state.now}
				          width={this.state.width}
				          height={this.state.height} />
			</div>
		);
	}

	private tick() {
		this.setState({now: new Date()});
	}

	private updateWindowDimensions() {
		const el = ReactDOM.findDOMNode(this);
		if (el && el.parentElement) {
			this.setState({width: el.parentElement.clientWidth, height: el.parentElement.clientHeight});
		}
	}
}