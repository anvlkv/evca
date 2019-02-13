import React from 'react';
import './month.scss';
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
import { WeekDays } from '../week/week-days.enum';
import { Week } from '../week/week';


export class Month extends TimeSpanComponentBase {
	ownZoomLevelCorrespondence = CalendarZoomLevels.MONTH;

	renderMonthHeader(startOfTheMonth: Moment) {
		const title = startOfTheMonth.date()  === 1 ?
			startOfTheMonth.format('MMMM') :
			`${startOfTheMonth.format('DD MMM')} – ${startOfTheMonth.clone().add(1, 'M').format('DD MMM')}`;
		return(
			<Layout key={`month-header-${startOfTheMonth.month()}`}
					className={'month-title'}
			        verticalAlignment={LayoutAlignmentVertical.CENTER}
			        horizontalAlignment={LayoutAlignmentHorizontal.LEFT}
			        fit={LayoutFit.HEIGHT}
			        flow={LayoutFlow.OVERLAP}>
				<rect className={'background'} width={100} height={10}/>
				<Layout verticalAlignment={LayoutAlignmentVertical.CENTER}
				        horizontalAlignment={LayoutAlignmentHorizontal.LEFT}
				        flow={LayoutFlow.COLUMN}
				        className={'title'}>
					<text className={'primary-text'}>
						{title}
					</text>
					{this.props.zoomLevel >= this.ownZoomLevelCorrespondence ? (
						<text className={'secondary-text'}>
							{startOfTheMonth.format('YYYY')}
						</text>
					) : (<></>)}

				</Layout>
			</Layout>
		)
	}

	renderMothDays(startOfTheMonth: Moment, startOfTheWeek: WeekDays = this.userPrefs.startOfTheWeek) {
		const renderDate = startOfTheMonth.clone();
		const daysPerRow = 7;
		const rows = [];
		const endDate = startOfTheMonth.clone().add(1, 'M');

		if (daysPerRow === 7) {
			rows[0] = Week.renderWeekDaysNames('dd', startOfTheWeek, [(
				<rect width={100}
				      height={100}
				      key={'placeholder'}
				      fill={'transparent'}/>
			)]);
			let i = 0;
			do {
				rows.push(
					<Week key={`week-of-the-month-${i}`} zoomLevel={this.props.zoomLevel} startDate={renderDate.clone()}/>
				);
				renderDate.add(7, 'd');
				i++;
			} while (endDate.isSameOrAfter(renderDate));
		}



		return (
			<Layout key={`month-days-${startOfTheMonth.month()}`}
			        verticalAlignment={LayoutAlignmentVertical.CENTER}
			        horizontalAlignment={LayoutAlignmentHorizontal.RIGHT}
			        flow={LayoutFlow.COLUMN}>
				{rows}
			</Layout>
		)

	}

	render() {
		const startDate = moment(this.props.startDate);
		return (
			<Layout verticalAlignment={LayoutAlignmentVertical.CENTER}
			        horizontalAlignment={LayoutAlignmentHorizontal.LEFT}
			        fit={LayoutFit.BOTH}
			        flow={LayoutFlow.COLUMN}
			        className={'MONTH'}>
				{this.renderMonthHeader(startDate)}
				{this.props.zoomLevel >= this.ownZoomLevelCorrespondence ? this.renderMothDays(startDate): (<></>)}
			</Layout>
		);
	}
}