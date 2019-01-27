import React, { Component } from 'react';
import './day.scss';
import moment from 'moment';
import { Layout } from '../../containers/layout/Layout';


export interface CalendarProps {
	date: Date;
}

export class Day extends Component<CalendarProps> {

	constructor(props: CalendarProps) {
		super(props);
	}

	render() {
		const day = moment(this.props.date).format('DD');
		return (
			<Layout className={'Day'}
			        vertical={'center'}
			        horizontal={'center'}
			        flow={'overlay'}>
				<rect x={0} y={0} width={10} height={10} fill={'none'}/>
				<text x={0} y={0} dominantBaseline="hanging">
					{day}
				</text>
			</Layout>
		);
	}
}