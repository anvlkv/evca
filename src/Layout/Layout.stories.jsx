import React from 'react';

import { storiesOf } from '@storybook/react';
import Layout from "./Layout";

storiesOf('Layout', module)
    .add('flow direction "x"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'x'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "y"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'y'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
            </Layout>
        </svg>
    ));
