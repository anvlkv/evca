import React, { Component, ReactChild } from 'react';
import { LayoutAlignmentHorizontal, LayoutAlignmentVertical, LayoutFit, LayoutFlow } from './Layout.enum';


export type LayoutAlignment<L> = L | number ;

export interface LayoutProps {
	verticalAlignment?: LayoutAlignment<LayoutAlignmentVertical>;
	horizontalAlignment?: LayoutAlignment<LayoutAlignmentHorizontal>;
	flow: LayoutFlow;
	className?: string;
	spacing?: number;
	transform?: string;
	fit?: LayoutFit;
}

export interface LayoutState {
	transforms: string[];
}

interface LayoutElementRef {
	ref: SVGGElement | null;
	props: {[prop: string]: any};
}

interface SizedLayoutElement {
	bBox: SVGRect,
	isVerticalAlignmentDominant: boolean;
	isHorizontalAlignmentDominant: boolean;
	el: SVGGElement;
}

interface TransformationsChainElement {
	translateX?: number;
	translateY?: number;
	scaleX?: number;
	scaleY?: number;
	sizedEl: SizedLayoutElement;
	spacing?: number
	allocated: number;
	i: number;
}


export class Layout extends Component<LayoutProps, LayoutState> {
	private chRefs: Array<LayoutElementRef>;

	constructor(props: LayoutProps) {
		super(props);
		this.chRefs = [];
		this.state = {
			transforms: []
		}
	}

	componentDidMount() {
		this.layout();
	}

	componentDidUpdate() {
		this.layout();
	}

	renderChild(ch: ReactChild, i: number) {
		if (!ch) {
			return;
		}

		if (typeof ch !== 'string' && typeof ch !== 'number') {
			this.chRefs.push({
				ref: null,
				props: {...ch.props}
			});
		}

		return (
			<g ref={this.setRef(i).bind(this)}
			   key={`layout-group-${i}`}
			   transform={this.getChildTransformations(i)}>
				{ch}
			</g>
		)
	}

	render() {
		this.chRefs = [];
		return (
			<g className={this.props.className || 'layout-group'} transform={this.props.transform}>
				{React.Children.map(this.props.children, this.renderChild.bind(this))}
			</g>
		);
	}

	private setRef(i: number) {
		return (el: SVGGElement | null) => {
			if (el) {
				this.chRefs[i].ref = el;
			}
		};
	}

	private layout() {
		const spacing = this.props.spacing ? this.props.spacing : 0;
		const transforms = [...this.state.transforms];
		let hDom: SizedLayoutElement, vDom: SizedLayoutElement;
		const sizedMap = this.chRefs.reduce((acc: Array<SizedLayoutElement | null>, le, i, all) => {
			if (le.ref) {
				const bBox = le.ref.getBBox();
				const sizedEl: SizedLayoutElement = {
					bBox,
					isHorizontalAlignmentDominant: false,
					isVerticalAlignmentDominant: false,
					el: le.ref
				};
				if (!hDom || hDom.bBox.width < bBox.width) {
					hDom = sizedEl;
					sizedEl.isHorizontalAlignmentDominant = true;
					const hDominantShift = acc.find(el => !!(el && el.isHorizontalAlignmentDominant));
					if (hDominantShift) hDominantShift.isHorizontalAlignmentDominant = false;
				}

				if (!vDom || vDom.bBox.width < bBox.height) {
					vDom = sizedEl;
					sizedEl.isVerticalAlignmentDominant= true;
					const vDominantShift = acc.find(el => !!(el && el.isVerticalAlignmentDominant));
					if (vDominantShift) vDominantShift.isVerticalAlignmentDominant = false;
				}

				acc.push(sizedEl);
			}
			else {
				acc.push(null);
			}
			return acc;
		}, []);

		let allocated = 0;
		let shouldReRender = false;

		sizedMap.forEach((sizedEl, i) => {
			if (sizedEl) {

				let transformingEl = Layout.sizedToTransformationsChainElement(sizedEl, i, {spacing, allocated});

				if (this.props.flow) {
					transformingEl = this.flowElement(transformingEl);
				}

				if (this.props.horizontalAlignment) {
					transformingEl = this.horizontallyAlignElement(transformingEl, hDom);
				}

				if (this.props.verticalAlignment) {
					transformingEl = this.verticallyAlignElement(transformingEl, vDom);
				}

				if (this.props.fit) {
					transformingEl = this.fitElement(transformingEl, sizedMap.length, hDom, vDom);
				}

				allocated = transformingEl.allocated;

				const transform = Layout.transformationsChainElementToTransformString(transformingEl);

				if (transforms[i] !== transform) {
					shouldReRender = true;
					transforms[i] = transform;
				}
			}
		});

		if (shouldReRender) {
			this.setState({transforms});
		}
	}

	private static sizedToTransformationsChainElement(sizedEl: SizedLayoutElement , i: number, previousTransformation: Partial<TransformationsChainElement> = {}): TransformationsChainElement{
		return {
			...previousTransformation,
			sizedEl: previousTransformation.sizedEl || sizedEl,
			i: previousTransformation.i || i,
			allocated: previousTransformation.allocated || 0,
			spacing: previousTransformation.spacing || 0,
		}
	}

