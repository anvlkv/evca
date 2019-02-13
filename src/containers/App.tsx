import React, { Component } from 'react';
import './App.scss';
import { Calendar } from './calendar/calendar';
import ReactDOM from 'react-dom';
import { debounce } from 'ts-debounce';
import { CalendarZoomLevels } from './calendar/calendar-zoom-states.enum';
import moment from 'moment';


export interface AppState {
	width: number;
	height: number;
}

export class App extends Component<{}, AppState> {
	constructor(props: {}) {
		super(props);

		this.state = {
			width: 0,
			height: 0,
		};
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', debounce(this.updateWindowDimensions.bind(this), 150));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', debounce(this.updateWindowDimensions.bind(this), 150));
	}

	render() {
		return (
			<div className={'App'}>
				<Calendar width={this.state.width}
				          height={this.state.height}
				          zoomLevel={CalendarZoomLevels.MONTH}
				          startDate={moment('2019-02-01T23:35:01')}/>
			</div>
		);
	}

	private updateWindowDimensions() {
		const el = ReactDOM.findDOMNode(this);
		if (el && el.parentElement) {
			this.setState({width: el.parentElement.clientWidth, height: el.parentElement.clientHeight});
		}
	}
}