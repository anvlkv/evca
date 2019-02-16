import React from 'react';
import Layout from './Layout';
import { mount } from 'enzyme'

describe('Layout', () => {
    let props;
    let mountedComponent;
    const component = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <svg>
                    <Layout {...props}>
                        <rect width={10} height={20} fill={'blue'}/>
                        <rect width={20} height={20} fill={'red'}/>
                    </Layout>
                </svg>
            );
        }
        return mountedComponent;
    };

    beforeEach(() => {
        props = {
            direction: 'x'
        };
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

    it('translates 2nd item, so that it is adjacent to 1st', () => {
        const g = component().find('g.layout-item');
        expect(g[1].props().transform).toEqual('translate(10 0)')
    });


});

