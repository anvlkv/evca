import React, { Component } from 'react';
import './calendar.scss';
import { Day } from '../day/day';
import { CalendarZoomLevels } from './calendar-zoom-states.enum';

// import { Game } from './components/game/game.component';



export interface CalendarProps {
	date: Date;
	width: number;
	height: number;
}

export interface CalendarState {
	zoomLevel: CalendarZoomLevels
}

export class Calendar extends Component<CalendarProps, CalendarState> {

	constructor(props: CalendarProps) {
		super(props);
		this.state = {
			zoomLevel: CalendarZoomLevels.Month,

		}
	}

	renderDay(date: Date) {
		return (
			<Day date={date}/>
		)
	}

	render() {
		return (
			<div className={'Calendar'}>
				<svg viewBox={`0 0 100 100`}
				     width={this.props.width}
				     height={this.props.height}
				     xmlns="http://www.w3.org/2000/svg"
				     preserveAspectRatio="xMidYMin slice"
					fontSize={1.6}>
					{this.renderDay(this.props.date)}
				</svg>
			</div>
		);
	}
}