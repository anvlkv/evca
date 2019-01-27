import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Day } from './day';


storiesOf('Day', module)
	.add('with "date" date', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Day date={new Date()}/>
		</svg>
	));