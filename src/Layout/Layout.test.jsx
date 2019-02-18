import React from 'react';
import Layout from './Layout';
import { mount } from 'enzyme'

describe('Layout', () => {
    let props;
    let mountedComponent;
    let children;

    const component = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <svg>
                    <Layout {...props}>
                        {children}
                    </Layout>
                </svg>
            );
        }
        return mountedComponent;
    };

    beforeEach(() => {
        children = [
            <rect key={0}
                  width={10}
                  height={20}
                  fill={'blue'}
                  data-b-box-mock="{x: 0, y: 0, width: 10, height: 20}"/>,
            <rect key={1}
                  width={20}
                  height={20}
                  fill={'red'}
                  data-b-box-mock="{x: 0, y: 0, width: 20, height: 20}"/>
        ];
        props = {};
        mountedComponent = undefined;
    });

    it('renders without crashing', () => {
        expect(component()).toBeTruthy();
    });

    it('renders g element', () => {
        const g = component().find('g');
        expect(g.length).toBeGreaterThan(0);
    });

    it('renders children', () => {
        const rects = component().find('rect');
        expect(rects.length).toEqual(2);
    });

    it('transforms children', () => {
        const g = component().find('g.layout-item').filterWhere(el => {
            return !!el.props().transform;
        });
        expect(g.length).toEqual(2);
    });

    describe('with direction "x"', () => {
        beforeEach(() => {
            children = [
                <rect key={0}
                      width={10}
                      height={20}
                      fill={'blue'}
                      data-b-box-mock="{x: 0, y: 0, width: 10, height: 20}"/>,
                <rect key={1}
                      width={20}
                      height={20}
                      fill={'red'}
                      data-b-box-mock="{x: 0, y: 0, width: 20, height: 20}"/>,
                <rect key={2}
                      width={20}
                      height={20}
                      fill={'green'}
                      data-b-box-mock="{x: 0, y: 0, width: 20, height: 20}"/>
            ];
            props = {
                direction: 'x'
            };
        });

        it('translates 2nd item, so that it is adjacent to 1st', () => {
            const g = component().find('g.layout-item');
            expect(g.at(0).props().transform).toEqual('matrix(1 0 0 1 0 0)');
            expect(g.at(1).props().transform).toEqual('matrix(1 0 0 1 10 0)');
            expect(g.at(2).props().transform).toEqual('matrix(1 0 0 1 30 0)');
        });
    });



});

