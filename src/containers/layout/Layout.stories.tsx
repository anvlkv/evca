import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Layout } from './Layout';
import { LayoutAlignmentHorizontal, LayoutAlignmentVertical, LayoutFlow } from './Layout.enum';


storiesOf('Layout', module)
	.add('flow: overlap, alignment: top-left', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.LEFT}
			        verticalAlignment={LayoutAlignmentVertical.TOP}
			        flow={LayoutFlow.OVERLAP}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
				           A 20,20 0,0,1 50,30
				           A 20,20 0,0,1 90,30
				           Q 90,60 50,90
				           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: overlap, alignment: bottom-left', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.LEFT}
			        verticalAlignment={LayoutAlignmentVertical.BOTTOM}
			        flow={LayoutFlow.OVERLAP}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
					           A 20,20 0,0,1 50,30
					           A 20,20 0,0,1 90,30
					           Q 90,60 50,90
					           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: overlap, alignment: bottom-right', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.RIGHT}
			        verticalAlignment={LayoutAlignmentVertical.BOTTOM}
			        flow={LayoutFlow.OVERLAP}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
						           A 20,20 0,0,1 50,30
						           A 20,20 0,0,1 90,30
						           Q 90,60 50,90
						           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: overlap, alignment: bottom-center', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
			        verticalAlignment={LayoutAlignmentVertical.BOTTOM}
			        flow={LayoutFlow.OVERLAP}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
							           A 20,20 0,0,1 50,30
							           A 20,20 0,0,1 90,30
							           Q 90,60 50,90
							           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: overlap, alignment: top-center', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
			        verticalAlignment={LayoutAlignmentVertical.TOP}
			        flow={LayoutFlow.OVERLAP}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
								           A 20,20 0,0,1 50,30
								           A 20,20 0,0,1 90,30
								           Q 90,60 50,90
								           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: overlap, alignment: bottom-center', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
			        verticalAlignment={LayoutAlignmentVertical.BOTTOM}
			        flow={LayoutFlow.OVERLAP}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
									           A 20,20 0,0,1 50,30
									           A 20,20 0,0,1 90,30
									           Q 90,60 50,90
									           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: overlap, alignment: center-center', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
			        verticalAlignment={LayoutAlignmentVertical.CENTER}
			        flow={LayoutFlow.OVERLAP}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
									           A 20,20 0,0,1 50,30
									           A 20,20 0,0,1 90,30
									           Q 90,60 50,90
									           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: row, alignment: top-left', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.LEFT}
			        verticalAlignment={LayoutAlignmentVertical.TOP}
			        flow={LayoutFlow.ROW}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
					           A 20,20 0,0,1 50,30
					           A 20,20 0,0,1 90,30
					           Q 90,60 50,90
					           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: row, alignment: bottom-left', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.LEFT}
			        verticalAlignment={LayoutAlignmentVertical.BOTTOM}
			        flow={LayoutFlow.ROW}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
						           A 20,20 0,0,1 50,30
						           A 20,20 0,0,1 90,30
						           Q 90,60 50,90
						           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: row, alignment: bottom-right', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.RIGHT}
			        verticalAlignment={LayoutAlignmentVertical.BOTTOM}
			        flow={LayoutFlow.ROW}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
							           A 20,20 0,0,1 50,30
							           A 20,20 0,0,1 90,30
							           Q 90,60 50,90
							           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: row, alignment: bottom-center', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
			        verticalAlignment={LayoutAlignmentVertical.BOTTOM}
			        flow={LayoutFlow.ROW}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
								           A 20,20 0,0,1 50,30
								           A 20,20 0,0,1 90,30
								           Q 90,60 50,90
								           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: row, alignment: top-center', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
			        verticalAlignment={LayoutAlignmentVertical.TOP}
			        flow={LayoutFlow.ROW}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
									           A 20,20 0,0,1 50,30
									           A 20,20 0,0,1 90,30
									           Q 90,60 50,90
									           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: row, alignment: center-center', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
			        verticalAlignment={LayoutAlignmentVertical.CENTER}
			        flow={LayoutFlow.ROW}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
										           A 20,20 0,0,1 50,30
										           A 20,20 0,0,1 90,30
										           Q 90,60 50,90
										           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: column, alignment: top-left', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.LEFT}
			        verticalAlignment={LayoutAlignmentVertical.TOP}
			        flow={LayoutFlow.COLUMN}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
					           A 20,20 0,0,1 50,30
					           A 20,20 0,0,1 90,30
					           Q 90,60 50,90
					           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: column, alignment: bottom-left', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.LEFT}
			        verticalAlignment={LayoutAlignmentVertical.BOTTOM}
			        flow={LayoutFlow.COLUMN}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
						           A 20,20 0,0,1 50,30
						           A 20,20 0,0,1 90,30
						           Q 90,60 50,90
						           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: column, alignment: bottom-right', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.RIGHT}
			        verticalAlignment={LayoutAlignmentVertical.BOTTOM}
			        flow={LayoutFlow.COLUMN}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
							           A 20,20 0,0,1 50,30
							           A 20,20 0,0,1 90,30
							           Q 90,60 50,90
							           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: column, alignment: bottom-center', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
			        verticalAlignment={LayoutAlignmentVertical.BOTTOM}
			        flow={LayoutFlow.COLUMN}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
								           A 20,20 0,0,1 50,30
								           A 20,20 0,0,1 90,30
								           Q 90,60 50,90
								           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: column, alignment: top-center', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
			        verticalAlignment={LayoutAlignmentVertical.TOP}
			        flow={LayoutFlow.COLUMN}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
									           A 20,20 0,0,1 50,30
									           A 20,20 0,0,1 90,30
									           Q 90,60 50,90
									           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: column, alignment: bottom-center', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
			        verticalAlignment={LayoutAlignmentVertical.BOTTOM}
			        flow={LayoutFlow.COLUMN}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
										           A 20,20 0,0,1 50,30
										           A 20,20 0,0,1 90,30
										           Q 90,60 50,90
										           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	))
	.add('flow: column, alignment: center-center', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontalAlignment={LayoutAlignmentHorizontal.CENTER}
			        verticalAlignment={LayoutAlignmentVertical.CENTER}
			        flow={LayoutFlow.COLUMN}>
				<rect width={50} height={50} fill={'red'}/>
				<circle r={15} fill={'blue'} transform="translate(15 15)"/>
				<path transform="scale(.15)" d="M 10,30
										           A 20,20 0,0,1 50,30
										           A 20,20 0,0,1 90,30
										           Q 90,60 50,90
										           Q 10,60 10,30 z" fill={'green'}/>
				<rect width={100} height={50} fill={'rgba(250, 120, 80, .25)'}/>
			</Layout>
		</svg>
	));
