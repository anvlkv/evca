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
                  height={10}
                  fill={'blue'}
                  data-b-box-mock="{x: 0, y: 0, width: 10, height: 10}"/>,
            <rect key={1}
                  width={20}
                  height={20}
                  fill={'red'}
                  data-b-box-mock="{x: 0, y: 0, width: 20, height: 20}"/>,
            <rect key={2}
                  width={30}
                  height={30}
                  fill={'green'}
                  data-b-box-mock="{x: 0, y: 0, width: 30, height: 30}"/>
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
        expect(rects.length).toEqual(3);
    });

    it('transforms children', () => {
        const g = component().find('g.layout-item').filterWhere(el => {
            return !!el.props().transform.includes('matrix');
        });
        expect(g.length).toEqual(3);
    });

    describe('with direction "x"', () => {
        beforeEach(() => {
            props = {
                direction: 'x'
            };
        });

        it('translates every next item, so that it is adjacent to previous in given direction', () => {
            const g = component().find('g.layout-item');
            expect(g.at(0).props().transform).toEqual('matrix(1 0 0 1 0 0)');
            expect(g.at(1).props().transform).toEqual('matrix(1 0 0 1 10 0)');
            expect(g.at(2).props().transform).toEqual('matrix(1 0 0 1 30 0)');
        });

        describe('with alignment "start"', () => {
            beforeEach(() => {
                props.alignment = 'start'
            });

            it('should flow items along "x" and align other items by the top edge', () => {
                const g = component().find('g.layout-item');
                expect(g.at(0).props().transform).toEqual('matrix(1 0 0 1 0 0)');
                expect(g.at(1).props().transform).toEqual('matrix(1 0 0 1 10 0)');
                expect(g.at(2).props().transform).toEqual('matrix(1 0 0 1 30 0)');
            });
        });

        describe('with alignment "end"', () => {
            beforeEach(() => {
                props.alignment = 'end'
            });

            it('should flow items along "x" and align other items by the bottom edge', () => {
                const g = component().find('g.layout-item');
                expect(g.at(0).props().transform).toEqual('matrix(1 0 0 1 0 20)');
                expect(g.at(1).props().transform).toEqual('matrix(1 0 0 1 10 10)');
                expect(g.at(2).props().transform).toEqual('matrix(1 0 0 1 30 0)');
            });
        });

        describe('with alignment "center"', () => {
            beforeEach(() => {
                props.alignment = 'center'
            });

            it('should flow items along "x" and align other items by the axis', () => {
                const g = component().find('g.layout-item');
                expect(g.at(0).props().transform).toEqual('matrix(1 0 0 1 0 10)');
                expect(g.at(1).props().transform).toEqual('matrix(1 0 0 1 10 5)');
                expect(g.at(2).props().transform).toEqual('matrix(1 0 0 1 30 0)');
            });
        });
    });

    describe('with direction "y"', () => {
        beforeEach(() => {
            children = [
                <rect key={0}
                      width={10}
                      height={10}
                      fill={'blue'}
                      data-b-box-mock="{x: 0, y: 0, width: 10, height: 10}"/>,
                <rect key={1}
                      width={20}
                      height={20}
                      fill={'red'}
                      data-b-box-mock="{x: 0, y: 0, width: 20, height: 20}"/>,
                <rect key={2}
                      width={30}
                      height={30}
                      fill={'green'}
                      data-b-box-mock="{x: 0, y: 0, width: 30, height: 30}"/>
            ];
            props = {
                direction: 'y'
            };
        });

        it('translates every next item, so that it is adjacent to previous in given direction', () => {
            const g = component().find('g.layout-item');
            expect(g.at(0).props().transform).toEqual('matrix(1 0 0 1 0 0)');
            expect(g.at(1).props().transform).toEqual('matrix(1 0 0 1 0 10)');
            expect(g.at(2).props().transform).toEqual('matrix(1 0 0 1 0 30)');
        });

        describe('with alignment "start"', () => {
            beforeEach(() => {
                props.alignment = 'start'
            });

            it('should flow items along "y" and align other items by the left edge', () => {
                const g = component().find('g.layout-item');
                expect(g.at(0).props().transform).toEqual('matrix(1 0 0 1 0 0)');
                expect(g.at(1).props().transform).toEqual('matrix(1 0 0 1 0 10)');
                expect(g.at(2).props().transform).toEqual('matrix(1 0 0 1 0 30)');
            });
        });

        describe('with alignment "end"', () => {
            beforeEach(() => {
                props.alignment = 'end'
            });

            it('should flow items along "y" and align other items by the bottom edge', () => {
                const g = component().find('g.layout-item');
                expect(g.at(0).props().transform).toEqual('matrix(1 0 0 1 20 0)');
                expect(g.at(1).props().transform).toEqual('matrix(1 0 0 1 10 10)');
                expect(g.at(2).props().transform).toEqual('matrix(1 0 0 1 0 30)');
            });
        });

        describe('with alignment "center"', () => {
            beforeEach(() => {
                props.alignment = 'center'
            });

            it('should flow items along "y" and align other items by the axis', () => {
                const g = component().find('g.layout-item');
                expect(g.at(0).props().transform).toEqual('matrix(1 0 0 1 10 0)');
                expect(g.at(1).props().transform).toEqual('matrix(1 0 0 1 5 10)');
                expect(g.at(2).props().transform).toEqual('matrix(1 0 0 1 0 30)');
            });
        });
    });

    describe('with direction "z"', () => {
        beforeEach(() => {
            children = [
                <rect key={0}
                      width={10}
                      height={10}
                      fill={'blue'}
                      data-b-box-mock="{x: 0, y: 0, width: 10, height: 10}"/>,
                <rect key={1}
                      width={20}
                      height={20}
                      fill={'red'}
                      data-b-box-mock="{x: 0, y: 0, width: 20, height: 20}"/>,
                <rect key={2}
                      width={30}
                      height={30}
                      fill={'green'}
                      data-b-box-mock="{x: 0, y: 0, width: 30, height: 30}"/>
            ];
            props = {
                direction: 'z'
            };
        });

        it('translates every next item, so that it is adjacent to previous in given direction', () => {
            const g = component().find('g.layout-item');
            expect(g.at(0).props().transform).toEqual('matrix(1 0 0 1 0 0)');
            expect(g.at(1).props().transform).toEqual('matrix(1 0 0 1 0 0)');
            expect(g.at(2).props().transform).toEqual('matrix(1 0 0 1 0 0)');
        });

        describe('with alignment "center-center"', () => {
            beforeEach(() => {
                props.alignment = 'center-center'
            });

            it('should center all items', () => {
                const g = component().find('g.layout-item');
                expect(g.at(0).props().transform).toEqual('matrix(1 0 0 1 10 10)');
                expect(g.at(1).props().transform).toEqual('matrix(1 0 0 1 5 5)');
                expect(g.at(2).props().transform).toEqual('matrix(1 0 0 1 0 0)');
            });
        });
    });

    describe('with fitX "100", not fitting items and direction "x"', () => {
        beforeEach(() => {
            children = [
                ...children,
                ...children,
                ...children
            ];
            props = {
                fitX: 100,
                direction: 'x'
            };
        });

        it('should fit items in row of given width', () => {
            const g = component().find('g.layout-item');
            expect(g.at(0).props().transform).toEqual('matrix(0.5555555555555556 0 0 0.5555555555555556 0 0)');
            expect(g.at(4).props().transform).toEqual('matrix(0.5555555555555556 0 0 0.5555555555555556 38.88888888888889 0)');
        });
    });

    describe('with fitX "75", white space and direction "x"', () => {
        beforeEach(() => {
            props = {
                fitX: 75,
                direction: 'x'
            };
        });

        it('should spread items in row of given width', () => {
            const g = component().find('g.layout-item');
            expect(g.at(0).props().transform).toEqual('matrix(1.25 0 0 1.25 0 0)');
            expect(g.at(2).props().transform).toEqual('matrix(1.25 0 0 1.25 37.5 0)');
        });
    });

    describe('with fitY "100", white space and direction "y"', () => {
        beforeEach(() => {
            props = {
                fitY: 100,
                direction: 'y'
            };
        });

        it('should spread items in column of given height', () => {
            const g = component().find('g.layout-item');
            expect(g.at(0).props().transform).toEqual('matrix(1.6666666666666665 0 0 1.6666666666666665 0 0)');
            expect(g.at(2).props().transform).toEqual('matrix(1.6666666666666665 0 0 1.6666666666666665 0 49.99999999999999)');
        });
    });

    describe('with fitY "75", not fitting items and direction "y"', () => {
        beforeEach(() => {
            children = [
                ...children,
                ...children,
                ...children
            ];
            props = {
                fitY: 75,
                direction: 'y'
            };
        });

        it('should fit items in column of given height', () => {
            const g = component().find('g.layout-item');
            expect(g.at(0).props().transform).toEqual('matrix(0.41666666666666663 0 0 0.41666666666666663 0 0)');
            expect(g.at(2).props().transform).toEqual('matrix(0.41666666666666663 0 0 0.41666666666666663 0 12.499999999999998)');
        });
    });

    describe('with fitY "75", fitX "75", not fitting items and direction "y"', () => {
        beforeEach(() => {
            children = [
                ...children,
                ...children,
                ...children
            ];
            props = {
                fitY: 75,
                fitX: 75,
                direction: 'y'
            };
        });

        it('should fit / spread items in box of given size', () => {
            const g = component().find('g.layout-item');
            expect(g.at(0).props().transform).toEqual('matrix(0.41666666666666663 0 0 0.41666666666666663 0 0)');
            expect(g.at(4).props().transform).toEqual('matrix(0.41666666666666663 0 0 0.41666666666666663 0 29.166666666666664)');
        });
    });

    describe('with fitY "75", fitX "75", white space and direction "x"', () => {
        beforeEach(() => {
            props = {
                fitY: 75,
                fitX: 75,
                direction: 'x',
                ignoreRatio: true
            };
        });

        it('should fit / spread items in box of given size', () => {
            const g = component().find('g.layout-item');
            expect(g.at(0).props().transform).toEqual('matrix(1.25 0 0 2.5 0 0)');
            expect(g.at(2).props().transform).toEqual('matrix(1.25 0 0 2.5 37.5 0)');
        });
    });
});

