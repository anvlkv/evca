import React, { ReactNode } from 'react';
import './week.scss';
import moment, { Moment } from 'moment';
import { Layout } from '../../containers/layout/Layout';
import {
	LayoutAlignmentHorizontal,
	LayoutAlignmentVertical,
	LayoutFit,
	LayoutFlow,
} from '../../containers/layout/Layout.enum';
import { TimeSpanComponentBase } from '../../containers/time-span/time-span';
import { CalendarZoomLevels } from '../../containers/calendar/calendar-zoom-states.enum';
import { WeekDays } from './week-days.enum';
import { Day } from '../day/day';


export class Week extends TimeSpanComponentBase {
	ownZoomLevelCorrespondence = CalendarZoomLevels.DAYS;

	public static renderWeekDaysNames(format: 'dd' | 'ddd' | 'dddd', start: WeekDays, daysBefore: any[] = [], daysAfter: any[] = [], key = 'week-days-names') {
		const days = [...daysBefore];
		let i = 0;
		do {
			days.push((
				<Layout key={`${key}-week-day-${i}`}
						flow={LayoutFlow.OVERLAP}
				        horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
				        verticalAlignment={LayoutAlignmentVertical.CENTER}
						className={'week-day-title'}>
					<rect className={'background'} width={100} height={100} fill={'none'}/>
					<text className={'primary-text'}>
						{moment().isoWeekday(start + i + 1).format(format)}
					</text>
				</Layout>
			));
			i++;
		} while (i <= 6);

		return (
			<Layout key={key}
					verticalAlignment={LayoutAlignmentVertical.CENTER}
			        fit={LayoutFit.BOTH}
			        flow={LayoutFlow.ROW}>
				{days}
				{daysAfter}
			</Layout>
		);
	}

	renderWeekHeader(startOfTheWeek: Moment) {
		return(
			<Layout key={`week-header-${startOfTheWeek.isoWeek()}`}
					className={'week-title'}
			        flow={LayoutFlow.OVERLAP}>
				<rect className={'background'} width={100} height={100} fill={'none'}/>
				<text className={'primary-text'}>
					{startOfTheWeek.isoWeek()}
				</text>
			</Layout>
		);
	}

	renderWeekDays(startDate: Moment, start: WeekDays = this.userPrefs.startOfTheWeek): React.ReactNode {
		const renderDate = startDate.clone();
		const days = [];
		const weekDay = startDate.isoWeekday() - 1;
		if (weekDay !== start) {
			renderDate.subtract(Math.abs(weekDay - start), 'd');
		}

		let i = 0;
		do {
			days.push(
				<Day startDate={renderDate.clone()}
				     key={`week-day-${i}`}
				     zoomLevel={this.props.zoomLevel}/>
			);
			renderDate.add(1, 'days');
			i++;
		} while (i < 7);

		return (
			<Layout fit={LayoutFit.BOTH}
			        flow={LayoutFlow.ROW}>
				{this.renderWeekHeader(startDate)}
				{days}
			</Layout>
		)
	}

	render() {
		const startDate = moment(this.props.startDate);
		return (
			<Layout verticalAlignment={LayoutAlignmentVertical.CENTER}
			        horizontalAlignment={LayoutAlignmentHorizontal.LEFT}
			        flow={LayoutFlow.ROW}
			        className={'WEEK'}>
				{this.props.zoomLevel >= this.ownZoomLevelCorrespondence ? this.renderWeekDays(startDate): (<></>)}
			</Layout>
		);
	}
}