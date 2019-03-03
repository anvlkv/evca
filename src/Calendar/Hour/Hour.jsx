import React, { Component } from 'react';
import './Hour.scss';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { ScaleLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Hour extends Component {
    renderAtScaleLevel(scale) {
        switch (Math.floor(scale)) {
            case CalendarScaleLevels.HOURS.ordinal:
                return (
                    <Layout key={'hour'} fitX={100} fitY={100} direction={'z'}>

                    </Layout>
                );
            case CalendarScaleLevels.DAY.ordinal:
                return (
                    <Layout key={'day-hour'} fitY={100/24} direction={'z'}>
                        <Layout className={'hour-content'} direction={'y'}>
                            <rect className={'hour-background'} width={100} height={50}/>
                            <rect className={'hour-background'} width={100} height={50}/>
                        </Layout>
                        <g className={'hour-header'}>
                            <text className={'primary-date'}>
                                {this.props.startDate.format('HH')}
                            </text>
                            <text className={'secondary-date'}>
                                {this.props.startDate.format('mm')}
                            </text>
                            <text className={'secondary-date'}>
                                {this.props.startDate.clone().add(30, 'minutes').format('mm')}
                            </text>
                        </g>
                    </Layout>
                );
            case CalendarScaleLevels.DAYS.ordinal:
                return (
                    <Layout key={'days-hour'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported scale level [${scale}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Hour'}>
                <ScaleLevelContext.Consumer>
                    {(({scale}) => {
                        return this.renderAtScaleLevel(scale)
                    })}
                </ScaleLevelContext.Consumer>
            </g>
        )
    }
}