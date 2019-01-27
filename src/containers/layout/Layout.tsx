import React, { Component, ReactChild, ReactChildren, ReactElement, ReactNode, RefObject } from 'react';
import { findDOMNode } from 'react-dom';


export type LayoutAlignment = 'top' | 'center' | 'bottom' | number | 'left' | 'right';
export type LayoutFlow = 'overlay' | 'row' | 'column'

export interface LayoutProps {
	vertical: LayoutAlignment;
	horizontal: LayoutAlignment;
	flow: LayoutFlow;
	className?: string
}


export class Layout extends Component<LayoutProps> {
	private chRefs: Array<RefObject<SVGElement | Layout > | null>;

	constructor(props: LayoutProps) {
		super(props);
		this.chRefs = [];
	}

	componentDidMount() {
		console.log(this.chRefs);
	}

	componentDidUpdate() {
		console.log(this.chRefs);
	}

	renderChild(ch: ReactChild, i: number) {
		if (typeof ch !== 'string' && typeof ch !== 'number') {
			this.chRefs.push(React.createRef());
			ch = React.cloneElement(ch, {
				ref: this.setRef(i),
				key: `layout-element-${i}`
			});
		}

		return (
			<>
				{ch}
			</>
		)
	}

	render() {
		this.chRefs = [];
		this.chRefs.fill(null, 0, React.Children.count(this.props.children));
		return (
			<g className={this.props.className || 'layout-group'}>
				{React.Children.map(this.props.children, this.renderChild.bind(this))}
			</g>
		);
	}
	//
	// private alignElements(children: Array<ReactElement<SVGElement> | ReactElement<Layout>>) {
	// 	if (!children || !(children instanceof Array)) {
	// 		throw new Error(`unexpected Layout children [${children}]`)
	// 	}
	//
	// 	children.forEach((ch) => {
	//
	// 	});
	//
	// 	return children;
	// }
	private setRef(i: number) {
		return (el: RefObject<SVGElement | Layout>) => {
			this.chRefs[i] = el;
		};
	}
}