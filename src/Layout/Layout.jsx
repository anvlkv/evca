import React, { Component } from 'react';

class Layout extends Component {
    layoutInProgress = false;
    chRefs = [];

    componentDidMount() {
        this.layout();
    }

    componentDidUpdate() {
        this.layout();
    }

    render() {
        return (
            <g className={'Layout'}>
                {this.props.children.map(this.renderChild.bind(this))}
            </g>
        );
    }

    renderChild(ch, i) {
        return (
            <g key={`layout-item-${i}`}
               className={'layout-item'}
               ref={this.setChildRef(i).bind(this)}
               transform={'translate(0 10)'}>
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

            this.setState({})
        }
    }
}

export default Layout;
