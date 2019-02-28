import { storiesOf } from '@storybook/react';
import React from 'react';
import { Calendar } from './Calendar';

storiesOf('Calendar', module)
    .add('default', (() => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Calendar/>
        </svg>
    )))