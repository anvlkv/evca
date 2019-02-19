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
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "x", alignment "start"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'x'} alignment={'start'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "x", alignment "center"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'x'} alignment={'center'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "x", alignment "end"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'x'} alignment={'end'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
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
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "y", alignment "start"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'y'} alignment={'start'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "y", alignment "center"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'y'} alignment={'center'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "y", alignment "end"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'y'} alignment={'end'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
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
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", alignment "top-left"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'top-left'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", alignment "top-center"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'top-center'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", alignment "top-right"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'top-right'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", alignment "center-left"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'center-left'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", alignment "center-center"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'center-center'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", alignment "center-right"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'center-right'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", alignment "bottom-left"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'bottom-left'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", alignment "bottom-center"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'bottom-center'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", alignment "bottom-right"', () => (
        <svg viewBox={`0 0 100 100`}
             width={500}
             height={500}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'bottom-right'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ));
