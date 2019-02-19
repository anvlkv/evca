import React, { Component } from 'react';

class Layout extends Component {
    layoutInProgress = false;
    chRefs = [];

    constructor(props) {
        super(props);
        this.state = {
            transformations: []
        }
    }

    componentDidMount() {
        this.layout();
    }

    componentDidUpdate() {
        this.layout();
    }

    render() {
        return (
            <g className={'Layout'}>
                {React.Children.map(this.props.children, this.renderChild.bind(this))}
            </g>
        );
    }

    renderChild(ch, i) {
        return (
            <g key={`layout-item-${i}`}
               className={'layout-item'}
               ref={this.setChildRef(i).bind(this)}
               transform={this.getChildTransformations(i)}>
                {ch}
            </g>
        )
    }

    setChildRef(i) {
        return (el) => {
            if (el) {
                this.chRefs[i] = el;
            }
        };
    }

    layout() {
        if (this.layoutInProgress) {
            this.layoutInProgress = false;
        }
        else {
            this.layoutInProgress = true;
            const bBoxes = this.chRefs.map(ref => ref.getBBox());
            // const whiteSpace = bBoxes.reduce((acc, current, at, all) => {
            //     acc[0] += current.width;
            //     acc[1] += current.height;
            //     return acc;
            // }, [0, 0]).map((val, at) => {
            //     if (at === 0) {
            //
            //     }
            //     else {
            //
            //     }
            // });
            const [xDominant, yDominant] = bBoxes.reduce((acc, current, at, all) => {
                if (!acc[0] || acc[0].bBox.width < current.width) {
                    acc[0] = { bBox:current, at };
                }

                if (!acc[1] || acc[1].bBox.height < current.height) {
                    acc[1] = { bBox:current, at };
                }
                return acc;
            }, [null, null]);


            const translates = [];
            const scales = [];
            const transformations = [];

            bBoxes.forEach((bBox, at) => {
                translates[at] = [0, 0];

                switch (this.props.direction) {
                    case 'x':
                        if (at !== 0) {
                            translates[at] = [bBoxes[at - 1].width + translates[at - 1][0], 0]
                        }
                        break;
                    case 'y':
                        if (at !== 0) {
                            translates[at] = [0, bBoxes[at - 1].height + translates[at - 1][1]]
                        }
                        break;
                    case 'z':
                    default:
                        break;
                }

                switch (`${this.props.direction}_${this.props.alignment || ''}`) {
                    case 'x_start':
                    case 'y_start':
                    case 'z_top-left':
                        break;
                    case 'x_end':
                    case 'z_bottom-left':
                        translates[at] = [
                            translates[at][0],
                            translates[at][1] + yDominant.bBox.height - bBox.height
                        ];
                        break;
                    case 'x_center':
                    case 'z_center-left':
                        translates[at] = [
                            translates[at][0],
                            translates[at][1] + yDominant.bBox.height / 2 - bBox.height / 2
                        ];
                        break;
                    case 'y_end':
                    case 'z_top-right':
                        translates[at] = [
                            translates[at][0] + xDominant.bBox.width - bBox.width,
                            translates[at][1]
                        ];
                        break;
                    case 'y_center':
                    case 'z_top-center':
                        translates[at] = [
                            translates[at][0] + xDominant.bBox.width / 2 - bBox.width / 2,
                            translates[at][1]
                        ];
                        break;
                    case 'z_center-right':
                        translates[at] = [
                            translates[at][0] + xDominant.bBox.width - bBox.width,
                            translates[at][1] + yDominant.bBox.height / 2 - bBox.height / 2
                        ];
                        break;
                    case 'z_center-center':
                        translates[at] = [
                            translates[at][0] + xDominant.bBox.width / 2 - bBox.width / 2,
                            translates[at][1] + yDominant.bBox.height / 2 - bBox.height / 2
                        ];
                        break;
                    case 'z_bottom-right':
                        translates[at] = [
                            translates[at][0] + xDominant.bBox.width - bBox.width,
                            translates[at][1] + yDominant.bBox.height - bBox.height
                        ];
                        break;
                    case 'z_bottom-center':
                        translates[at] = [
                            translates[at][0] + xDominant.bBox.width / 2 - bBox.width / 2,
                            translates[at][1] + yDominant.bBox.height - bBox.height
                        ];
                        break;
                    default:
                        break;
                }

                scales[at] = [1, 1];

                transformations[at] = [
                    scales[at][0], 0, 0,
                    scales[at][1], translates[at][0], translates[at][1]
                ];
            });

            this.setState({transformations})
        }
    }

    getChildTransformations(i) {
        return this.state.transformations[i] ? `matrix(${this.state.transformations[i].join(' ')})` : '';
    }
}

export default Layout;
