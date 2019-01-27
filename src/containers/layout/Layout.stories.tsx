import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Layout } from './Layout';


storiesOf('Layout', module)
	.add('flow: overlay, alignment: top-left', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Layout horizontal={'left'} vertical={'top'} flow={'overlay'}>
				<rect width={10} height={10} fill={'red'}/>
				<circle r={5} fill={'blue'}/>
				<path d="M 10,30
				           A 20,20 0,0,1 50,30
				           A 20,20 0,0,1 90,30
				           Q 90,60 50,90
				           Q 10,60 10,30 z" fill={'green'}/>
			</Layout>
		</svg>
	));