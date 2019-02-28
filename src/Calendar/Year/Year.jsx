import React, { Component } from 'react';
import './Year.scss';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { ZoomLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Year extends Component {
    renderAtZoomLevel(zoom) {
        switch (zoom) {
            case CalendarZoomLevels.DAY.ordinal:
                return (
                    <Layout key={'day-hours'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            case CalendarZoomLevels.DAYS.ordinal:
                break;
            case CalendarZoomLevels.WEEKS.ordinal:
                break;
            case CalendarZoomLevels.MONTH.ordinal:
                return (
                    <>
                    </>
                );
            case CalendarZoomLevels.QUARTERS.ordinal:
                break;
            case CalendarZoomLevels.MONTHS.ordinal:
                break;
            case CalendarZoomLevels.YEAR.ordinal:
                break;
            default:
                throw new Error(`unsupported zoom level [${zoom}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Year'}>
                <ZoomLevelContext.Consumer>
                    {(({zoom}) => {
                        return this.renderAtZoomLevel(zoom)
                    })}
                </ZoomLevelContext.Consumer>
            </g>
        )
    }
}