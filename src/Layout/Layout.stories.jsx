import React, {Component} from 'react';

import { storiesOf } from '@storybook/react';
import Layout from "./Layout";

storiesOf('Layout', module)
    .add('flow direction "x"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'x'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "x", \n alignment "start"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'x'} alignment={'start'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "x", \n alignment "center"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'x'} alignment={'center'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "x", \n alignment "end"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'x'} alignment={'end'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "x", \n alignment "end", \n fitX "100"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'x'} alignment={'end'} fitX={100}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "x", \n alignment "end", \n fitX "55"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'x'} alignment={'end'} fitX={55}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={5} height={10} fill={'blue'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "x", \n alignment "end", \n fitY "100"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'x'} alignment={'end'} fitY={100}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "x", \n alignment "end", \n fitY "100" fitX "55"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'x'} alignment={'end'} fitY={100} fitX={55}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "y"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'y'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('when adding children', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <AddChildClone direction={'y'}>
                <rect width={5} height={10} fill={'orange'}/>
            </AddChildClone>
        </svg>
    ))
    .add('flow direction "y", \n alignment "start"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'y'} alignment={'start'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "y", \n alignment "center"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'y'} alignment={'center'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "y", \n alignment "end"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'y'} alignment={'end'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "y", \n alignment "end", \n fitY "100"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'y'} alignment={'end'} fitY={100}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "y", \n alignment "end", \n fitY "55"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'y'} alignment={'end'} fitY={55}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "y", \n alignment "end", \n fitX "100"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'y'} alignment={'end'} fitX={100}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('when adding children, flow direction "y", \n alignment "end", \n fitX "100"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <AddChildClone direction={'y'} alignment={'end'} fitX={50} fitY={55}>
                <g>
                    <rect width={60} height={10} fill={'orange'}/>
                    <rect width={20} height={2} fill={'green'}/>
                </g>
            </AddChildClone>
        </svg>
    ))
    .add('when nesting children', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <AddChildClone direction={'y'} alignment={'end'} fitX={50} fitY={55}>
                <g>
                    <AddChildClone direction={'x'} alignment={'end'} fitX={50} fitY={55}>
                        <g>
                            <rect width={60} height={10} fill={'orange'}/>
                            <rect width={20} height={2} fill={'green'}/>
                        </g>
                    </AddChildClone>
                </g>
            </AddChildClone>
        </svg>
    ))
    .add('flow direction "y", \n alignment "end", \n fitY "100" fitX "55"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'y'} alignment={'end'} fitY={100} fitX={55}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "top-left"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'top-left'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "top-center"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'top-center'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "top-right"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'top-right'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "center-left"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'center-left'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "center-center"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'center-center'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "center-right"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'center-right'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "bottom-left"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'bottom-left'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "bottom-center"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'bottom-center'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "bottom-right"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'bottom-right'}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "center-center", \n fitX "100"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'center-center'} fitX={100}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "center-center", \n fitX "55"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'center-center'} fitX={55}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "center-center", \n fitY "100"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'center-center'} fitY={100}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ))
    .add('flow direction "z", \n alignment "center-center", \n fitY "100" fitX "55"', () => (
        <svg viewBox={`0 0 100 100`}
             width={1000}
             height={1000}
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMin meet">
            <Layout direction={'z'} alignment={'center-center'} fitY={100} fitX={55}>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
                <rect width={10} height={20} fill={'red'}/>
                <rect width={5} height={10} fill={'blue'}/>
                <rect width={7} height={5} fill={'green'}/>
            </Layout>
        </svg>
    ));


class AddChildClone extends Component {
    added = [];

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <>
                <Layout {...this.props}>
                    {this.added.map(this.renderAdded)}
                    <text dominantBaseline={'hanging'} onClick={this.onClick.bind(this)}>add {`at ${this.state.count + 1}`}</text>
                </Layout>
            </>
        );
    }

    onClick() {
        this.added.push({...this.props.children});
        this.setState({count: this.added.length});
    }

    renderAdded(el, at) {
        return (
            <g key={at}>
                {el}
            </g>
        )
    }
}
