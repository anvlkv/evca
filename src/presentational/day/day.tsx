import React, { Component } from 'react';
import './day.scss';
import moment from 'moment';
import { Layout } from '../../containers/layout/Layout';
import { LayoutAlignmentHorizontal, LayoutAlignmentVertical, LayoutFlow } from '../../containers/layout/Layout.enum';
import { TimeSpanComponentBase } from '../../containers/time-span/time-span';
import { CalendarZoomLevels } from '../../containers/calendar/calendar-zoom-states.enum';


export class Day extends TimeSpanComponentBase {
	ownZoomLevelCorrespondence = CalendarZoomLevels.DAY;

	render() {
		const day = this.props.startDate.format('DD');
		return (
			<Layout className={'DAY'}
			        verticalAlignment={LayoutAlignmentVertical.CENTER}
			        horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
			        flow={LayoutFlow.OVERLAP}>
				<rect width={100} height={100} className={'background'}/>
				<text className={'primary-text'}>
					{day}
				</text>
			</Layout>
		);
	}
}