	private static transformationsChainElementToTransformString(el: TransformationsChainElement): string {
		let translate = '';
		if (el.translateX || el.translateY) {
			translate = `translate(${el.translateX ? el.translateX : 0} ${el.translateY ? el.translateY : 0})`
		}

		let scale = '';
		if (el.scaleX || el.scaleY) {
			// scale = `scale(${el.scaleX ? el.scaleX : 1} ${el.scaleY ? el.scaleY : 1})`
		}
		return [translate, scale].join(' ');
	}

	private flowElement(el: TransformationsChainElement): TransformationsChainElement {
		let {translateX, translateY, spacing, allocated, sizedEl} = el;
		[translateX, translateY, spacing] = [translateX || 0, translateY || 0, spacing || 0];
		let elSpacing = (translateX ? spacing : 0);
		switch (this.props.flow) {
			case LayoutFlow.ROW:
				translateX += elSpacing + allocated;
				allocated += sizedEl.bBox.width;
				break;
			case LayoutFlow.COLUMN:
				translateY += elSpacing + allocated;
				allocated += sizedEl.bBox.height;
				break;
			case LayoutFlow.OVERLAP:
				break;
		}

		return {
			...el,
			translateX,
			translateY,
			allocated
		}
	}

	private horizontallyAlignElement(el: TransformationsChainElement, hDom: SizedLayoutElement): TransformationsChainElement {
		let {translateX, spacing, sizedEl} = el;
		[translateX, spacing] = [translateX || 0, spacing || 0];
		switch (this.props.horizontalAlignment) {
			case LayoutAlignmentHorizontal.LEFT:
				break;
			case LayoutAlignmentHorizontal.RIGHT:
				if (!sizedEl.isHorizontalAlignmentDominant && this.props.flow !== LayoutFlow.ROW) {
					translateX += hDom.bBox.width - sizedEl.bBox.width;
				}
				break;
			case LayoutAlignmentHorizontal.CENTER:
				if (!sizedEl.isHorizontalAlignmentDominant && this.props.flow !== LayoutFlow.ROW) {
					translateX += hDom.bBox.width / 2 - sizedEl.bBox.width / 2;
				}
				break;
			default:
				if (!sizedEl.isHorizontalAlignmentDominant && this.props.flow !== LayoutFlow.ROW && this.props.horizontalAlignment) {
					translateX += (hDom.bBox.width / this.props.horizontalAlignment - sizedEl.bBox.width / this.props.horizontalAlignment) * 100;
				}
				break;
		}

		return {
			...el,
			translateX
		}
	}

	private verticallyAlignElement(el: TransformationsChainElement, vDom: SizedLayoutElement): TransformationsChainElement {
		let {translateY, spacing, sizedEl} = el;
		[translateY, spacing] = [translateY || 0, spacing || 0];
		switch (this.props.verticalAlignment) {
			case LayoutAlignmentVertical.TOP:
				break;
			case LayoutAlignmentVertical.BOTTOM:
				if (!sizedEl.isVerticalAlignmentDominant && this.props.flow !== LayoutFlow.COLUMN) {
					translateY += vDom.bBox.height - sizedEl.bBox.height;
				}
				break;
			case LayoutAlignmentVertical.CENTER:
				if (!sizedEl.isVerticalAlignmentDominant && this.props.flow !== LayoutFlow.COLUMN) {
					translateY += vDom.bBox.height / 2 - sizedEl.bBox.height / 2;
				}
				break;
			default:
				if (!sizedEl.isVerticalAlignmentDominant && this.props.flow !== LayoutFlow.COLUMN && this.props.verticalAlignment) {
					translateY += (vDom.bBox.height / this.props.verticalAlignment - sizedEl.bBox.height / this.props.verticalAlignment) * 100;
				}
				break;
		}

		return {
			...el,
			translateY
		}
	}
	private fitElement(el: TransformationsChainElement, fitIn: number, hDom: SizedLayoutElement, vDom: SizedLayoutElement): TransformationsChainElement {
		let {scaleX, scaleY, sizedEl} = el;
		[scaleX, scaleY] = [scaleX || 1, scaleY || 1];

		switch (this.props.fit) {
			case LayoutFit.WIDTH:
				if (this.props.flow === LayoutFlow.ROW) {
					scaleX = 1/fitIn;
				}
				else {
					scaleX = sizedEl.bBox.width / hDom.bBox.width
				}
				scaleY = scaleX;
				break;
			case LayoutFit.HEIGHT:
				if (this.props.flow === LayoutFlow.COLUMN) {
					scaleY = 1/fitIn;
				}
				else {
					scaleY = sizedEl.bBox.height / vDom.bBox.height
				}
				scaleX = scaleY;
				break;
			case LayoutFit.BOTH:
				if (this.props.flow === LayoutFlow.ROW) {
					scaleX = 1/fitIn;
					scaleY = sizedEl.bBox.height / vDom.bBox.height;
				}
				else {
					scaleY = 1/fitIn;
					scaleX = sizedEl.bBox.width / hDom.bBox.width;
				}

				if (scaleX !== scaleY) {
					scaleX = scaleY = scaleY > scaleX ? scaleX : scaleY;
				}
				break;
			default:
				break;
		}

		return {
			...el,
			scaleY,
			scaleX
		}
	}

	private getChildTransformations(i: number): string {
		return (this.state.transforms[i] || '').trim();
	}

}