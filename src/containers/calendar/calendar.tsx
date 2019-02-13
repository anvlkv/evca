import React from 'react';
import { Day } from '../../presentational/day/day';
import { CalendarZoomLevels } from './calendar-zoom-states.enum';
import { TimeSpanComponentBase, TimeSpanPropsBase } from '../time-span/time-span';
import { Month } from '../../presentational/month/month';
import { Layout } from '../layout/Layout';
import { LayoutFit, LayoutFlow } from '../layout/Layout.enum';


export interface CalendarProps extends TimeSpanPropsBase {
	width: number;
	height: number;
}

// export interface CalendarState extends TimeSpanStateBase {
// }

export class Calendar extends TimeSpanComponentBase<CalendarProps> {
	ownZoomLevelCorrespondence = CalendarZoomLevels.MILLISECONDS;

	renderAtZoomLevel(zoom: CalendarZoomLevels = this.props.zoomLevel) {
		// const now = moment(this.props.startDate);
		switch (zoom) {
			case CalendarZoomLevels.MILLISECONDS:
				break;
			case CalendarZoomLevels.SECONDS:
				break;
			case CalendarZoomLevels.MINUTES:
				break;
			case CalendarZoomLevels.HOURS:
				break;
			case CalendarZoomLevels.DAY:
				return (
					<>
						<Day key={`calendar-day`}
						     startDate={this.props.startDate}
						     zoomLevel={this.props.zoomLevel}/>
					</>
				);
			case CalendarZoomLevels.DAYS:
				break;
			case CalendarZoomLevels.WEEKS:
				break;
			case CalendarZoomLevels.MONTH:
				return (
					<>
						<Month key={`calendar-month`}
						       startDate={this.props.startDate}
						       zoomLevel={this.props.zoomLevel}/>
					</>
				);
			case CalendarZoomLevels.QUARTERS:
				break;
			case CalendarZoomLevels.MONTHS:
				break;
			case CalendarZoomLevels.YEAR:
				break;
			case CalendarZoomLevels.YEARS:
				break;
			case CalendarZoomLevels.DECADES:
				break;
			default:
				throw new Error(`Not a valid calendar zoom level [${zoom}]`);
		}
	}

	renderDay(date: Date) {
		return (
			{/*<Day date={date}/>*/}
		);
	}

	render() {
		// const relSize = Math.floor((this.props.width > this.props.height ?
			// this.props.width / this.props.height : this.props.height / this.props.width) * 100);
		// const vbEdge = `100 ${isNaN(relSize) ? '100' : relSize}`;
		return (
			<div className={'Calendar'}>
				<svg viewBox={`0 0 100 100`}
				     width={this.props.width}
				     height={this.props.height}
				     xmlns="http://www.w3.org/2000/svg"
				     preserveAspectRatio="xMidYMin meet"
					fontSize={1}>
					{/*<Layout flow={LayoutFlow.OVERLAP}*/}
					        {/*fit={LayoutFit.BOTH}*/}
					        {/*className={'CALENDAR'}>*/}
						{/*<rect width={100}*/}
						      {/*height={100}*/}
						      {/*className={'background'}/>*/}
					{this.renderAtZoomLevel()}
					{/*</Layout>*/}
				</svg>
			</div>
		);
	}
}